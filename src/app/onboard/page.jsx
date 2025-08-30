"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
    Hospital,
    User,
    Phone,
    Building,
    Users,
    FileText,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    Clock,
    Shield,
    Search,
} from "lucide-react"
import Link from "next/link"

const steps = [
    {
        id: 1,
        title: "Welcome to MedRef",
        description: "Let's get you set up to start making referrals",
    },
    {
        id: 2,
        title: "Your Profile",
        description: "Tell us about yourself and your role",
    },
    {
        id: 3,
        title: "Facility Information",
        description: "Add details about your healthcare facility",
    },
    {
        id: 4,
        title: "System Overview",
        description: "Learn how MedRef works",
    },
    {
        id: 5,
        title: "You're All Set!",
        description: "Ready to start making referrals",
    },
]

export default function OnboardPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        facilityName: "",
        facilityType: "",
        location: "",
        departments: "",
        capacity: "",
    })

    const progress = (currentStep / steps.length) * 100

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto">
                            <Hospital className="w-10 h-10 text-medical-blue" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-balance">Welcome to MedRef</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                                You're about to join a network of healthcare professionals streamlining patient referrals across Kenya.
                                Let's get you set up in just a few minutes.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-trust-green/10 rounded-lg flex items-center justify-center mx-auto">
                                    <Search className="w-6 h-6 text-trust-green" />
                                </div>
                                <h3 className="font-semibold">Smart Matching</h3>
                                <p className="text-sm text-muted-foreground">
                                    Find the right hospital instantly based on capacity and specialization
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-warning-amber/10 rounded-lg flex items-center justify-center mx-auto">
                                    <Clock className="w-6 h-6 text-warning-amber" />
                                </div>
                                <h3 className="font-semibold">Real-Time Updates</h3>
                                <p className="text-sm text-muted-foreground">
                                    Get live capacity updates and instant referral responses
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mx-auto">
                                    <Shield className="w-6 h-6 text-medical-blue" />
                                </div>
                                <h3 className="font-semibold">Secure & Compliant</h3>
                                <p className="text-sm text-muted-foreground">HIPAA-compliant platform ensuring patient data privacy</p>
                            </div>
                        </div>
                    </div>
                )

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto">
                                <User className="w-8 h-8 text-medical-blue" />
                            </div>
                            <h2 className="text-2xl font-bold">Your Profile</h2>
                            <p className="text-muted-foreground">Help us personalize your MedRef experience</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                    placeholder="Enter your last name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    placeholder="your.email@hospital.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    placeholder="+254 700 123 456"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="role">Your Role</Label>
                                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="doctor">Doctor</SelectItem>
                                        <SelectItem value="nurse">Nurse</SelectItem>
                                        <SelectItem value="administrator">Administrator</SelectItem>
                                        <SelectItem value="coordinator">Referral Coordinator</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                )

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <div className="w-16 h-16 bg-trust-green/10 rounded-full flex items-center justify-center mx-auto">
                                <Building className="w-8 h-8 text-trust-green" />
                            </div>
                            <h2 className="text-2xl font-bold">Facility Information</h2>
                            <p className="text-muted-foreground">Tell us about your healthcare facility</p>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="facilityName">Facility Name</Label>
                                <Input
                                    id="facilityName"
                                    value={formData.facilityName}
                                    onChange={(e) => handleInputChange("facilityName", e.target.value)}
                                    placeholder="e.g., Nairobi Hospital"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="facilityType">Facility Type</Label>
                                    <Select
                                        value={formData.facilityType}
                                        onValueChange={(value) => handleInputChange("facilityType", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select facility type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="public-hospital">Public Hospital</SelectItem>
                                            <SelectItem value="private-hospital">Private Hospital</SelectItem>
                                            <SelectItem value="clinic">Clinic</SelectItem>
                                            <SelectItem value="health-center">Health Center</SelectItem>
                                            <SelectItem value="dispensary">Dispensary</SelectItem>
                                            <SelectItem value="specialized">Specialized Center</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        value={formData.location}
                                        onChange={(e) => handleInputChange("location", e.target.value)}
                                        placeholder="e.g., Nairobi, Kenya"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="departments">Available Departments</Label>
                                <Textarea
                                    id="departments"
                                    value={formData.departments}
                                    onChange={(e) => handleInputChange("departments", e.target.value)}
                                    placeholder="e.g., Emergency, Cardiology, Pediatrics, Surgery..."
                                    rows={3}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="capacity">Bed Capacity (Optional)</Label>
                                <Input
                                    id="capacity"
                                    type="number"
                                    value={formData.capacity}
                                    onChange={(e) => handleInputChange("capacity", e.target.value)}
                                    placeholder="e.g., 150"
                                />
                            </div>
                        </div>
                    </div>
                )

            case 4:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <div className="w-16 h-16 bg-warning-amber/10 rounded-full flex items-center justify-center mx-auto">
                                <FileText className="w-8 h-8 text-warning-amber" />
                            </div>
                            <h2 className="text-2xl font-bold">How MedRef Works</h2>
                            <p className="text-muted-foreground">Quick overview of the referral process</p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-sm font-semibold text-medical-blue-foreground">1</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Create a Referral</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Fill out patient details, medical condition, and urgency level. Upload relevant documents and test
                                        results.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-trust-green rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-sm font-semibold text-trust-green-foreground">2</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Smart Hospital Matching</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Our AI finds the best hospitals based on capacity, distance, specialization, and patient needs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-warning-amber rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-sm font-semibold text-warning-amber-foreground">3</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Real-Time Response</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Receiving hospitals get instant notifications and can accept or decline with reasons.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-sm font-semibold text-medical-blue-foreground">4</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Patient Communication</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Automated WhatsApp messages keep patients informed about their referral status and next steps.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-5 h-5 text-trust-green" />
                                <span className="font-semibold">Pro Tip</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Use the priority levels (Low, Medium, High, Critical) to ensure urgent cases get immediate attention.
                                Critical cases are automatically escalated to multiple hospitals.
                            </p>
                        </div>
                    </div>
                )

            case 5:
                return (
                    <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-trust-green/10 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="w-10 h-10 text-trust-green" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-balance">You're All Set!</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                                Welcome to the MedRef network, {formData.firstName}! You can now start making referrals and help improve
                                patient outcomes across our healthcare system.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mt-8">
                            <Card className="border-2 hover:border-medical-blue/20 transition-colors">
                                <CardHeader className="text-center">
                                    <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <FileText className="w-6 h-6 text-medical-blue" />
                                    </div>
                                    <CardTitle className="text-lg">Make Your First Referral</CardTitle>
                                    <CardDescription>
                                        Start by creating a referral for a patient who needs specialized care
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="border-2 hover:border-trust-green/20 transition-colors">
                                <CardHeader className="text-center">
                                    <div className="w-12 h-12 bg-trust-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <Users className="w-6 h-6 text-trust-green" />
                                    </div>
                                    <CardTitle className="text-lg">Explore the Network</CardTitle>
                                    <CardDescription>
                                        Browse connected hospitals and their available departments and capacity
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className="bg-medical-blue/5 border border-medical-blue/20 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Phone className="w-5 h-5 text-medical-blue" />
                                <span className="font-semibold">Need Help?</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Our support team is available 24/7 at +254-700-123-456 or support@medref.co.ke
                            </p>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <div className="max-h-screen bg-background overflow-y-scroll">
            {/* Header */}
            <header className="sticky top-0 border-b bg-card/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                                <Hospital className="w-5 h-5 text-medical-blue-foreground" />
                            </div>
                            <span className="text-xl font-semibold text-foreground">MedRef</span>
                        </div>
                        <Badge variant="secondary">
                            Step {currentStep} of {steps.length}
                        </Badge>
                    </div>
                </div>
            </header>

            {/* Progress Bar */}
            <div className="border-b bg-muted/30">
                <div className="container mx-auto px-4 py-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Setup Progress</span>
                            <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <Card className="border-2">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
                            <CardDescription className="text-lg">{steps[currentStep - 1].description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {renderStepContent()}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between pt-6 border-t">
                                <Button
                                    variant="outline"
                                    onClick={handlePrevious}
                                    disabled={currentStep === 1}
                                    className="flex items-center gap-2 bg-transparent"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Previous
                                </Button>

                                {currentStep === steps.length ? (
                                    <Button asChild className="flex items-center gap-2">
                                        <Link href="/dashboard">
                                            Go to Dashboard
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                ) : (
                                    <Button onClick={handleNext} className="flex items-center gap-2">
                                        Next
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
