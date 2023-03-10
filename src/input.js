module.exports = [
    `{
 "where": [
  {
   "$and": [
    {
     "$and": [
      {
       "owner": {
        "$eq": $page.state
       }
      }
     ]
    }
   ]
  }
 ],
 "order": []
}`,
    `{
 "where": [
  {
   "$and": [
    {
     "$and": [
      {
       "_id": {
        "$eq": "123"
       }
      }
     ]
    }
   ]
  }
 ],
 "order": []
}`,
    `{
 "where": [
  {
   "$and": [
    {
     "$and": [
      {
       "_id": {
        "$eq": false
       }
      }
     ]
    }
   ]
  }
 ],
 "order": []
}`,
    `{
 "where": [
  {
   "$and": [
    {
     "$and": [
      {
       "_id": {
        "$eq": 123
       }
      }
     ]
    }
   ]
  }
 ],
 "order": []
}`,
    `{
 "where": [
  {
   "$and": [
    {
     "$and": [
      {
       "owner": {
        "$eq": Max(1, 2)
       }
      }
     ]
    }
   ]
  }
 ],
 "order": []
}`,
    `{
 "where": [
  {
   "$and": [
    {
     "$and": [
      {
       "owner": {
        "$eq": Max(1, 2)
       }
      }
     ]
    }
   ]
  }
 ],
 "order": [
  {
   "someKey": "asc"
  }
 ]
}`
];