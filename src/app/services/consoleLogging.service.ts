import { ILoggerService } from "./loggerContracts.service";

export class ConsoleLoggingService implements ILoggerService{
    write(message: string): void {
        console.log(message)
    }
}