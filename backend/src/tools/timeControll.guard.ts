import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class TimeControllGuard implements CanActivate {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(_context: ExecutionContext): boolean {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getUTCHours() + 4); // ?^Samara clocks
    const currentHour = currentDate.getHours();

    const isWithinTimeRange = currentHour >= 8 && currentHour <= 20; // ?^[8, 21]

    if (!isWithinTimeRange) {
      console.log('Requests are only allowed between 8 AM and 8 PM.');
    }

    return isWithinTimeRange;
  }
}
