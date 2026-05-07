import React from "react";
import { ArrowLeft, CheckCircle, Briefcase, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const SalesMarketing = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header */}
      <div className="pt-20 pb-10 px-6 md:px-20">
        <Link
          to="/"
          className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 w-fit"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sales & Marketing <span className="text-yellow-500">Jobs</span>
          </h1>
          <p className="text-xl text-gray-300">
            Drive business growth with dynamic sales and marketing opportunities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-12 space-y-12">
        
        {/* Overview Section */}
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-yellow-500/20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="text-yellow-500" size={32} />
            Role Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Sales and Marketing professionals are the driving force behind business growth and brand success. We connect talented sales executives, marketing strategists, and business development professionals with companies looking to expand their market presence. From B2B sales to digital marketing, brand management to customer acquisition, we find the right fit for your career goals.
          </p>
        </section>

        {/* Key Positions */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="text-yellow-500" size={32} />
            Key Positions We Recruit For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Sales Executives & Account Managers",
              "Business Development Managers",
              "Digital Marketing Specialists",
              "Content Marketing Managers",
              "SEO/SEM Specialists",
              "Social Media Marketing Professionals",
              "Brand Managers",
              "Product Marketing Managers",
              "Sales Team Leads & Managers",
              "Marketing Coordinators & Executives",
            ].map((position, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 rounded-lg p-6 flex items-start gap-4 hover:bg-gray-800 transition border border-gray-700/50"
              >
                <CheckCircle className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200 font-medium">{position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Required Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Users className="text-yellow-500" size={32} />
            Key Skills & Qualifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Professional Skills</h3>
              <ul className="space-y-3">
                {[
                  "Sales techniques & negotiation skills",
                  "Digital marketing expertise (Google Analytics, SEO, SEM, etc.)",
                  "CRM software proficiency (Salesforce, HubSpot, etc.)",
                  "Marketing automation tools knowledge",
                  "Market research & competitor analysis",
                  "Email marketing & campaign management",
                ].map((skill, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-yellow-500">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Soft Skills</h3>
              <ul className="space-y-3">
                {[
                  "Excellent communication & presentation skills",
                  "Strong interpersonal & networking abilities",
                  "Goal-oriented & driven mindset",
                  "Creative thinking & problem-solving",
                  "Leadership & team management",
                  "Customer relationship management",
                ].map((skill, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-yellow-500">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-yellow-500/10 rounded-lg p-8 border border-yellow-500/30">
          <h2 className="text-3xl font-bold mb-8">Benefits & Growth Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Performance-based incentives & commissions",
              "Career advancement to management roles",
              "Sales training & certification programs",
              "Flexible working arrangements",
              "Competitive base salary & bonuses",
              "Travel opportunities",
              "Networking & industry events",
              "Marketing tools & resources access",
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-yellow-500 font-bold">•</span>
                <p className="text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg p-8 border border-yellow-500/50 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Boost Your Sales & Marketing Career?</h2>
          <p className="text-gray-300 mb-6">
            Explore current opportunities or connect with our team for exclusive sales & marketing roles.
          </p>
          <Link
            to="/job"
            className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30"
          >
            View All Job Openings
          </Link>
        </section>
      </div>

      {/* Footer Space */}
      <div className="h-20" />
    </div>
  );
};

export default SalesMarketing;
