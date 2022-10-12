import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style';

export function NewTransactionModal() {
  return (    
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Value" required />
          <input type="text" placeholder="Category" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Add New Transaction
          </button>
        </form>



        
      </Content>
    </Dialog.Portal>
  )
}