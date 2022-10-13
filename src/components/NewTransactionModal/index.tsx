import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import { useContext } from 'react';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionFormSchema = z.object({
  description: z.string(),
  value: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext) 

  const {
    control,
    register, 
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  }) 

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, value, category, type } = data;

    await createTransaction({
      description,
      value,
      category,
      type,
    })

    reset();
  }

  return (    
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder="Description" 
            required
            {...register('description')}
          />
          <input 
            type="number" 
            placeholder="Value" 
            required
            {...register('value', { valueAsNumber: true })} 
          />
          <input 
            type="text" 
            placeholder="Category" 
            required
            {...register('category')} 
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType 
                  onValueChange={field.onChange} 
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Income
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Outcome
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />


          <button type="submit" disabled={isSubmitting}>
            Add New Transaction
          </button>
        </form>
        
      </Content>
    </Dialog.Portal>
  )
}
