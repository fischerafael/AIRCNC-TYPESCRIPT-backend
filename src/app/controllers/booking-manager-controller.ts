import { Request, Response } from 'express'
import { approveBookingService, refuseBookingService, getBookingsRequetsService, getBookingByIdService } from '../services/booking-manager-services'

export async function approveBooking(req: Request, res: Response) {
    try {
        const { booking_id } = req.params
        const onwer_id = req.headers.user_id as string
        const response = await approveBookingService(booking_id, onwer_id)
        return res.status(response.status).json(response.data)
    } catch(err) {
        return res.status(500).json(err)
    }
}

export async function refuseBooking(req: Request, res: Response) {
    try {
        const { booking_id } = req.params
        const onwer_id = req.headers.user_id as string
        const response = await refuseBookingService(booking_id, onwer_id)
        return res.status(response.status).json(response.data)
    } catch(err) {
        return res.status(500).json(err)
    }
}

export async function getBookingsRequests(req: Request, res: Response) {
    try {
        const onwer_id = req.headers.user_id as string
        const response = await getBookingsRequetsService(onwer_id)
        return res.status(response.status).json(response.data)
    } catch(err) {        
        return res.status(500).json(err)
    }
}

export async function getBookingById(req: Request, res: Response) {
    try {
        const { booking_id } = req.params
        const response = await getBookingByIdService(booking_id)
        return res.status(response.status).json(response.data)
    } catch(err) {
        return res.status(500).json(err)
    }
}
