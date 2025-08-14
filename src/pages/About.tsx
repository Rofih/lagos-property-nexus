import { Shield, Users, Building2, FileCheck, Award, Target, Eye, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Lagos State Property Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              The official digital platform for property registration, regulation, and management 
              in Lagos State, Nigeria. Ensuring transparency, efficiency, and compliance in the real estate sector.
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Shield className="h-6 w-6" />
              <span>Trusted by Lagos State Government</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide a comprehensive, transparent, and efficient digital platform that facilitates 
                  property registration, regulation, and management while ensuring compliance with Lagos State 
                  property laws and regulations. We aim to streamline property transactions and enhance 
                  public trust in the real estate sector.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Eye className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading digital property management platform in West Africa, setting 
                  the standard for transparency, efficiency, and innovation in property regulation. 
                  We envision a future where property transactions are seamless, secure, and accessible 
                  to all citizens and investors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600 leading-relaxed space-y-2">
                  <p><strong>Transparency:</strong> Open and honest communication</p>
                  <p><strong>Integrity:</strong> Ethical practices in all operations</p>
                  <p><strong>Innovation:</strong> Embracing technology for better service</p>
                  <p><strong>Excellence:</strong> Commitment to quality and efficiency</p>
                  <p><strong>Accountability:</strong> Responsible governance and service</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Lagos State Government */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Lagos State Government
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lagos State, located in southwestern Nigeria, is the commercial and economic hub of the country. 
                  With a population of over 20 million people, it is one of the fastest-growing megacities in the world. 
                  The state government is committed to providing world-class infrastructure and services to its residents 
                  and investors.
                </p>
                <p>
                  The Ministry of Physical Planning and Urban Development oversees the orderly development of the state, 
                  ensuring that all property developments comply with approved master plans and building regulations. 
                  This portal represents our commitment to digital transformation and improved service delivery.
                </p>
                <p>
                  Under the leadership of Governor Babajide Sanwo-Olu, Lagos State continues to implement the THEMES+ 
                  agenda, focusing on Traffic Management and Transportation, Health and Environment, Education and 
                  Technology, Making Lagos a 21st Century Economy, Entertainment and Tourism, and Security and Governance.
                </p>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">20M+</div>
                  <div className="text-sm text-gray-600">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">1,171</div>
                  <div className="text-sm text-gray-600">Square Kilometers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">20</div>
                  <div className="text-sm text-gray-600">Local Governments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">37</div>
                  <div className="text-sm text-gray-600">Local Council Development Areas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive property management services designed to serve citizens, investors, 
              and real estate professionals across Lagos State.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Property Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Secure and efficient property registration services with digital documentation 
                  and verification processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileCheck className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Compliance Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Real-time monitoring and verification of property compliance with state 
                  regulations and building codes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Stakeholder Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive platform for property owners, buyers, real estate firms, 
                  and government agencies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rigorous quality control measures ensuring all properties meet Lagos State 
                  standards and specifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated leaders committed to transforming Lagos State's property sector 
              through innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-green-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle>Mr. Babajide Sanwo-Olu</CardTitle>
                <CardDescription>Executive Governor, Lagos State</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Leading Lagos State's transformation into a 21st-century economy with 
                  focus on infrastructure, technology, and sustainable development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-green-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
                <CardTitle>Dr. Idris Salako</CardTitle>
                <CardDescription>Commissioner for Physical Planning and Urban Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Overseeing the strategic development and implementation of urban planning 
                  policies and property regulation frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-green-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <CardTitle>Mrs. Folashade Jaji</CardTitle>
                <CardDescription>Permanent Secretary, Ministry of Physical Planning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ensuring efficient administration and implementation of property 
                  management policies and digital transformation initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-green-800 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Ministry Headquarters</h3>
                <p className="text-green-100">
                  Block 8, Lagos State Secretariat<br />
                  Alausa, Ikeja, Lagos State<br />
                  Nigeria
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-green-100">
                  Phone: +234-1-234-5678<br />
                  Email: info@lagosstate.gov.ng<br />
                  Emergency: +234-1-234-5678
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <p className="text-green-100">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

