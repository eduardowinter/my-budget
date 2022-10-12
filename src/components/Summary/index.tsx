import { SummaryCard, SummaryContainer } from "./syles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>$ 12,700.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>$ 12,700.00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>$ 12,700.00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}