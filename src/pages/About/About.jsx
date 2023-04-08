import React from 'react';
import TeamMember from './TeamMember';
import Partners from './Partners';
import Awards from './Awards';

const About = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        At our grocery store, we're passionate about providing our customers with the freshest and highest quality food products. We believe that healthy and delicious food should be accessible to everyone, which is why we strive to keep our prices affordable without compromising on quality.
                    </p>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
                        <TeamMember name="John Doe" position="Founder" description="John has been in the grocery business for over 20 years and is passionate about providing high-quality food products to his customers." />
                        <TeamMember name="Jane Smith" position="Marketing Manager" description="Jane is in charge of our marketing efforts and works hard to spread the word about our amazing products and services." />
                    </div>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Awards and Achievements</h3>
                        <Awards/>
                    </div>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Partners</h3>
                        <Partners />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;