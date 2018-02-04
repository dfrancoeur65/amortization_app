# amortization_app
Accounting application to automate journal entries.

Example:

# Without the application:
You are creating a journal entry for a deferred revenue contract:

You receive $120 on 12/1/2017 into a bank account.

The $120 is for a 12-month spotify membership.

on 12/1/2017 you make the following entry:

Bank Account 1 Dr. $120
Deferred Revenue Cr. $110
Realized Revenue Cr. $10

THEN every month for the next 12 months you would need to create a journal entry to realize 1/12 of the revenue...


# With the Amortization Application:

Name: "Contract A"    ###working on way to make templates
Date: 12/1/2017
Months: 12

Account 1: "Bank Account 1"  Enter in a Debit Amount : "120"

Account 2: "Deferred Revenue" Enter in a credit amount: "110"

Account 2: "Realized Revenue" Enter in a credit amount: "10"

PRess Submit....

All your journal entries are populated and ready for import into QB!

Need to use a library for the dates on V2...can't seem to add a month to a date easily so you'll see some weird stuff on the entries
then press submit!
