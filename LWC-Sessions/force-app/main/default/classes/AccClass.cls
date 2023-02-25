public with sharing class AccClass {
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccounts(String filter) {
        String keyName = '%'+filter+'%';
return [SELECT Id, Name, Phone FROM Account WHERE Name LIKE: keyName];
    }
}