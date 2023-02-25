public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> accountList() {
        return [SELECT Id, Name FROM Account WITH SECURITY_ENFORCED LIMIT 25];
    }
}