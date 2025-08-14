import { Building2, FileCheck, Users, Shield, Search, CreditCard, MapPin, Clock, CheckCircle, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Comprehensive property management services designed to streamline real estate 
              transactions and ensure compliance with Lagos State regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential services for property owners, buyers, and real estate professionals 
              operating in Lagos State.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-green-800 mb-4" />
                <CardTitle className="text-xl">Property Registration</CardTitle>
                <CardDescription>Official property registration and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Certificate of Occupancy (C of O)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Deed of Assignment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Survey Plan Registration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Building Plan Approval
                  </li>
                </ul>
                <Badge variant="secondary" className="mb-4">Processing Time: 30-45 days</Badge>
                <Button className="w-full bg-green-800 hover:bg-green-700">
                  Start Registration
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileCheck className="h-12 w-12 text-green-800 mb-4" />
                <CardTitle className="text-xl">Property Verification</CardTitle>
                <CardDescription>Comprehensive property verification services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Title Document Verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Ownership History Check
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Encumbrance Certificate
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Compliance Status Report
                  </li>
                </ul>
                <Badge variant="secondary" className="mb-4">Processing Time: 7-14 days</Badge>
                <Button className="w-full bg-green-800 hover:bg-green-700">
                  Verify Property
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-green-800 mb-4" />
                <CardTitle className="text-xl">Property Search</CardTitle>
                <CardDescription>Advanced property search and discovery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Location-based Search
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Price Range Filtering
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Property Type Categories
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Amenities Matching
                  </li>
                </ul>
                <Badge variant="secondary" className="mb-4">Real-time Results</Badge>
                <Button className="w-full bg-green-800 hover:bg-green-700">
                  Search Properties
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-green-800 mb-4" />
                <CardTitle className="text-xl">Payment Services</CardTitle>
                <CardDescription>Secure payment processing for all transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Government Fees Payment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Property Tax Payment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Development Levy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Service Charges
                  </li>
                </ul>
                <Badge variant="secondary" className="mb-4">Instant Processing</Badge>
                <Button className="w-full bg-green-800 hover:bg-green-700">
                  Make Payment
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-800 mb-4" />
                <CardTitle className="text-xl">Land Use Planning</CardTitle>
                <CardDescription>Professional land use and development planning</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Zoning Information
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Development Guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Master Plan Compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Environmental Impact Assessment
                  </li>
                </ul>
                <Badge variant="secondary" className="mb-4">Expert Consultation</Badge>
                <Button className="w-full bg-green-800 hover:bg-green-700">
                  Get Planning Info
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-800 mb-4" />
                <CardTitle className="text-xl">Stakeholder Management</CardTitle>
                <CardDescription>Comprehensive stakeholder coordination services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Property Owner Services
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Real Estate Firm Support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Buyer/Renter Assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Government Liaison
                  </li>
                </ul>
                <Badge variant="secondary" className="mb-4">24/7 Support</Badge>
                <Button className="w-full bg-green-800 hover:bg-green-700">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent process designed to make property transactions 
              efficient and secure.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Registration</h3>
              <p className="text-gray-600">
                Create your account and complete the KYC verification process
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600">
                Upload required documents and property information
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Verification</h3>
              <p className="text-gray-600">
                Government agencies verify and approve your submission
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Completion</h3>
              <p className="text-gray-600">
                Receive your certificates and complete the transaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Fees */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Fees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing structure for all property-related services in Lagos State.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Basic Services</CardTitle>
                <CardDescription>Essential property services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Property Search</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property Verification</span>
                    <span className="font-semibold">₦25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Document Review</span>
                    <span className="font-semibold">₦15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Check</span>
                    <span className="font-semibold">₦20,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Registration Services</CardTitle>
                <CardDescription>Official property registration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Certificate of Occupancy</span>
                    <span className="font-semibold">₦500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deed of Assignment</span>
                    <span className="font-semibold">₦100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Survey Plan Registration</span>
                    <span className="font-semibold">₦75,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Building Plan Approval</span>
                    <span className="font-semibold">₦150,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Premium Services</CardTitle>
                <CardDescription>Advanced property services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Express Processing</span>
                    <span className="font-semibold">+50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legal Consultation</span>
                    <span className="font-semibold">₦50,000/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property Valuation</span>
                    <span className="font-semibold">₦100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Due Diligence Report</span>
                    <span className="font-semibold">₦200,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-800">Important Notice</h3>
              </div>
              <p className="text-yellow-700">
                All fees are subject to change based on Lagos State Government regulations. 
                Additional charges may apply for complex properties or expedited services. 
                Please contact our support team for detailed fee breakdown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Need Help with Our Services?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our dedicated support team is available to assist you with any questions 
              about our services or help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-800 hover:bg-gray-100">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                <Shield className="mr-2 h-5 w-5" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

