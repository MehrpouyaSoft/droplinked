import { Hidden } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'

interface Iprops {
    device: Array<'mobile' | 'desktop' | 'tablet' | 'laptop'>
    children: any
}

function AppResponsive(props: Iprops) {
    const { children, device } = props
    const [Only, setOnly] = useState<any>(['lg', 'sm', 'xl', 'xs', 'md'])

    const deviceHandle = useCallback(() => {
        if (device) {
            if (device.includes('desktop')) {
                setOnly((prev: any) => prev.filter((el: any) => el !== 'xl' && el !== 'lg'))
            }
            if (device.includes('laptop')) {
                setOnly((prev: any) => prev.filter((el: any) => el !== 'md'))
            }
            if (device.includes('tablet')) {
                setOnly((prev: any) => prev.filter((el: any) => el !== 'sm'))
            }
            if (device.includes('mobile')) {
                setOnly((prev: any) => prev.filter((el: any) => el !== 'xs'))
            }
        }
    }, [device])

    useEffect(() => {
        deviceHandle()
    }, [device, deviceHandle])


    return (
        <Hidden only={Only}>{children}</Hidden>
    )
}

export default AppResponsive