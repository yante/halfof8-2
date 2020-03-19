import React from "react"
import styled from "styled-components"
import { Arrow } from "../Icons/Arrow"
import { Expand } from "../Icons/Expand"
import { NewWindow } from "../Icons/NewWindow"

const IconBase = ({ item, className, ...props }) => {
  switch (true) {
    default:
      return (
        <div className={className}>
          <Expand />
        </div>
      )
  }
}

export const Icon = styled(IconBase)`
  position: absolute;
  background-color: #fff;
  border-radius: 100%;
  width: 68px;
  height: 68px;
  margin-top: -34px;
  margin-left: -34px;
  left: 50%;
  top: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 2;
`