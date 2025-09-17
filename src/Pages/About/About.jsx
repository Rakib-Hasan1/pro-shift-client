import React, { useState } from "react";

const About = () => {
    const [activeTab, setActiveTab] = useState("story");

    const renderContent = () => {
        switch (activeTab) {
            case "story":
                return (
                    <p className="text-slate-600 leading-relaxed text-justify">
                        ProFast was born out of a simple yet powerful idea: to remove the
                        frustrations that people face every day when sending or receiving
                        parcels. In a world where speed, reliability, and trust matter more
                        than ever, we noticed that the existing delivery systems often fell
                        short of customer expectations. Many people faced delayed shipments,
                        lack of real-time tracking, poor customer service, or high costs
                        that made parcel delivery stressful instead of convenient. From this
                        realization, our journey began. ProFast was not created overnight; it
                        was the result of countless hours of brainstorming, market research,
                        and understanding the unique needs of both individuals and businesses.
                        We knew that in order to stand out, we had to design a service that
                        combined technology, transparency, and customer-first thinking. The
                        early days were challenging. With limited resources, a small team,
                        and endless ambition, we built our first delivery system prototype.
                        We spent time talking to local businesses, e-commerce owners, and
                        individuals who shipped packages regularly, listening to their pain
                        points, and taking notes of every frustration they had with traditional
                        services. The story of ProFast is one of growth, perseverance, and
                        commitment. What started as a small-scale delivery service soon gained
                        the trust of customers because we did what others couldn’t—we delivered
                        on our promises. We focused on accuracy, timely updates, and seamless
                        technology integration that allowed customers to track their parcels in
                        real time. Today, ProFast’s story continues to evolve. We are more than
                        just a delivery company; we are partners in making life easier, faster,
                        and stress-free for everyone who trusts us with their parcels. Our story
                        is still being written every single day, and each successful delivery is
                        a new chapter that motivates us to keep moving forward with passion and
                        innovation.
                    </p>
                );
            case "mission":
                return (
                    <p className="text-slate-600 leading-relaxed text-justify">
                        At ProFast, our mission is clear and deeply rooted in our values: to
                        revolutionize the parcel delivery system by making it faster, more
                        reliable, and more customer-centric than ever before. We believe that
                        delivery should not just be about moving items from point A to point B;
                        it should be about creating a stress-free experience where customers
                        feel informed, secure, and valued. Our mission goes beyond technology—it
                        is about building trust. We want every sender and every receiver to feel
                        confident that their parcel is in safe hands from the moment it is picked
                        up to the moment it arrives at its destination. With the help of modern
                        technology, such as real-time GPS tracking, automated notifications, and
                        AI-powered logistics, we strive to eliminate uncertainty and guesswork.
                        Businesses should be able to scale without worrying about logistics, and
                        individuals should be able to send gifts, essentials, or urgent items
                        without the fear of delays. Our mission also focuses on sustainability
                        and responsibility. We understand the impact of logistics on the
                        environment, which is why we are continuously exploring eco-friendly
                        practices such as optimizing delivery routes to reduce fuel consumption
                        and integrating greener options into our fleet. Moreover, our mission is
                        tied to empowering people. By creating employment opportunities for
                        delivery professionals, partnering with local businesses, and supporting
                        e-commerce growth, we want to contribute positively to the economy and
                        society. Every action we take is guided by one ultimate goal: to set new
                        standards in parcel delivery where speed, safety, and service excellence
                        go hand in hand. With ProFast, delivery is not just a transaction—it is
                        a relationship built on trust, innovation, and commitment.
                    </p>
                );
            case "success":
                return (
                    <p className="text-slate-600 leading-relaxed text-justify">
                        The success of ProFast is a story of vision turning into reality. From
                        day one, we measured our success not just by the number of parcels
                        delivered but by the smiles, relief, and satisfaction of our customers.
                        What began as a small operation quickly scaled because of our unwavering
                        commitment to service excellence. Within the first year, we earned the
                        loyalty of hundreds of customers who appreciated our on-time delivery,
                        user-friendly platform, and transparent updates. As demand grew, so did
                        our capabilities. We invested in advanced tracking systems, built
                        partnerships with local businesses, and expanded our network of delivery
                        agents who shared our passion for customer service. Today, ProFast
                        proudly completes thousands of successful deliveries, each one a
                        reflection of our dedication to accuracy and trust. Our success also lies
                        in the trust we’ve built with e-commerce platforms and enterprises that
                        now rely on us as their logistics partner. We helped businesses reduce
                        cart abandonment rates, improve customer satisfaction scores, and
                        streamline operations—all by ensuring that delivery is never a bottleneck.
                        On the customer side, our mobile-friendly platform has made it easier
                        than ever to send and track parcels. Every successful feedback message,
                        every repeat customer, and every recommendation has contributed to our
                        growth. Success for ProFast is not just financial—it is cultural. We
                        define success by the positive impact we create in people’s lives, by
                        empowering businesses, and by building a brand that people can depend
                        on without second thoughts. Our success is proof that with the right mix
                        of technology, passion, and perseverance, even a small idea can transform
                        into a movement that redefines an entire industry.
                    </p>
                );
            case "team":
                return (
                    <p className="text-slate-600 leading-relaxed text-justify">
                        Behind ProFast’s journey stands a team of passionate innovators,
                        strategists, and professionals who believe in one vision: to make parcel
                        delivery smarter, faster, and more human. Our team is our greatest
                        strength. Every member, from software developers who build seamless
                        tracking systems to the delivery heroes who ensure parcels reach
                        customers on time, plays a critical role in shaping our success. What
                        sets our team apart is the culture of collaboration and innovation we
                        foster. We encourage open communication, creative problem-solving, and
                        continuous learning. Each day brings new challenges—whether it’s scaling
                        our infrastructure to handle more deliveries or improving customer
                        satisfaction scores—and our team meets them with determination and
                        creativity. At ProFast, we don’t just work together; we grow together.
                        We invest in training, skill development, and leadership opportunities
                        so that every team member feels empowered to reach their full potential.
                        Our delivery professionals, in particular, are the heartbeat of our
                        system. They navigate busy streets, manage logistics, and ensure that
                        promises are fulfilled. We honor their hard work by providing fair
                        compensation, support, and recognition. Beyond operations, our team also
                        shares a common purpose: to innovate for the future. Whether it’s
                        exploring AI-driven route optimization, drone delivery, or sustainable
                        packaging, we are united in our goal of staying ahead of the curve.
                        Together, our team represents the spirit of ProFast—a group of
                        determined individuals who work hand in hand to transform the delivery
                        experience and make life easier for customers everywhere.
                    </p>
                );
            default:
                return null;
        }
    };

    return (
        <section className="bg-white my-10 rounded-xl p-5 md:p-8 lg:p-12 xl:p-16">
            <div>
                <h2 className="font-extrabold text-5xl text-slate-800 py-6">About Us</h2>
                <p className="text-slate-700 text-sm">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero
                    hassle. From personal <br />
                    packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            <div className="divider py-4 md:py-6 lg:py-8"></div>

            {/* Navigation */}
            <div className="flex flex-wrap gap-4 mb-6">
                {["story", "mission", "success", "team"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pr-3 md:pr-5 lg:pr-7 py-2 font-semibold text-2xl capitalize cursor-pointer transition-all
              ${activeTab === tab
                                ? "text-green-900"
                                : "text-gray-500"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">{renderContent()}</div>
        </section>
    );
};

export default About;
