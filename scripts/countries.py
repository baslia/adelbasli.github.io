#%%
import plotly.express as px
import pandas as pd

# Define the data
data = {
    'City': ['Paris', 'Strasbourg', 'Boston', 'Chicago', 'Munich', 'Newark'],
    'Country': ['France', 'France', 'USA', 'USA', 'Germany', 'USA'],
    'Years': [8, 20, 1, 5, 1, 1.5],
    'Latitude': [48.8566, 48.5734, 42.3601, 41.8781, 48.1351, 39.6837],
    'Longitude': [2.3522, 7.7521, -71.0589, -87.6298, 11.5820, -75.7497]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Create a Plotly map
fig = px.scatter_geo(
    df,
    lat='Latitude',
    lon='Longitude',
    text='City',
    size='Years',
    color='Years',
    hover_name='City',
    hover_data={'Latitude': False, 'Longitude': False, 'Country': True, 'City': False},
    color_continuous_scale=px.colors.sequential.Plasma,
    # title='Cities I Lived In and Duration'
)

# Update layout for better appearance
fig.update_traces(textposition='top center')

fig.update_layout(
    geo=dict(
        showframe=False,
        showcoastlines=False,
        projection_type='equirectangular',
        center=dict(lat=45, lon=-20),  # Center between US and Europe
        projection_scale=2  # Adjust the scale for better view
    ),
    margin=dict(t=50, l=25, r=25, b=25)
)

# Save the map as an HTML file
fig.write_html("/Users/baslad01/data_dump/countries_lived.html")