import React from 'react'

// STYLE
import './RoadmapList.scss'

let lista = [
  { id: 0, text: 'Hello'},
  { id: 1, text: 'my' },
  { id: 2, text: 'friend' }
]

const RoadmapList = (props) => (
  <div className="RoadmapList">
    <ul className="RoadmapList__list">
      { lista.map(roadmap => (
        <li className="RoadmapList__listItem" key={roadmap.id}>
          <input type="checkbox" /> {roadmap.text}
        </li>
      )) }
    </ul>
  </div>
)

export default RoadmapList
