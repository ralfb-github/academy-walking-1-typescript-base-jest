import {AccountService, IPrinter} from "../main/bankkata"
import {mock} from 'jest-mock-extended'

describe('test AccountService', () => {
    
    it("accountService is initialized", () => {
        let printerMock = mock<IPrinter>();
        const accountService = new AccountService(printerMock)
        expect(accountService).toBeDefined();
    }),

    it("should print a empty account statement", () => {
        let printerMock = mock<IPrinter>();
        const accountService = new AccountService(printerMock);
        accountService.printStatement();
        expect(printerMock.print).toBeCalledWith("Date||Amount||Balance");
    }),

    it("should print the first row", () => {
        let printerMock = mock<IPrinter>();
        const accountService = new AccountService(printerMock);
        accountService.deposit(1000)
        accountService.printStatement();
        expect(printerMock.print).toBeCalledWith("Date||Amount||Balance+14/09/2021||1000||1000");
    })

/*     Given a client makes a deposit of 1000 on 10-01-2012
    And a deposit of 2000 on 13-01-2012
    And a withdrawal of 500 on 14-01-2012
    When they print their bank statement */
}
)