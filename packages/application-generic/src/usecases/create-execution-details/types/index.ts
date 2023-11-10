export enum DetailEnum {
  REPLY_CALLBACK_MISSING_REPLAY_CALLBACK_URL = 'Inbound mail - Missing replay callback URL',
  REPLY_CALLBACK_NOT_CONFIGURATION = 'Inbound mail - Missing configuration',
  REPLY_CALLBACK_MISSING_MX_RECORD_CONFIGURATION = 'Inbound mail - Missing MX Record configuration',
  REPLY_CALLBACK_MISSING_MX_ROUTE_DOMAIN_CONFIGURATION = 'Inbound mail - Missing MX route domain configuration',
  CHAT_WEBHOOK_URL_MISSING = 'Webhook URL for the chat channel is missing',
  CHAT_ALL_CHANNELS_FAILED = 'All chat channels failed to send the message',
  STEP_CREATED = 'Step created',
  STEP_QUEUED = 'Step queued',
  STEP_DELAYED = 'Step delayed',
  STEP_DIGESTED = 'Step digested',
  MESSAGE_CONTENT_NOT_GENERATED = 'Message content could not be generated',
  MESSAGE_CONTENT_SYNTAX_ERROR = 'Message content could not be generated due to syntax error in email editor',
  MESSAGE_CREATED = 'Message created',
  SUBSCRIBER_NO_ACTIVE_INTEGRATION = 'Subscriber does not have an active integration',
  LAYOUT_NOT_FOUND = 'Layout not found ',
  INTEGRATION_INSTANCE_SELECTED = 'Integration instance selected',
  TENANT_CONTEXT_SELECTED = 'Tenant context selected',
  TENANT_NOT_FOUND = 'Tenant identifier not found',
  LIMIT_PASSED_NOVU_INTEGRATION = "Novu's provider limit has been reached",
  SUBSCRIBER_NO_CHANNEL_DETAILS = 'Subscriber missing recipient details',
  SUBSCRIBER_NO_ACTIVE_CHANNEL = 'Subscriber does not have a configured channel',
  MESSAGE_SENT = 'Message sent',
  PROVIDER_ERROR = 'Unexpected provider error',
  START_SENDING = 'Start sending message',
  START_DIGESTING = 'Start digesting',
  PROCESSING_STEP_FILTER = 'Processing step filter',
  FILTER_STEPS = 'Step was filtered based on steps filters',
  DIGEST_TRIGGERED_EVENTS = 'Digest triggered events',
  STEP_FILTERED_BY_PREFERENCES = 'Step filtered by subscriber preferences',
  STEP_FILTERED_BY_GLOBAL_PREFERENCES = 'Step filtered by subscriber global preferences',
  WEBHOOK_FILTER_FAILED_RETRY = 'Webhook filter failed, retry will be executed',
  WEBHOOK_FILTER_FAILED_LAST_RETRY = 'Failed to get response from remote webhook filter on last retry',
  DIGEST_MERGED = 'Digest was merged with other digest',
  DELAY_FINISHED = 'Delay is finished',
  PUSH_MISSING_DEVICE_TOKENS = 'Subscriber credentials is missing the tokens for sending a push notification message',
  NOTIFICATION_ERROR = 'There was one or more errors when trying to execute the notification',
}
