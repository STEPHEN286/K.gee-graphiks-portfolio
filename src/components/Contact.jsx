import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faClock, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faLinkedinIn, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { contactInfo, socialLinks } from '../data/links';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
              </p>
              <div>
                <img src="https://img.freepik.com/free-photo/professional-designer_1098-15876.jpg?t=st=1744341559~exp=1744345159~hmac=c1bb0014de225f441a8cfc7f99c0a529e6ba2be60c80b488251b46e2f1ee5f84&w=1380" alt="img" className='w-full h-full object-cover rounded-lg' />
              </div>
            </div>
            <div className="bg-indigo-600 p-8 md:p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a href={contactInfo.email.link} className="text-indigo-200 hover:text-white transition-colors">
                        {contactInfo.email.address}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <FontAwesomeIcon icon={faPhone} className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a href={contactInfo.phone.link} className="text-indigo-200 hover:text-white transition-colors">
                        {contactInfo.phone.number}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-indigo-200">{contactInfo.location.text}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <FontAwesomeIcon icon={faClock} className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Availability</h4>
                      <p className="text-indigo-200">{contactInfo.availability.text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white/20 hover:bg-white/30 h-10 w-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                      title={social.title}
                    >
                      <FontAwesomeIcon 
                        icon={social.icon === 'globe' ? faGlobe : 
                              social.icon === 'whatsapp' ? faWhatsapp :
                              social.icon === 'behance' ? faBehance :
                              social.icon === 'tiktok' ? faTiktok :
                              faLinkedinIn} 
                        className="text-white text-lg" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 