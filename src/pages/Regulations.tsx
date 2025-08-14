import { FileText, Scale, Shield, AlertTriangle, Download, ExternalLink, BookOpen, Gavel } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Regulations = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Property Regulations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Comprehensive guide to Lagos State property laws, regulations, and compliance requirements 
              for property owners, developers, and real estate professionals.
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Scale className="h-6 w-6" />
              <span>Lagos State Laws 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Tabs defaultValue="property-laws" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="property-laws">Property Laws</TabsTrigger>
              <TabsTrigger value="building-codes">Building Codes</TabsTrigger>
              <TabsTrigger value="zoning">Zoning Laws</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            <TabsContent value="property-laws" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gavel className="h-5 w-5 text-green-800" />
                      Lagos State Property Protection Law 2016
                    </CardTitle>
                    <CardDescription>
                      Comprehensive law governing property rights and protection in Lagos State
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        This law establishes the legal framework for property ownership, transfer, 
                        and protection in Lagos State. It covers all aspects of property rights 
                        including acquisition, registration, and dispute resolution.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Provisions:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Property registration requirements</li>
                          <li>• Transfer procedures and documentation</li>
                          <li>• Protection against illegal acquisition</li>
                          <li>• Dispute resolution mechanisms</li>
                          <li>• Penalties for violations</li>
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-800 hover:bg-green-700">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Online
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-green-800" />
                      Land Use Act (Federal) 1978
                    </CardTitle>
                    <CardDescription>
                      Federal legislation governing land ownership and use across Nigeria
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        The Land Use Act vests all land in each state in the Governor of that state. 
                        This federal law forms the foundation for all land transactions in Lagos State 
                        and must be understood by all property stakeholders.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Provisions:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Governor as custodian of all land</li>
                          <li>• Certificate of Occupancy requirements</li>
                          <li>• Consent procedures for transfers</li>
                          <li>• Compensation for revocation</li>
                          <li>• Customary rights recognition</li>
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-800 hover:bg-green-700">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Online
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-800" />
                      Lagos State Real Estate Regulation Law 2019
                    </CardTitle>
                    <CardDescription>
                      Regulation of real estate practice and practitioners in Lagos State
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        This law regulates the practice of real estate business in Lagos State, 
                        establishing standards for real estate practitioners and protecting 
                        consumers from fraudulent practices.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Provisions:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Licensing requirements for agents</li>
                          <li>• Professional conduct standards</li>
                          <li>• Consumer protection measures</li>
                          <li>• Disciplinary procedures</li>
                          <li>• Registration of real estate firms</li>
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-800 hover:bg-green-700">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Online
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-green-800" />
                      Property Tax Law 2020
                    </CardTitle>
                    <CardDescription>
                      Comprehensive property taxation framework for Lagos State
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        This law establishes the framework for property taxation in Lagos State, 
                        including assessment procedures, payment requirements, and enforcement 
                        mechanisms for property tax compliance.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Provisions:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Property valuation methods</li>
                          <li>• Tax rates and calculations</li>
                          <li>• Payment procedures and deadlines</li>
                          <li>• Exemptions and reliefs</li>
                          <li>• Enforcement and penalties</li>
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-800 hover:bg-green-700">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Online
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="building-codes" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Lagos State Building Control Regulation 2019</CardTitle>
                    <CardDescription>
                      Comprehensive building standards and control measures
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Establishes minimum standards for building construction, safety requirements, 
                        and approval procedures for all construction activities in Lagos State.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Coverage Areas:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Structural design standards</li>
                          <li>• Fire safety requirements</li>
                          <li>• Accessibility compliance</li>
                          <li>• Environmental considerations</li>
                          <li>• Approval procedures</li>
                        </ul>
                      </div>
                      <Badge variant="secondary">Updated: January 2024</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Environmental Impact Assessment Guidelines</CardTitle>
                    <CardDescription>
                      Environmental compliance requirements for developments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Guidelines for conducting environmental impact assessments for 
                        major development projects in Lagos State.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Environmental screening</li>
                          <li>• Impact assessment studies</li>
                          <li>• Mitigation measures</li>
                          <li>• Monitoring requirements</li>
                          <li>• Public participation</li>
                        </ul>
                      </div>
                      <Badge variant="secondary">Updated: March 2024</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="zoning" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Lagos State Regional Plan and Development Law</CardTitle>
                    <CardDescription>
                      Master plan implementation and zoning regulations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Governs the implementation of regional master plans and zoning 
                        regulations across Lagos State.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Zoning Categories:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Residential zones (R1, R2, R3)</li>
                          <li>• Commercial zones (C1, C2, C3)</li>
                          <li>• Industrial zones (I1, I2)</li>
                          <li>• Mixed-use developments</li>
                          <li>• Special purpose zones</li>
                        </ul>
                      </div>
                      <Badge variant="secondary">Updated: February 2024</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Setback and Development Control Guidelines</CardTitle>
                    <CardDescription>
                      Building setback requirements and development controls
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Specific requirements for building setbacks, plot coverage, 
                        and development density controls.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Minimum setback distances</li>
                          <li>• Plot coverage ratios</li>
                          <li>• Building height restrictions</li>
                          <li>• Parking requirements</li>
                          <li>• Green space provisions</li>
                        </ul>
                      </div>
                      <Badge variant="secondary">Updated: January 2024</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="compliance" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      Compliance Requirements
                    </CardTitle>
                    <CardDescription>
                      Essential compliance requirements for all property stakeholders
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">For Property Owners:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                            Obtain Certificate of Occupancy (C of O)
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                            Register property with Lagos State Government
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                            Pay annual property tax
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                            Maintain building safety standards
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                            Comply with zoning regulations
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">For Real Estate Firms:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                            Register with Lagos State Real Estate Regulatory Authority
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                            Maintain professional indemnity insurance
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                            Verify property documents before listing
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                            Maintain client transaction records
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                            Submit quarterly activity reports
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="h-5 w-5 text-red-600" />
                      Penalties and Enforcement
                    </CardTitle>
                    <CardDescription>
                      Consequences for non-compliance with property regulations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Minor Violations</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Warning notices</li>
                          <li>• Fines: ₦50,000 - ₦200,000</li>
                          <li>• Compliance orders</li>
                          <li>• Temporary suspensions</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Major Violations</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Fines: ₦500,000 - ₦2,000,000</li>
                          <li>• License revocation</li>
                          <li>• Property seizure</li>
                          <li>• Criminal prosecution</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Repeat Offenses</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Permanent license ban</li>
                          <li>• Asset forfeiture</li>
                          <li>• Imprisonment (up to 5 years)</li>
                          <li>• Public blacklisting</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Reference Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential information for property stakeholders in Lagos State.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Checklist
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Scale className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Fee Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Schedule
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Application Forms</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Forms
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <CardTitle>Compliance Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Legal Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                The information provided on this page is for general guidance only and should not be 
                considered as legal advice. Property laws and regulations are subject to change, and 
                specific circumstances may require different approaches. Always consult with qualified 
                legal professionals for advice on specific property matters. Lagos State Government 
                reserves the right to update these regulations without prior notice. For the most 
                current information, please contact the relevant government departments directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Regulations

