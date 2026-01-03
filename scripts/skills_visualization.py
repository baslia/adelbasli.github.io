# %%
import plotly.graph_objects as go
import plotly.express as px
from plotly.subplots import make_subplots
import pandas as pd
import numpy as np
import networkx as nx

# Define comprehensive skills data based on resume
data = {
    'Category': [
        # Agentic AI & GenAI (NEW - Core Focus)
        'Agentic AI & GenAI', 'Agentic AI & GenAI', 'Agentic AI & GenAI', 'Agentic AI & GenAI', 'Agentic AI & GenAI',
        'Agentic AI & GenAI', 'Agentic AI & GenAI', 'Agentic AI & GenAI',

        # Leadership & Management (NEW - Core Focus)
        'Leadership & Management', 'Leadership & Management', 'Leadership & Management', 'Leadership & Management',
        'Leadership & Management', 'Leadership & Management', 'Leadership & Management', 'Leadership & Management',
        'Leadership & Management', 'Leadership & Management',

        # Strategic Planning & Business (NEW)
        'Strategic Planning', 'Strategic Planning', 'Strategic Planning', 'Strategic Planning', 'Strategic Planning',

        # Advanced ML & Deep Learning
        'Advanced ML & Deep Learning', 'Advanced ML & Deep Learning', 'Advanced ML & Deep Learning',
        'Advanced ML & Deep Learning', 'Advanced ML & Deep Learning', 'Advanced ML & Deep Learning',
        'Advanced ML & Deep Learning', 'Advanced ML & Deep Learning',

        # Programming & Development
        'Programming & Development', 'Programming & Development', 'Programming & Development',
        'Programming & Development', 'Programming & Development',

        # Cloud & MLOps
        'Cloud & MLOps', 'Cloud & MLOps', 'Cloud & MLOps', 'Cloud & MLOps', 'Cloud & MLOps', 'Cloud & MLOps',

        # Data Engineering
        'Data Engineering', 'Data Engineering', 'Data Engineering', 'Data Engineering', 'Data Engineering',

        # Agile & Project Management
        'Agile & PM', 'Agile & PM', 'Agile & PM', 'Agile & PM', 'Agile & PM', 'Agile & PM',

        # Domain Expertise
        'Domain Expertise', 'Domain Expertise', 'Domain Expertise', 'Domain Expertise'
    ],
    'Skill': [
        # Agentic AI & GenAI
        'LangChain', 'RAG (Retrieval Augmented Generation)', 'Prompt Engineering', 'LLM Fine-Tuning',
        'AI Agents & Autonomous Systems', 'GenAI Classifiers', 'OpenAI GPT Models', 'LLM Optimization',

        # Leadership & Management
        'Team Leadership (25+ Associates)', 'Cross-Functional Team Management', 'Budget & Resource Management',
        'Performance Management', 'Strategic Workforce Planning', 'Talent Development & Mentoring',
        'Stakeholder Management', 'Executive Communication', 'Change Management', 'Hiring & Team Building',

        # Strategic Planning
        '3-Year Strategic Planning', 'ROI Analysis & Prioritization', 'FinOps & Cost Optimization',
        'Business-Tech Alignment', 'Innovation Strategy',

        # Advanced ML & Deep Learning
        'Transformer Architectures', 'LSTM & RNN', 'CNN & Computer Vision', 'Neural Networks',
        'Ensemble Methods', 'AutoML', 'NLP & Text Analytics', 'Time Series Forecasting',

        # Programming & Development
        'Python (Advanced)', 'SQL (Advanced)', 'R', 'Full-Stack Development', 'API Development',

        # Cloud & MLOps
        'AWS (Certified ML Specialist)', 'CI/CD Pipelines', 'Docker & Kubernetes',
        'Azure', 'Model Deployment & Monitoring', 'Scalable ML Systems',

        # Data Engineering
        'Apache Spark', 'Hadoop & Hive', 'ETL Pipelines', 'Big Data Processing', 'Elasticsearch',

        # Agile & PM
        'Agile Methodologies', 'Scrum Master', 'Sprint Planning', 'Jira & Project Tracking',
        'CAPM Certified', 'Risk Management',

        # Domain Expertise
        'Food & Nutrition Science', 'Healthcare & Wellness', 'Market Research', 'Regulatory Compliance'
    ]
}

# Years of experience based on resume (11+ years total experience)
data['Years of Experience'] = [
    # Agentic AI & GenAI (2-3 years, cutting edge)
    3, 3, 3, 2, 3, 2, 3, 2,

    # Leadership & Management (recent focus, 2-4 years in current role)
    4, 4, 4, 4, 3, 5, 6, 5, 4, 5,

    # Strategic Planning (2-4 years)
    4, 5, 3, 5, 4,

    # Advanced ML & Deep Learning (8-11 years)
    4, 4, 6, 11, 8, 5, 9, 10,

    # Programming & Development (8-11 years)
    11, 11, 8, 3, 6,

    # Cloud & MLOps (3-5 years)
    4, 5, 4, 3, 5, 5,

    # Data Engineering (3-8 years)
    5, 6, 8, 7, 3,

    # Agile & PM (3-5 years)
    5, 5, 5, 5, 3, 4,

    # Domain Expertise (4-11 years)
    4, 9, 11, 6
]

