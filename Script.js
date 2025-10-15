 <script>
        // Timeline data
        const timelineData = [
            {
                date: "2020",
                title: "Project Launch",
                description: "Initial concept and planning phase. Team assembled and objectives defined.",
                detailContent: `
                    <h2>Project Launch - 2020</h2>
                    <p>The journey began in early 2020 when our team came together with a shared vision of creating something truly innovative. This phase was crucial in establishing the foundation for everything that would follow.</p>
                    
                    <p><strong>Key Milestones:</strong></p>
                    <p>• Assembled a cross-functional team of 15 talented individuals<br>
                    • Conducted extensive market research and competitive analysis<br>
                    • Defined core product objectives and success metrics<br>
                    • Secured initial funding and established partnerships</p>
                    
                    <p>During this period, we held numerous brainstorming sessions and workshops to refine our concept. The team worked tirelessly to create a comprehensive roadmap that would guide us through the development process. We also established our company culture and values, which continue to shape our decisions today.</p>
                    
                    <p>The planning phase involved detailed technical specifications, user research, and prototype development. We interviewed over 100 potential users to understand their needs and pain points, which directly influenced our product design.</p>
                `
            },
            {
                date: "2021",
                title: "Development Begins",
                description: "Started building the core features and establishing the technical foundation.",
                detailContent: `
                    <h2>Development Begins - 2021</h2>
                    <p>With a solid plan in place, 2021 marked the beginning of active development. Our engineering team dove deep into building the core infrastructure and essential features.</p>
                    
                    <p><strong>Technical Achievements:</strong></p>
                    <p>• Established scalable cloud infrastructure<br>
                    • Implemented core API and database architecture<br>
                    • Developed the first version of the user interface<br>
                    • Set up comprehensive testing and CI/CD pipelines</p>
                    
                    <p>The development process was iterative and agile. We held daily stand-ups, sprint planning sessions, and retrospectives to ensure continuous improvement. Our team adopted best practices in code review, documentation, and quality assurance.</p>
                    
                    <p>This year also saw significant growth in our team. We hired additional engineers, designers, and product managers who brought fresh perspectives and expertise. The collaborative environment fostered innovation and rapid progress.</p>
                    
                    <p>Challenges included navigating technical complexities, making architectural decisions, and balancing speed with quality. However, these challenges helped us build a more robust and maintainable codebase.</p>
                `
            },
            {
                date: "2022",
                title: "Beta Release",
                description: "Released beta version to select users for testing and feedback collection.",
                detailContent: `
                    <h2>Beta Release - 2022</h2>
                    <p>The beta release in 2022 was a pivotal moment for our project. After months of development, we were finally ready to put our product in the hands of real users.</p>
                    
                    <p><strong>Beta Program Highlights:</strong></p>
                    <p>• Onboarded 500 beta testers from diverse backgrounds<br>
                    • Collected over 2,000 pieces of feedback<br>
                    • Fixed 300+ bugs and improved 50+ features<br>
                    • Achieved 85% user satisfaction rating</p>
                    
                    <p>The beta phase taught us invaluable lessons about user behavior, product usability, and market fit. We learned that some features we thought were essential were rarely used, while others we considered minor became user favorites.</p>
                    
                    <p>We implemented a robust feedback system that allowed beta testers to easily report issues and suggest improvements. Our support team worked around the clock to respond to queries and ensure a positive experience.</p>
                    
                    <p>Based on beta feedback, we made significant changes to the user interface, simplified complex workflows, and added several highly requested features. This iterative approach proved crucial in refining our product.</p>
                `
            },
            {
                date: "2023",
                title: "Official Launch",
                description: "Public release with full features and comprehensive documentation.",
                detailContent: `
                    <h2>Official Launch - 2023</h2>
                    <p>The official launch in 2023 was the culmination of years of hard work, dedication, and perseverance. We released our product to the public with confidence, backed by extensive testing and refinement.</p>
                    
                    <p><strong>Launch Statistics:</strong></p>
                    <p>• 10,000 users in the first month<br>
                    • Featured in major tech publications<br>
                    • 4.7/5 average user rating<br>
                    • 99.9% uptime achievement</p>
                    
                    <p>The launch campaign included strategic marketing efforts, press releases, social media engagement, and partnership announcements. We organized webinars and demonstrations to showcase the product's capabilities.</p>
                    
                    <p>Our documentation team created comprehensive guides, tutorials, and API references to help users get started quickly. We also launched a community forum where users could connect, share experiences, and help each other.</p>
                    
                    <p>Post-launch support was intensive but rewarding. We monitored system performance closely, responded to user inquiries promptly, and released regular updates to address any issues and add improvements.</p>
                    
                    <p>The positive reception from users and industry experts validated our approach and motivated us to continue innovating and improving.</p>
                `
            },
            {
                date: "2024",
                title: "Major Update",
                description: "Introduced new features based on user feedback and market demands.",
                detailContent: `
                    <h2>Major Update - 2024</h2>
                    <p>Building on the success of our launch, 2024 brought a major update that significantly expanded our product's capabilities and addressed user feedback from the past year.</p>
                    
                    <p><strong>New Features:</strong></p>
                    <p>• Advanced analytics and reporting dashboard<br>
                    • Integration with 20+ third-party services<br>
                    • Mobile applications for iOS and Android<br>
                    • Enhanced security and privacy controls<br>
                    • AI-powered automation tools</p>
                    
                    <p>This update represented over 6 months of development work and involved contributions from our entire team. We conducted A/B testing, user interviews, and usability studies to ensure each new feature added real value.</p>
                    
                    <p>The mobile apps were particularly well-received, giving users the flexibility to access our platform from anywhere. We designed native experiences for both iOS and Android, respecting platform conventions while maintaining brand consistency.</p>
                    
                    <p>Performance improvements were also a focus, with load times reduced by 40% and database queries optimized for efficiency. We implemented caching strategies and content delivery networks to ensure fast, reliable service globally.</p>
                    
                    <p>User adoption of new features exceeded our expectations, with 70% of active users engaging with at least one new feature within the first month of release.</p>
                `
            },
            {
                date: "2025",
                title: "Global Expansion",
                description: "Expanded to international markets with multi-language support.",
                detailContent: `
                    <h2>Global Expansion - 2025</h2>
                    <p>2025 marks our expansion into international markets, making our product accessible to users around the world with localized experiences and multilingual support.</p>
                    
                    <p><strong>Expansion Achievements:</strong></p>
                    <p>• Launched in 15 countries across 4 continents<br>
                    • Added support for 12 languages<br>
                    • Established regional data centers for better performance<br>
                    • Partnered with local businesses and organizations<br>
                    • Adapted features for regional requirements and regulations</p>
                    
                    <p>Internationalization required careful planning and execution. We worked with native speakers to ensure accurate translations and cultural appropriateness. Our team also researched local market dynamics, user preferences, and competitive landscapes in each region.</p>
                    
                    <p>Technical challenges included handling different date formats, currencies, time zones, and regulatory requirements like GDPR and other privacy laws. We built flexible systems that could adapt to regional needs while maintaining a consistent core experience.</p>
                    
                    <p>The global expansion opened up exciting new opportunities and partnerships. We've seen innovative use cases emerge from different regions, enriching our product roadmap with diverse perspectives.</p>
                    
                    <p>Looking ahead, we're committed to continuing our growth while maintaining the quality and user focus that has defined our journey from the very beginning.</p>
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
    </script>
</body>
</html>
