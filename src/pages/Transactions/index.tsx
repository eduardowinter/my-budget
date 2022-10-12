import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website development</td>
              <td>
                <PriceHighlight variant="income">
                  $ 4,000.00
                </PriceHighlight>
              </td>
              
              <td>Sales</td>
              <td>10/10/2022</td>
            </tr>
            <tr>
              <td width="50%">Tacos</td>
              <td>
                <PriceHighlight variant="outcome">
                  - $ 39.00
                </PriceHighlight>
              </td>
              <td>Food</td>
              <td>10/10/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}