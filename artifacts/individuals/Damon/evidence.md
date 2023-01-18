### UI Design Studio Part 1 - https://drive.google.com/file/d/1tUfoVqdJCtX5k7wWT23jgH1tZnMey6Ew/view

- 1:01:07 Suggesting custom timestamps for the reminder (before finding out we only use a single timestamp)

- 1:15:01 Explaining the cirlce button in the task list item that opens the edit page on my initial design

- 1:18:33 Confirming Jasons question on the delete functionality, in which the circle you click on will be the task item that is deleted (if delete is pressed)

- 1:46:50 / ~1:47:50 Explaining to Kyle what I think the Store (in the proposed architecture diagram) means from my understanding (I attempted to use Redux and Repo. Design Pattern as an example)

### UI Design Studio Part 2 - https://drive.google.com/file/d/1YNKhUCWNVfdC6d5liZVCEaHj0rEM6DSO/view

- In this meeting we discuss the landscape UI design and create wireframes as a group

### Project Standup 1 - https://drive.google.com/file/d/1XRv05duevXZvqtZa_W0dumxE31B6T6Kt/view

N/A

### Deploy: Reminder App - https://drive.google.com/file/d/1YjB0EuaOKZHV2lGlr95RY0R-HhJVto3h/view

- During this meeting we discussed what I could work on as part of the Practices and Improvements Investigation issue as it seemed most of what I could find was already done. Kyle and Jason passed on some suggestions and I ended up finding a few touch ups to work on.

### Deploy: Reminder App 2 - https://drive.google.com/file/d/1kMg40mX5pY8SN0P3aOb3AgBZFdSP6Yw0/view

- During this meeting Kyle and myself attempted a release, we ran in to App Key Signing issues and tried to figure it out. We run through the 'Change App Signing Key' process but run into a Java version discrepency which stops us completing the process for changing the key.

- This is the meeting Wren suggested we bounce the app in the google console and start fresh (this happened a couple of times before we got the package identifier correct)

### Deploy: Reminder App 3 - https://drive.google.com/file/d/1ds_urZFZxx05F165HXxScZ1_WH-rTRSF/view

- This meeting was similar to the previous one. We ran into the bundle identifier issue and had to bounce the app again

### Reminder App Final Deployment - https://drive.google.com/file/d/1HkExA8YCLR3q4U9TLf0Mo1SJqUbpr1i5/view

- We ran into some eas-cli issues, turns out the package just needed to be udpated. I did this on my machine and then the build process started working. Kyle had the same issue. Jason had a different issue that we discovered was in the eas.json file with the id being incorrect. We fixed this, but ran into App Signing Key issues when uploading the .aab file (as I had predicted).

- I attempted to help Jason through the Changing App Signing Key process but ran in to the same issue Kyle had with a discrepency in Java versions. I ran a new build in the background as it worked fine on my machine after updating the eas-cli and we successfully uploaded that .aab instead as the previous build was also from my expo.dev account (same signing key)

