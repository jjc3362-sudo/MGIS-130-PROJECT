// Timeline data - Edit this array to add your own content
const timelineData = [
    {
        date: "2020",
        title: "Project Launch",
        description: "Initial concept and planning phase. Team assembled and objectives defined.",
        detailContent: `
            <h2>Project Launch - 2020</h2>
            
            <h3>Overview</h3>
            <p>The journey began in early 2020 when our team came together with a shared vision of creating something truly innovative. This phase was crucial in establishing the foundation for everything that would follow.</p>
            
            <h3>Key Milestones</h3>
            <ul>
                <li>Assembled a cross-functional team of 15 talented individuals</li>
                <li>Conducted extensive market research and competitive analysis</li>
                <li>Defined core product objectives and success metrics</li>
                <li>Secured initial funding and established partnerships</li>
            </ul>
            
            <h3>Challenges and Learnings</h3>
            <p>During this period, we held numerous brainstorming sessions and workshops to refine our concept. The team worked tirelessly to create a comprehensive roadmap that would guide us through the development process. We also established our company culture and values, which continue to shape our decisions today.</p>
            
            <p>The planning phase involved detailed technical specifications, user research, and prototype development. We interviewed over 100 potential users to understand their needs and pain points, which directly influenced our product design.</p>
            
            <h3>Looking Forward</h3>
            <p>By the end of 2020, we had a clear vision, a committed team, and the resources needed to move forward. The foundation we built during this phase proved invaluable as we transitioned into active development.</p>
        `
    },
    {
        date: "2021",
        title: "Development Begins",
        description: "Started building the core features and establishing the technical foundation.",
        detailContent: `
            <h2>Development Begins - 2021</h2>
            
            <h3>Technical Foundation</h3>
            <p>With a solid plan in place, 2021 marked the beginning of active development. Our engineering team dove deep into building the core infrastructure and essential features.</p>
            
            <h3>Technical Achievements</h3>
            <ul>
                <li>Established scalable cloud infrastructure using AWS and Kubernetes</li>
                <li>Implemented core API and database architecture with microservices</li>
                <li>Developed the first version of the user interface using React</li>
                <li>Set up comprehensive testing and CI/CD pipelines</li>
                <li>Implemented security protocols and data encryption</li>
            </ul>
            
            <h3>Development Process</h3>
            <p>The development process was iterative and agile. We held daily stand-ups, sprint planning sessions, and retrospectives to ensure continuous improvement. Our team adopted best practices in code review, documentation, and quality assurance.</p>
            
            <p>This year also saw significant growth in our team. We hired additional engineers, designers, and product managers who brought fresh perspectives and expertise. The collaborative environment fostered innovation and rapid progress.</p>
            
            <h3>Overcoming Obstacles</h3>
            <p>Challenges included navigating technical complexities, making architectural decisions, and balancing speed with quality. However, these challenges helped us build a more robust and maintainable codebase. We learned the importance of technical debt management and investing in proper tooling early on.</p>
        `
    },
    {
        date: "2022",
        title: "Beta Release",
        description: "Released beta version to select users for testing and feedback collection.",
        detailContent: `
            <h2>Beta Release - 2022</h2>
            
            <h3>Going to Market</h3>
            <p>The beta release in 2022 was a pivotal moment for our project. After months of development, we were finally ready to put our product in the hands of real users.</p>
            
            <h3>Beta Program Highlights</h3>
            <ul>
                <li>Onboarded 500 beta testers from diverse backgrounds and industries</li>
                <li>Collected over 2,000 pieces of feedback through surveys and interviews</li>
                <li>Fixed 300+ bugs and improved 50+ features based on user input</li>
                <li>Achieved 85% user satisfaction rating</li>
                <li>Established a beta community forum with active participation</li>
            </ul>
            
            <h3>Key Learnings</h3>
            <p>The beta phase taught us invaluable lessons about user behavior, product usability, and market fit. We learned that some features we thought were essential were rarely used, while others we considered minor became user favorites.</p>
            
            <p>We implemented a robust feedback system that allowed beta testers to easily report issues and suggest improvements. Our support team worked around the clock to respond to queries and ensure a positive experience.</p>
            
            <h3>Product Refinement</h3>
            <p>Based on beta feedback, we made significant changes to the user interface, simplified complex workflows, and added several highly requested features. This iterative approach proved crucial in refining our product. We also improved our onboarding process, reducing the time to first value by 60%.</p>
            
            <p>The beta program also helped us identify our most passionate users, many of whom became advocates and helped spread the word about our product.</p>
        `
    },
    {
        date: "2023",
        title: "Official Launch",
        description: "Public release with full features and comprehensive documentation.",
        detailContent: `
            <h2>Official Launch - 2023</h2>
            
            <h3>The Big Day</h3>
            <p>The official launch in 2023 was the culmination of years of hard work, dedication, and perseverance. We released our product to the public with confidence, backed by extensive testing and refinement.</p>
            
            <h3>Launch Statistics</h3>
            <ul>
                <li>10,000 users in the first month</li>
                <li>Featured in major tech publications including TechCrunch and The Verge</li>
                <li>4.7/5 average user rating across all platforms</li>
                <li>99.9% uptime achievement</li>
                <li>$1M in revenue within the first quarter</li>
            </ul>
            
            <h3>Marketing and Outreach</h3>
            <p>The launch campaign included strategic marketing efforts, press releases, social media engagement, and partnership announcements. We organized webinars and demonstrations to showcase the product's capabilities.</p>
            
            <p>Our documentation team created comprehensive guides, tutorials, and API references to help users get started quickly. We also launched a community forum where users could connect, share experiences, and help each other.</p>
            
            <h3>Post-Launch Operations</h3>
            <p>Post-launch support was intensive but rewarding. We monitored system performance closely, responded to user inquiries promptly, and released regular updates to address any issues and add improvements.</p>
            
            <p>The positive reception from users and industry experts validated our approach and motivated us to continue innovating and improving. We established a regular release cadence with bi-weekly updates and monthly feature releases.</p>
            
            <h3>Building Momentum</h3>
            <p>The launch created significant momentum for our company. We secured additional funding, expanded our team, and began planning for international expansion. The success of the launch proved that our vision resonated with users and that we had built something truly valuable.</p>
        `
    },
    {
        date: "2024",
        title: "Major Update",
        description: "Introduced new features based on user feedback and market demands.",
        detailContent: `
            <h2>Major Update - 2024</h2>
            
            <h3>Evolution and Growth</h3>
            <p>Building on the success of our launch, 2024 brought a major update that significantly expanded our product's capabilities and addressed user feedback from the past year.</p>
            
            <h3>New Features</h3>
            <ul>
                <li>Advanced analytics and reporting dashboard with customizable metrics</li>
                <li>Integration with 20+ third-party services including Salesforce, Slack, and Google Workspace</li>
                <li>Mobile applications for iOS and Android with full feature parity</li>
                <li>Enhanced security and privacy controls including SSO and 2FA</li>
                <li>AI-powered automation tools using machine learning</li>
                <li>Collaborative features for team workflows</li>
                <li>Custom API for enterprise integrations</li>
            </ul>
            
            <h3>Development Process</h3>
            <p>This update represented over 6 months of development work and involved contributions from our entire team. We conducted A/B testing, user interviews, and usability studies to ensure each new feature added real value.</p>
            
            <p>The mobile apps were particularly well-received, giving users the flexibility to access our platform from anywhere. We designed native experiences for both iOS and Android, respecting platform conventions while maintaining brand consistency.</p>
            
            <h3>Performance Improvements</h3>
            <p>Performance improvements were also a major focus, with load times reduced by 40% and database queries optimized for efficiency. We implemented caching strategies and content delivery networks to ensure fast, reliable service globally.</p>
            
            <p>We also redesigned our infrastructure to handle 10x more concurrent users, preparing for future growth. This included implementing advanced monitoring and alerting systems to catch issues before they affected users.</p>
            
            <h3>User Adoption</h3>
            <p>User adoption of new features exceeded our expectations, with 70% of active users engaging with at least one new feature within the first month of release. The AI automation tools became particularly popular, saving users an average of 5 hours per week.</p>
        `
    },
    {
        date: "2025",
        title: "Global Expansion",
        description: "Expanded to international markets with multi-language support.",
        detailContent: `
            <h2>Global Expansion - 2025</h2>
            
            <h3>Going Global</h3>
            <p>2025 marks our expansion into international markets, making our product accessible to users around the world with localized experiences and multilingual support.</p>
            
            <h3>Expansion Achievements</h3>
            <ul>
                <li>Launched in 15 countries across 4 continents</li>
                <li>Added support for 12 languages including Spanish, French, German, Japanese, and Mandarin</li>
                <li>Established regional data centers in Europe, Asia, and South America for better performance</li>
                <li>Partnered with local businesses and organizations in each region</li>
                <li>Adapted features for regional requirements and regulations</li>
                <li>Hired local support teams to provide 24/7 multilingual assistance</li>
                <li>Customized pricing and payment options for different markets</li>
            </ul>
            
            <h3>Localization Efforts</h3>
            <p>Internationalization required careful planning and execution. We worked with native speakers and cultural consultants to ensure accurate translations and cultural appropriateness. Our team also researched local market dynamics, user preferences, and competitive landscapes in each region.</p>
            
            <p>Beyond translation, we adapted our product to respect local customs, date and time formats, currency conventions, and business practices. This attention to detail helped us build trust and credibility in new markets.</p>
            
            <h3>Regulatory Compliance</h3>
            <p>Technical challenges included handling different date formats, currencies, time zones, and regulatory requirements like GDPR in Europe, LGPD in Brazil, and other privacy laws. We built flexible systems that could adapt to regional needs while maintaining a consistent core experience.</p>
            
            <p>We worked with legal experts in each region to ensure full compliance with local laws and regulations. This included data residency requirements, privacy protections, and accessibility standards.</p>
            
            <h3>Global Community</h3>
            <p>The global expansion opened up exciting new opportunities and partnerships. We've seen innovative use cases emerge from different regions, enriching our product roadmap with diverse perspectives. Our user community has become truly international, with vibrant discussions and knowledge sharing across borders.</p>
            
            <h3>Future Vision</h3>
            <p>Looking ahead, we're committed to continuing our growth while maintaining the quality and user focus that has defined our journey from the very beginning. We're exploring emerging markets, investing in AI and automation, and constantly innovating to stay ahead of user needs.</p>
            
            <p>Our vision is to become the global standard in our industry, empowering millions of users worldwide to achieve their goals more efficiently and effectively.</p>
        `
    }
];

// Generate timeline items
function generateTimeline() {
    const container = document.getElementById('timelineItems');
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot" data-index="${index}"></div>
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        container.appendChild(timelineItem);
    });
}

// Show detail section
function showDetail(index) {
    const detailSection = document.getElementById('detailSection');
    const detailContent = document.getElementById('detailContent');
    const item = timelineData[index];
    
    // Update content
    detailContent.innerHTML = item.detailContent;
    
    // Show section with animation
    detailSection.classList.add('active');
    
    // Update active dot
    document.querySelectorAll('.timeline-dot').forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Smooth scroll to detail section
    setTimeout(() => {
        detailSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Close detail section
function closeDetail() {
    const detailSection = document.getElementById('detailSection');
    detailSection.classList.remove('active');
    
    // Remove active state from all dots
    document.querySelectorAll('.timeline-dot').forEach(dot => {
        dot.classList.remove('active');
    });
}

// Initialize timeline when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateTimeline();
    
    // Add click event listeners to timeline dots
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('timeline-dot')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            showDetail(index);
        }
    });
    
    // Close button event listener
    document.getElementById('closeBtn').addEventListener('click', closeDetail);
});