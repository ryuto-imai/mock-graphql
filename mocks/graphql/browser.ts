import { setupWorker } from 'msw/browser'
import { userHandlers } from './handler'

export const worker = setupWorker(...userHandlers)