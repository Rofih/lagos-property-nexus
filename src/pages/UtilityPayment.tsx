import { Helmet } from 'react-helmet-async'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PaystackPop from '@paystack/inline-js'
import { useEffect, useState } from 'react'

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  amount: Yup.number().min(100).required(),
  billType: Yup.string().oneOf(['electricity','water']).required(),
})

const UtilityPayment = () => {
  const [publicKey, setPublicKey] = useState<string>(localStorage.getItem('paystack_pk') || '')

  useEffect(() => {
    if (publicKey) localStorage.setItem('paystack_pk', publicKey)
  }, [publicKey])

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Utility Bill Payment | Lagos Real Estate</title>
        <meta name="description" content="Pay electricity and water bills securely via Paystack." />
        <link rel="canonical" href="/utility-payments" />
      </Helmet>

      <div className="mx-auto max-w-xl px-4 py-12">
        <h1 className="mb-6 text-2xl font-semibold">Pay Utility Bills</h1>

        <div className="mb-6 rounded-lg border border-border p-4">
          <Label htmlFor="pk">Paystack Public Key</Label>
          <Input id="pk" value={publicKey} onChange={(e) => setPublicKey(e.target.value)} placeholder="pk_test_..." />
          <p className="mt-1 text-xs text-muted-foreground">Your key is stored locally for testing purposes.</p>
        </div>

        <Formik
          initialValues={{ name: '', email: '', amount: 1000, billType: 'electricity' }}
          validationSchema={schema}
          onSubmit={(values) => {
            if (!publicKey) {
              alert('Please set Paystack public key')
              return
            }
            const paystack = new PaystackPop()
            paystack.newTransaction({
              key: publicKey,
              email: values.email,
              amount: values.amount * 100,
              onSuccess: () => alert('Payment successful'),
              onCancel: () => alert('Payment cancelled')
            })
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Field as={Input} id="name" name="name" />
                  {touched.name && errors.name && <div className="text-sm text-destructive">{errors.name}</div>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Field as={Input} id="email" name="email" />
                  {touched.email && errors.email && <div className="text-sm text-destructive">{errors.email}</div>}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (₦)</Label>
                  <Field as={Input} id="amount" name="amount" type="number" />
                  {touched.amount && errors.amount && <div className="text-sm text-destructive">{errors.amount}</div>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billType">Bill Type</Label>
                  <Field as="select" id="billType" name="billType" className="w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="electricity">Electricity</option>
                    <option value="water">Water</option>
                  </Field>
                </div>
              </div>
              <Button variant="hero" type="submit" className="w-full">Pay Now</Button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  )
}

export default UtilityPayment
