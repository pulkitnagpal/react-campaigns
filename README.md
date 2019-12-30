Run the app on https://react-campaign.herokuapp.com/
## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### App Features

1. Schedule your events and accordingly the view will change for live, past and upcoming pages
2. View details by clicking on view pricing
3. The events/campaigns in the past are sorted as the most recent happened on the top and for the upcoming sorted as the nearest to happen on the top.

### App Test Cases

| Description          | Execution Step                                              | Expected Output                                                                                              |
|----------------------|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Campaign Date Change | Select today's date in  Past Campaign tab for any campaign  | The campaign should be  removed from Past campaign  tab and appear in Live Campaign tab                      |
| Campaign Date Change | Select past date in  Past Campaign tab for any campaign     | The campaign does not move from past tab and also get sorted in the order of most recent happened on the top |
| Campaign Date Change | Select past date in  Upcoming Campaign tab for any campaign | The campaign does not move from  upcoming tab and also get  sorted in the order of nearest on the top        |
| View Pricing         | Click on View pricing for a particular campaign             | A modal should open with the campaign's details                                                              |
