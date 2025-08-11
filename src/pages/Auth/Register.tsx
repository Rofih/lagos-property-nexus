import { Helmet } from 'react-helmet-async'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { useAuthStore } from '@/features/auth/store'
import { Role } from '@/features/auth/types'
import { useNavigate } from 'react-router-dom'

const schema = Yup.object({
  name: Yup.string().min(2).required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().min(6).required('Password is required'),
  role: Yup.mixed<Role>().oneOf(['buyer','owner','firm','government','admin']).required('Role is required')
})

const Register = () => {
  const login = useAuthStore((s) => s.login)
  const navigate = useNavigate()

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Register | Lagos Real Estate Portal</title>
        <meta name="description" content="Create your account for the Lagos Real Estate Portal." />
        <link rel="canonical" href="/register" />
      </Helmet>

      <div className="mx-auto max-w-md px-4 py-12">
        <h1 className="mb-6 text-2xl font-semibold">Create an account</h1>
        <Formik
          initialValues={{ name: '', email: '', password: '', role: 'buyer' as Role }}
          validationSchema={schema}
          onSubmit={(values) => {
            // Simulate successful register -> logged in state
            login({ id: 'u1', email: values.email, name: values.name, role: values.role })
            navigate('/')
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Field as={Input} id="name" name="name" placeholder="Jane Doe" />
                {touched.name && errors.name && (
                  <div className="text-sm text-destructive">{errors.name}</div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Field as={Input} id="email" name="email" placeholder="you@example.com" />
                {touched.email && errors.email && (
                  <div className="text-sm text-destructive">{errors.email}</div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Field as={Input} id="password" name="password" type="password" />
                {touched.password && errors.password && (
                  <div className="text-sm text-destructive">{errors.password}</div>
                )}
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select onValueChange={(v) => setFieldValue('role', v)} defaultValue="buyer">
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buyer">Buyer / Renter</SelectItem>
                    <SelectItem value="owner">Property Owner</SelectItem>
                    <SelectItem value="firm">Real Estate Firm</SelectItem>
                    <SelectItem value="government">Government Agency</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="hero" type="submit" className="w-full">Create Account</Button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  )
}

export default Register
