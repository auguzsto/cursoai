import { z } from "zod"

export class User {
    id?: number
    full_name?: string
    is_administrator?: boolean
    password?: string
    email?: string
    login?: string
    birth?: string
    phone?: string
    address?: string
    cep?: string
    city?: string
    district?: string
    state?: string
    created_at?: string
    updated_at?: string
    deleted_at?: string
}