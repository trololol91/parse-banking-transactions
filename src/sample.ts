import transactions from '../resource/transactions.json';
import { writeFileSync, existsSync, mkdirSync } from 'fs';

async function main() {
  let fileOutput = '';
  transactions.transactions.forEach((transaction) => {
    if (transaction.debit) {
      const description = transaction.transactionDescription.replace(',', '');
      const date = new Date(transaction.date)
        .toISOString()
        .matchAll(/[0-9]+-[0-9]+-[0-9]+/g);

      fileOutput += `${description}, ${date.next().value[0]}, ${
        transaction.debit
      }\n`;
    }
  });

  if (!existsSync('dist')) {
    mkdirSync('dist');
  }

  writeFileSync('dist/output.csv', fileOutput);
}

main().then((_) => _);
