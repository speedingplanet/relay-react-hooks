# Labs, Day Two

## Fragments

Write a component that pulls in a list of followers for a User. 
You should be able to pick up the User's name, login and email. 

Use a Fragment to get the details of the followers the User has. 

Use `useFragment` to display the results in a separate component. 

## Refetchable Fragments

What happens if the follower information for our User updates? Does Relay detect the changes?

Can we refetch just the fragment? (Of course we can)

Update the previous lab's code to use `useRefetchableFragment`

Test the code by adding or following a user (you can use **johnpaxton** as a test user, if you'd like)

## Paginating data

And now we'll expand the previous lab to include paginating data

Change your component(s) so that the followers of a user are paginated. Display a small number at a time. Add buttons that fetch more followers, if there are more followers.

