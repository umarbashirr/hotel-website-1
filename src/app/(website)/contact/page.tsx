import React from "react";
import PageHero from "../_components/page-hero";
import ContactForm from "../_components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { MapIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

const ContactPage = () => {
  return (
    <div>
      <PageHero title="Contact Us" />
      <div className="container mx-auto px-6 w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-10 md:gap-20 my-10 md:my-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary rounded-xl shadow-sm p-6 h-full">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Get in Touch
              </h2>
              <p className="text-primary-foreground text-sm mb-4">
                We'd love to hear from you! Send us a message using the form
                below and we'll get back to you as soon as possible.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Contact Information
                </h3>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="font-light text-sm text-white flex items-center justify-start gap-2">
                    <MapPinIcon size={16} /> Jammu and Kashmir, Pahalgam, India
                  </p>
                  <p className="font-light text-sm text-white flex items-center justify-start gap-2">
                    <PhoneIcon size={16} /> +91 123 456 7890
                  </p>
                  <p className="font-light text-sm text-white flex items-center justify-start gap-2">
                    <EnvelopeClosedIcon className="w-4 h-4" />
                    <a href="mailto:mail@hoteldomain.com">
                      mail@hoteldomain.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div>
        {/* <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <p className="text-muted-foreground mb-4">
          Jammu and Kashmir, Pahalgam, India
        </p> */}
        <iframe
          className="w-full h-[400px] md:h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115719.94727768245!2d75.17162567875696!3d34.02042040265651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e19e07f5c190c9%3A0xf179ab11041cb163!2sPahalgam%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1631867245797!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
