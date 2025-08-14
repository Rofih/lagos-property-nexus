import { MapPin, Phone, Mail, Clock, Send, MessageSquare, FileText, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Get in touch with Lagos State Property Portal. We're here to assist you 
              with all your property-related needs and inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Block 8, Lagos State Secretariat<br />
                  Alausa, Ikeja, Lagos State<br />
                  Nigeria
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Main Line: +234-1-234-5678<br />
                  Emergency: +234-1-234-5679<br />
                  WhatsApp: +234-1-234-5680
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  General: info@lagosstate.gov.ng<br />
                  Support: support@lagosstate.gov.ng<br />
                  Complaints: complaints@lagosstate.gov.ng
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6 text-green-800" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="property-registration">Property Registration</SelectItem>
                        <SelectItem value="property-verification">Property Verification</SelectItem>
                        <SelectItem value="payment-issues">Payment Issues</SelectItem>
                        <SelectItem value="technical-support">Technical Support</SelectItem>
                        <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..." 
                      rows={5}
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-800 hover:bg-green-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-green-800" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Lagos State Secretariat, Alausa</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><strong>Landmarks:</strong> Near Alausa Bus Stop, Opposite Lagos State High Court</p>
                    <p><strong>Parking:</strong> Available on-site for visitors</p>
                    <p><strong>Public Transport:</strong> BRT and Lagos Bus Service available</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-green-800" />
                    Quick Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Support: +234-1-234-5678
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Live Chat (9 AM - 5 PM)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Download FAQ Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with specific departments for specialized assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-green-800" />
                  Property Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Head:</strong> Mrs. Adebayo Folake</p>
                  <p><strong>Phone:</strong> +234-1-234-5681</p>
                  <p><strong>Email:</strong> registration@lagosstate.gov.ng</p>
                  <p><strong>Hours:</strong> Mon-Fri, 8 AM - 5 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-800" />
                  Property Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Head:</strong> Mr. Okonkwo Chidi</p>
                  <p><strong>Phone:</strong> +234-1-234-5682</p>
                  <p><strong>Email:</strong> verification@lagosstate.gov.ng</p>
                  <p><strong>Hours:</strong> Mon-Fri, 8 AM - 5 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-800" />
                  Customer Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Head:</strong> Ms. Johnson Kemi</p>
                  <p><strong>Phone:</strong> +234-1-234-5683</p>
                  <p><strong>Email:</strong> support@lagosstate.gov.ng</p>
                  <p><strong>Hours:</strong> Mon-Sat, 8 AM - 6 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-800" />
                  Land Use Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Head:</strong> Engr. Bello Musa</p>
                  <p><strong>Phone:</strong> +234-1-234-5684</p>
                  <p><strong>Email:</strong> planning@lagosstate.gov.ng</p>
                  <p><strong>Hours:</strong> Mon-Fri, 8 AM - 5 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-800" />
                  Legal Affairs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Head:</strong> Barr. Adeyemi Tunde</p>
                  <p><strong>Phone:</strong> +234-1-234-5685</p>
                  <p><strong>Email:</strong> legal@lagosstate.gov.ng</p>
                  <p><strong>Hours:</strong> Mon-Fri, 9 AM - 4 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-green-800" />
                  IT Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Head:</strong> Mr. Okafor Emmanuel</p>
                  <p><strong>Phone:</strong> +234-1-234-5686</p>
                  <p><strong>Email:</strong> itsupport@lagosstate.gov.ng</p>
                  <p><strong>Hours:</strong> Mon-Fri, 8 AM - 6 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-800 mb-4">
              Emergency Contact
            </h2>
            <p className="text-lg text-red-700 mb-8 max-w-3xl mx-auto">
              For urgent property-related emergencies, illegal developments, or safety concerns.
            </p>
            <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Phone className="h-8 w-8 text-red-600" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-red-800">+234-1-234-5679</div>
                  <div className="text-red-600">24/7 Emergency Hotline</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                This line is monitored 24/7 for genuine emergencies only. 
                For general inquiries, please use the regular contact methods above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

