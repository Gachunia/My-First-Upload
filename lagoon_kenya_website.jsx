import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-6 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-900">Lagoon Kenya Ltd</h1>
        <p className="text-lg text-gray-600">Experts in Interior Works, Fabrications, Technical Installations & Institutional Supply Solutions</p>
      </section>

      {/* Navigation */}
      <nav className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "Executive Summary",
          "About Us",
          "Mission & Vision",
          "Services",
          "Industries Served",
          "Our Advantage",
          "Our Approach",
          "Partnerships",
          "Contact"
        ].map((item, idx) => (
          <Button key={idx} variant="outline">{item}</Button>
        ))}
      </nav>

      {/* Executive Summary */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
          <p className="text-gray-700">Lagoon Kenya Ltd is a dynamic solutions provider offering integrated structural works, interior design, and institutional supply services across East Africa. With end-to-end services ranging from furniture installations and interior fit-outs to landscaping, technical supplies, and groundworks, we serve clients in the public, private, and development sectors.</p>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">About Lagoon Kenya Ltd</h2>
          <p className="text-gray-700">We deliver turnkey solutions for institutions requiring high-functioning, aesthetically pleasing, and durable infrastructures. Our teams consist of interior designers, engineers, and technicians who ensure integrated results from concept to support.</p>
        </CardContent>
      </Card>

      {/* Mission & Vision */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
          <p className="text-gray-700"><strong>Mission:</strong> To deliver safe, efficient, and visually inspiring environments through tailored solutions.
          <br /><strong>Vision:</strong> To become a regional leader in facility improvement and innovation.</p>
        </CardContent>
      </Card>

      {/* Services Preview */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          {[
            "Furniture & Interior Fit-Out Works",
            "Stainless Steel Fabrications",
            "Air Conditioning & Refrigeration (HVAC)",
            "Playground Construction & Outdoor Installations",
            "Landscaping & Grounds Work",
            "Technical & Institutional Supplies",
            "Project Management, Installation & Support"
          ].map((service, index) => (
            <p key={index} className="text-gray-700">• {service}</p>
          ))}
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email: info@lagoongroup.co.ke, lagoonkenya@yahoo.com</p>
          <p>CEO: md@lagoongroup.co.ke | CTO: cto@lagoongroup.co.ke</p>
          <p>Phone: +254 715 485 554, +254 740 599 987</p>
          <p>Offices: Mombasa Trade Centre, Nkrumah Rd | Landmark Plaza, Nairobi</p>
          <p>Website: www.lagoongroup.co.ke</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="text-center pt-8 text-gray-600">
        <p>✅ Lagoon Kenya Ltd — Spaces That Work. Structures That Last. Solutions That Matter.</p>
      </footer>
    </main>
  );
}