# Proficiency level (1-5 scale)
data['Proficiency'] = [
    # Agentic AI & GenAI
    5, 5, 5, 4, 5, 4, 5, 4,

    # Leadership & Management
    5, 5, 5, 5, 4, 5, 5, 5, 4, 5,

    # Strategic Planning
    5, 5, 5, 5, 5,

    # Advanced ML & Deep Learning
    4, 4, 4, 5, 5, 4, 5, 5,

    # Programming & Development
    5, 5, 4, 4, 4,

    # Cloud & MLOps
    5, 5, 4, 4, 5, 5,

    # Data Engineering
    4, 4, 5, 5, 4,

    # Agile & PM
    5, 5, 5, 5, 5, 4,

    # Domain Expertise
    4, 5, 5, 4
]

# Impact score (business value, 1-10 scale)
data['Impact'] = [
    # Agentic AI & GenAI
    10, 10, 9, 8, 10, 9, 10, 8,

    # Leadership & Management
    10, 10, 10, 9, 9, 9, 10, 10, 9, 9,

    # Strategic Planning
    10, 10, 10, 10, 9,

    # Advanced ML & Deep Learning
    8, 7, 7, 9, 9, 8, 9, 8,

    # Programming & Development
    8, 8, 6, 7, 7,

    # Cloud & MLOps
    9, 9, 8, 7, 9, 9,

    # Data Engineering
    7, 7, 8, 8, 7,

    # Agile & PM
    9, 9, 9, 8, 7, 8,

    # Domain Expertise
    9, 9, 8, 8
]

# Create a DataFrame
df = pd.DataFrame(data)

# Add a root node
df['Root'] = 'Skills'

# Create labels and parents for the sunburst
labels = ['Skills'] + df['Category'].unique().tolist() + df['Skill'].tolist()
parents = [''] + ['Skills'] * len(df['Category'].unique()) + df['Category'].tolist()

# Create a dataframe for sunburst
sunburst_df = pd.DataFrame({
    'labels': labels,
    'parents': parents
})

# Remove duplicate categories for parents
sunburst_df = sunburst_df.drop_duplicates()

# Assign colors to categories - Modern theme matching website gradient
category_colors = {
    'Agentic AI & GenAI': '#6a11cb',  # Purple (primary accent)
    'Leadership & Management': '#2575fc',  # Blue (gradient end)
    'Strategic Planning': '#005671',  # Teal (header color)
    'Advanced ML & Deep Learning': '#4CAF50',  # Green (highlight)
    'Programming & Development': '#1E90FF',  # Dodger blue (link color)
    'Cloud & MLOps': '#8b3dff',  # Medium purple
    'Data Engineering': '#0078a8',  # Deep blue
    'Agile & PM': '#66bb6a',  # Light green
    'Domain Expertise': '#5e35b1'  # Deep purple
}

# Map colors to labels
colors = []
for label in sunburst_df['labels']:
    if label in category_colors:
        colors.append(category_colors[label])
    elif label == 'Skills':
        colors.append('#f4f4f4')  # Match website background
    else:
        # Find the parent category for this skill and use a lighter shade
        parent_category = sunburst_df[sunburst_df['labels'] == label]['parents'].values[0]
        if parent_category in category_colors:
            # Create a lighter shade by adding transparency effect
            base_color = category_colors[parent_category]
            # Use a lighter gradient of the parent color
            colors.append(base_color + '99')  # Add alpha for lighter shade
        else:
            colors.append('#e0e0e0')  # Default light grey

hover_text = ['Skills'] + \
             [f"{cat} ({df[df['Category'] == cat]['Years of Experience'].max()} years)" for cat in
              df['Category'].unique()] + \
             [f"{skill} ({exp} years)" for skill, exp in zip(df['Skill'], df['Years of Experience'])]

# %%

# Create the Sunburst Chart
fig = go.Figure(go.Sunburst(
    labels=sunburst_df['labels'],
    parents=sunburst_df['parents'],
    marker=dict(colors=colors),
    branchvalues="total",
    hovertext=hover_text,
    hoverinfo="text"
))

# Update layout for better appearance
fig.update_layout(
    # title="My Skills Visualization",
    margin=dict(t=50, l=25, r=25, b=25)
)

# Display the chart
fig.show()
# %%
# To save as HTML
fig.write_html("/Users/adelbasli/PycharmProjects/adelbasli.github.io/skills_sunburst.html")
