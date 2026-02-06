var tablinks = document.getElementsByClassName("tab-links")
    var tabcontents = document.getElementsByClassName("tab-contents")

    function opentab(tabname){
        for (tablink of tablinks) {
            tablink.classList.remove("active-link")
        }

        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab")
        }

        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab")

    }
    // Modal Handling
    const modal = document.getElementById('serviceModal');
    const closeBtn = document.querySelector('.close');
    const learnMoreBtns = document.querySelectorAll('.learn-more');

    // Sample content - expand this for all services
    const serviceContent = {
    'ai-ml': [
        "Custom AI & ML Model Development: Building end-to-end AI solutions tailored to business needs.",
        "Predictive Analytics & Forecasting: Using statistical models to anticipate trends and behaviors.",
        "Recommendation Systems: Designing AI-driven recommendation engines for personalization.",
        "Anomaly Detection: Identifying fraud, defects, or unusual patterns in data.",
    ],
    'genai-nlp': [
        "Conversational AI & Chatbot Development: Creating intelligent assistants and virtual agents.",
        "LLM Fine-Tuning & Deployment: Customizing and deploying Large Language Models (LLMs).",
        "Text Summarization & Sentiment Analysis: Extracting insights from textual data.",
        "Document Automation & RFP/Bid Automation: AI-powered proposal generation & document processing."
    ],
    'mlops-ai': [
        "End-to-End MLOps Pipelines – Automating model training, deployment, and monitoring.",
        "Cloud & Edge AI Deployments – Deploying AI models on AWS, GCP, Azure, and edge devices.",
        "Model Optimization & Performance Tuning – Ensuring AI models are fast, efficient, and scalable.",
        "AI Compliance & Responsible AI Practices – Implementing Ethical AI, Bias Detection, and Explainability.",
    ],
    'data-engineering': [
        "Data Pipeline Development: Designing ETL & ELT pipelines for efficient data processing.",
        "Big Data Processing & Real-Time Analytics: Leveraging tools like Spark, Databricks, and Kafka.",
        "Data Visualization & Business Intelligence: Creating dashboards using Power BI, Tableau, and Looker.",
        "Feature Engineering & Data Cleaning: Preparing high-quality datasets for ML models."
    ],
    'ai-strategy': [
        "AI Roadmap & Strategy Development: Helping businesses integrate AI effectively",
        "AI & ML Training & Workshops: Conducting corporate training on AI, ML, and Generative AI",
        "Technical Advisory for AI Startups: Assisting in AI-driven product development and scaling"
    ],
    'scraping-automation': [
        "Automated Web Scraping & Crawling: Building scalable Python-based web crawlers to extract structured & unstructured data.",
        "ETL & Data Pipeline Automation: Designing end-to-end ETL workflows for data collection, transformation, and storage.",
        "API & Dynamic Content Extraction: Scraping JavaScript-heavy websites and integrating with public/private APIs.",
        "Custom Web Automation Solutions: Developing RPA bots & automation scripts for repetitive web-based tasks.",
        "Data Integrity & Anti-Bot Handling: Implementing proxy rotation, CAPTCHA solving, and user-agent spoofing to bypass restrictions.",
    ]
    // Add content for other services
    };

    learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const service = e.target.dataset.service;
        const content = serviceContent[service].map(item => 
        `<li>${item}</li>`
        ).join('');
        
        document.getElementById('modalBulletPoints').innerHTML = `
        <h2>${e.target.closest('div').querySelector('h2').textContent}</h2>
        <ul>${content}</ul>
        `;
        modal.style.display = 'block';
    });
    });

    // Close modal
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
    }

    // Project Dialog Handling
    document.addEventListener('DOMContentLoaded', function() {
        const workItems = document.querySelectorAll('.work');

        workItems.forEach(work => {
            const layer = work.querySelector('.layer');
            const layerContent = work.querySelector('.layer-content');

            if (!layer || !layerContent) return;

            // Show dialog when hovering on project card
            work.addEventListener('mouseenter', function() {
                // Close all other open popups first
                workItems.forEach(otherWork => {
                    if (otherWork !== work) {
                        const otherLayer = otherWork.querySelector('.layer');
                        if (otherLayer) otherLayer.classList.remove('active');
                    }
                });
                layer.classList.add('active');
            });

            // Hide dialog when mouse leaves the dialog content
            layerContent.addEventListener('mouseleave', function() {
                layer.classList.remove('active');
            });

            // Also hide when clicking outside (on the backdrop)
            layer.addEventListener('click', function(e) {
                if (e.target === layer) {
                    layer.classList.remove('active');
                }
            });
        });
    });