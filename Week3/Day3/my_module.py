def func(a, b):
    print(f"Sum of 2 numbers {a} and {b} = {a+b}")

from datetime import datetime, timedelta
def dt_now():
    print(f"The date today is: \
          {datetime.today().strftime('%Y-%m-%d %H:%M:%S')}")

def days_left(future_date: tuple):
    '''Calculates the days and hours 
       until a given future date from now
    params: future_date (yyyy, mm, dd)'''
    
    nowdate   = datetime.today()
    futdate = datetime(future_date[0], future_date[1], future_date[2])

    now     = datetime.now()
    mnight  = now.replace(hour=0, minute=0, second=0, microsecond=0)
    seconds = (mnight - now).seconds
    days    = (futdate - nowdate).days
    hms     = str(timedelta(seconds=seconds))
    # Future date from now
    print(f"The future date {futdate.strftime('%d')} {futdate.strftime('%B')} {futdate.strftime('%Y')} is in {days} days and {hms} hours")
    
def days_lived(birthday):
    nowdate   = datetime.today()
    bdate = datetime(birthday[0], birthday[1], birthday[2])

    now     = datetime.now()
    mnight  = now.replace(hour=0, minute=0, second=0, microsecond=0)
    seconds = (now - mnight).seconds
    days    = (nowdate - bdate).days
    hms     = str(timedelta(seconds=seconds))

    # days lived until now
    print(f"Since your birthday {bdate.strftime('%d')} {bdate.strftime('%B')} {bdate.strftime('%Y')} you have lived {days} days and {hms} hours")
    
