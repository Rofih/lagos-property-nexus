
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, SlidersHorizontal } from 'lucide-react'

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
    <div className="w-full">
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSearch}>
        {({ setFieldValue, values }) => (
          <Form className="space-y-4">
            {/* Main Search Row */}
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
              {/* Location Input */}
              <div className="lg:col-span-4">
                <div className="relative">
                  <Field 
                    as={Input} 
                    name="location" 
                    placeholder="Enter location (e.g. Lekki, Victoria Island)" 
                    className="pl-10 h-12 text-base"
                  />
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              {/* Property Type */}
              <div className="lg:col-span-3">
                <Select
                  onValueChange={(v) => setFieldValue('type', v === 'any' ? '' : v)}
                  value={values.type ? values.type : 'any'}
                >
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Type</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-2 gap-2">
                  <Field 
                    as={Input} 
                    name="minPrice" 
                    type="number" 
                    placeholder="Min Price" 
                    className="h-12 text-base"
                  />
                  <Field 
                    as={Input} 
                    name="maxPrice" 
                    type="number" 
                    placeholder="Max Price" 
                    className="h-12 text-base"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="lg:col-span-2">
                <Button variant="hero" type="submit" className="w-full h-12 text-base font-semibold">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Quick filters:</span>
              </div>
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setFieldValue('location', 'Lekki')
                  onSearch({ ...values, location: 'Lekki' })
                }}
                className="h-8 px-3 text-xs"
              >
                Lekki
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setFieldValue('location', 'Victoria Island')
                  onSearch({ ...values, location: 'Victoria Island' })
                }}
                className="h-8 px-3 text-xs"
              >
                Victoria Island
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setFieldValue('location', 'Ikeja')
                  onSearch({ ...values, location: 'Ikeja' })
                }}
                className="h-8 px-3 text-xs"
              >
                Ikeja
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SearchBar
