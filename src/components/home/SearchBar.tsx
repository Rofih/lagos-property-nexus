import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export interface SearchValues {
  location: string
  minPrice?: number
  maxPrice?: number
  type?: 'apartment' | 'house' | 'studio' | 'office' | ''
}

const schema = Yup.object({
  location: Yup.string().max(60),
  minPrice: Yup.number().min(0).optional(),
  maxPrice: Yup.number().min(0).optional(),
})

interface SearchBarProps {
  initial?: SearchValues
  onSearch: (values: SearchValues) => void
}

const SearchBar = ({ initial, onSearch }: SearchBarProps) => {
  const initialValues: SearchValues = initial || { location: '', minPrice: undefined, maxPrice: undefined, type: '' }

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSearch}>
      {({ setFieldValue }) => (
        <Form className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <Field as={Input} name="location" placeholder="Location (e.g. Lekki)" />
          <Field as={Input} name="minPrice" type="number" placeholder="Min Price (₦)" />
          <Field as={Input} name="maxPrice" type="number" placeholder="Max Price (₦)" />
          <Select onValueChange={(v) => setFieldValue('type', v)}>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="office">Office</SelectItem>
            </SelectContent>
          </Select>
          <div className="lg:col-span-2">
            <Button variant="hero" type="submit" className="w-full">Search Properties</Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SearchBar
