//
// Import necessary modules
const express = require('express')
const app = express()
// Example route to toggle like status for a tweet
app.put('/tweets/:tweetId/like', (req, res) => {
  const tweetId = req.params.tweetId
  console.log(tweetId)
  // Your logic to handle toggling like for the tweet with ID `tweetId`
  res.json({ success: true, message: `Liked tweet with ID ${tweetId}` })
})

// Start the server
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
