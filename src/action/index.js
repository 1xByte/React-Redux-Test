import React from 'react'

export const incNum = () => {
  return {
      type: "INCREMENT"
  }
}

export const incDec = () => {
    return {
        type: "DECREMENT"
    }
  }