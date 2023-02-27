import React, { Component, useEffect, useRef } from 'react'
import * as d3 from 'd3'

export default function Circle() {
     return (
       <svg>
         <circle
         color='red'
           cx="150"
           cy="77"
           r="40"
         />
       </svg>
     )
   }