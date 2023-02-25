public with sharing class GetContactList {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts() {
        return [SELECT id, LastName FROM Contact WITH SECURITY_ENFORCED LIMIT 20];
    }
}