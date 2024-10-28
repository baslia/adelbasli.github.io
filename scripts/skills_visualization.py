#%%
import plotly.graph_objects as go
import pandas as pd

# Define the data
data = {
    'Category': [
        'Data Science', 'Data Science', 'Data Science', 'Data Science',
        'Programming Languages', 'Programming Languages', 'Programming Languages',
        'Machine Learning Libraries', 'Machine Learning Libraries', 'Machine Learning Libraries', 'Machine Learning Libraries',
        'Cloud Computing', 'Cloud Computing', 'Cloud Computing',
        'Data Visualization Tools', 'Data Visualization Tools', 'Data Visualization Tools', 'Data Visualization Tools', 'Data Visualization Tools',
        'Big Data Technologies', 'Big Data Technologies', 'Big Data Technologies', 'Big Data Technologies',
        'Software and Tools', 'Software and Tools', 'Software and Tools', 'Software and Tools', 'Software and Tools', 'Software and Tools',
        'Project Management', 'Project Management', 'Project Management', 'Project Management', 'Project Management',
        'Soft Skills', 'Soft Skills', 'Soft Skills', 'Soft Skills', 'Soft Skills', 'Soft Skills', 'Soft Skills', 'Soft Skills'
    ],
    'Skill': [
        'Machine Learning', 'Statistical Analysis', 'Predictive Modeling', 'Hypothesis Testing',
        'Python', 'R', 'SQL',
        'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras',
        'AWS', 'Microsoft Azure', 'Google Cloud Platform (GCP)',
        'Matplotlib', 'Seaborn', 'Tableau', 'Microsoft Power BI', 'Excel',
        'Hadoop', 'Apache Spark', 'Hive', 'Pig',
        'Jupyter Notebook', 'RStudio', 'Anaconda', 'Git', 'Jira', 'CircleCI',
        'Agile Methodologies', 'Scrum', 'Kanban', 'Jira', 'Microsoft Project',
        'Presentation', 'Planning', 'Organization', 'Creative Problem-Solving', 'Teamwork', 'Active Listening', 'Adaptability', 'Analytical Thinking'
    ]
}

data['Years of Experience'] = [
    10, 4, 10, 2,  # Data Science
    8, 5, 10,  # Programming Languages
    8, 8, 8, 8,  # Machine Learning Libraries
    3, 5, 1,  # Cloud Computing
    8, 8, 8, 2, 10,  # Data Visualization Tools
    2, 3, 3, 2,  # Big Data Technologies
    8, 4, 8, 8, 5, 5,  # Software and Tools
    5, 5, 5, 5, 5,  # Project Management
    10, 10, 10, 10, 10, 10, 10, 10  # Soft Skills
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

# Assign colors to categories
category_colors = {
    'Data Science': 'royalblue',
    'Programming Languages': 'seagreen',
    'Machine Learning Libraries': 'orange',
    'Cloud Computing': 'purple',
    'Data Visualization Tools': 'teal',
    'Big Data Technologies': 'navy',
    'Software and Tools': 'darkgreen',
    'Project Management': 'crimson',
    'Soft Skills': 'gold'
}

# Map colors to labels
colors = []
for label in sunburst_df['labels']:
    if label in category_colors:
        colors.append(category_colors[label])
    elif label == 'Skills':
        colors.append('lightgrey')
    else:
        # Assign a lighter shade or a default color for sub-skills
        colors.append('lightblue')


hover_text = ['Skills'] + \
             [f"{cat} ({df[df['Category'] == cat]['Years of Experience'].max()} years)" for cat in df['Category'].unique()] + \
             [f"{skill} ({exp} years)" for skill, exp in zip(df['Skill'], df['Years of Experience'])]

#%%

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
    margin = dict(t=50, l=25, r=25, b=25)
)

# Display the chart
fig.show()
#%%
# To save as HTML
fig.write_html("/Users/baslad01/data_dump/skills_sunburst.html")