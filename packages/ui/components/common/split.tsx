"use client"
import React from 'react'
import ReactSplit, { SplitProps } from 'react-split'
import './split.css'

type Props = React.PropsWithChildren<SplitProps & {

}>

const Split = ({
    children,
    gutterSize = 8,
    ...rest
}: Props) => {
    return (
        <ReactSplit
            {...rest}
        >
            {children}
        </ReactSplit>
    )
}

export default Split