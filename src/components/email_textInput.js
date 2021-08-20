import TextInput from "./TextInput";
import React from "react";

<TextInput
    label="Email"
    returnKeyType="next"
    value={email.value}
    onChangeText={(text) => setEmail({ value: text, error: '' })}
    error={!!email.error}
    errorText={email.error}
    autoCapitalize="none"
    autoCompleteType="email"
    textContentType="emailAddress"
    keyboardType="email-address"
/>
