import * as $protobuf from "protobufjs";
import Long = require("long");

/**
 * Properties of a GenAIRpcRequest.
 * @deprecated Use GenAIRpcRequest.$Properties instead.
 */
export interface IGenAIRpcRequest extends GenAIRpcRequest.$Properties {
}

/** Represents a GenAIRpcRequest. */
export class GenAIRpcRequest {

    /**
     * Constructs a new GenAIRpcRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: GenAIRpcRequest.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** GenAIRpcRequest llmCreate. */
    llmCreate?: (LLM_Create_Request.$Properties|null);

    /** GenAIRpcRequest llmGetGeneratorParams. */
    llmGetGeneratorParams?: (LLM_Get_Generator_Params_Request.$Properties|null);

    /** GenAIRpcRequest llmGeneratorCreate. */
    llmGeneratorCreate?: (LLM_Generator_Create_Request.$Properties|null);

    /** GenAIRpcRequest llmGeneratorWrite. */
    llmGeneratorWrite?: (LLM_Generator_Write_Request.$Properties|null);

    /** GenAIRpcRequest llmGeneratorGenerate. */
    llmGeneratorGenerate?: (LLM_Generator_Generate_Request.$Properties|null);

    /** GenAIRpcRequest llmGeneratorRead. */
    llmGeneratorRead?: (LLM_Generator_Read_Request.$Properties|null);

    /** GenAIRpcRequest llmGeneratorAbort. */
    llmGeneratorAbort?: (LLM_Generator_Abort_Request.$Properties|null);

    /** GenAIRpcRequest llmGeneratorRelease. */
    llmGeneratorRelease?: (LLM_Generator_Release_Request.$Properties|null);

    /** GenAIRpcRequest llmTokenize. */
    llmTokenize?: (LLM_Tokenize_Request.$Properties|null);

    /** GenAIRpcRequest llmGetContext. */
    llmGetContext?: (LLM_Get_Context_Request.$Properties|null);

    /** GenAIRpcRequest llmSetContext. */
    llmSetContext?: (LLM_Set_Context_Request.$Properties|null);

    /** GenAIRpcRequest llmClearContext. */
    llmClearContext?: (LLM_Clear_Context_Request.$Properties|null);

    /** GenAIRpcRequest llmSetEndOfGenerationSequence. */
    llmSetEndOfGenerationSequence?: (LLM_Set_End_Of_Generation_Sequence_Request.$Properties|null);

    /** GenAIRpcRequest llmGetEndOfGenerationSequence. */
    llmGetEndOfGenerationSequence?: (LLM_Get_End_Of_Generation_Sequence_Request.$Properties|null);

    /** GenAIRpcRequest llmRelease. */
    llmRelease?: (LLM_Release_Request.$Properties|null);

    /** GenAIRpcRequest llmSetStopTokens. */
    llmSetStopTokens?: (LLM_Set_Stop_Tokens_Request.$Properties|null);

    /** GenAIRpcRequest llmGetStopTokens. */
    llmGetStopTokens?: (LLM_Get_Stop_Tokens_Request.$Properties|null);

    /** GenAIRpcRequest llmGetContextUsageSize. */
    llmGetContextUsageSize?: (LLM_Get_Context_Usage_Size_Request.$Properties|null);

    /** GenAIRpcRequest llmGetMaxContextCapacity. */
    llmGetMaxContextCapacity?: (LLM_Get_Max_Context_Capacity_Request.$Properties|null);

    /** GenAIRpcRequest vlmCreate. */
    vlmCreate?: (VLM_Create_Request.$Properties|null);

    /** GenAIRpcRequest vlmGeneratorGenerate. */
    vlmGeneratorGenerate?: (VLM_Generator_Generate_Request.$Properties|null);

    /** GenAIRpcRequest genaiCheckHefExists. */
    genaiCheckHefExists?: (GenAI_Check_Hef_Exists_Request.$Properties|null);

    /** GenAIRpcRequest speech2textCreate. */
    speech2textCreate?: (Speech2Text_Create_Request.$Properties|null);

    /** GenAIRpcRequest speech2textGenerate. */
    speech2textGenerate?: (Speech2Text_Generate_Request.$Properties|null);

    /** GenAIRpcRequest speech2textRelease. */
    speech2textRelease?: (Speech2Text_Release_Request.$Properties|null);

    /** GenAIRpcRequest speech2textTokenize. */
    speech2textTokenize?: (Speech2Text_Tokenize_Request.$Properties|null);

    /** GenAIRpcRequest request. */
    request?: ("llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize");

    /**
     * Creates a new GenAIRpcRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenAIRpcRequest instance
     */
    static create(properties: GenAIRpcRequest.$Shape): GenAIRpcRequest & GenAIRpcRequest.$Shape;
    static create(properties?: GenAIRpcRequest.$Properties): GenAIRpcRequest;

    /**
     * Encodes the specified GenAIRpcRequest message. Does not implicitly {@link GenAIRpcRequest.verify|verify} messages.
     * @param message GenAIRpcRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: GenAIRpcRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenAIRpcRequest message, length delimited. Does not implicitly {@link GenAIRpcRequest.verify|verify} messages.
     * @param message GenAIRpcRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: GenAIRpcRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenAIRpcRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {GenAIRpcRequest & GenAIRpcRequest.$Shape} GenAIRpcRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenAIRpcRequest & GenAIRpcRequest.$Shape;

    /**
     * Decodes a GenAIRpcRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {GenAIRpcRequest & GenAIRpcRequest.$Shape} GenAIRpcRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenAIRpcRequest & GenAIRpcRequest.$Shape;

    /**
     * Verifies a GenAIRpcRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenAIRpcRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenAIRpcRequest
     */
    static fromObject(object: { [k: string]: any }): GenAIRpcRequest;

    /**
     * Creates a plain object from a GenAIRpcRequest message. Also converts values to other types if specified.
     * @param message GenAIRpcRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: GenAIRpcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenAIRpcRequest to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for GenAIRpcRequest
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace GenAIRpcRequest {

    /** Properties of a GenAIRpcRequest. */
    interface $Properties {

        /** GenAIRpcRequest llmCreate */
        llmCreate?: (LLM_Create_Request.$Properties|null);

        /** GenAIRpcRequest llmGetGeneratorParams */
        llmGetGeneratorParams?: (LLM_Get_Generator_Params_Request.$Properties|null);

        /** GenAIRpcRequest llmGeneratorCreate */
        llmGeneratorCreate?: (LLM_Generator_Create_Request.$Properties|null);

        /** GenAIRpcRequest llmGeneratorWrite */
        llmGeneratorWrite?: (LLM_Generator_Write_Request.$Properties|null);

        /** GenAIRpcRequest llmGeneratorGenerate */
        llmGeneratorGenerate?: (LLM_Generator_Generate_Request.$Properties|null);

        /** GenAIRpcRequest llmGeneratorRead */
        llmGeneratorRead?: (LLM_Generator_Read_Request.$Properties|null);

        /** GenAIRpcRequest llmGeneratorAbort */
        llmGeneratorAbort?: (LLM_Generator_Abort_Request.$Properties|null);

        /** GenAIRpcRequest llmGeneratorRelease */
        llmGeneratorRelease?: (LLM_Generator_Release_Request.$Properties|null);

        /** GenAIRpcRequest llmTokenize */
        llmTokenize?: (LLM_Tokenize_Request.$Properties|null);

        /** GenAIRpcRequest llmGetContext */
        llmGetContext?: (LLM_Get_Context_Request.$Properties|null);

        /** GenAIRpcRequest llmSetContext */
        llmSetContext?: (LLM_Set_Context_Request.$Properties|null);

        /** GenAIRpcRequest llmClearContext */
        llmClearContext?: (LLM_Clear_Context_Request.$Properties|null);

        /** GenAIRpcRequest llmSetEndOfGenerationSequence */
        llmSetEndOfGenerationSequence?: (LLM_Set_End_Of_Generation_Sequence_Request.$Properties|null);

        /** GenAIRpcRequest llmGetEndOfGenerationSequence */
        llmGetEndOfGenerationSequence?: (LLM_Get_End_Of_Generation_Sequence_Request.$Properties|null);

        /** GenAIRpcRequest llmRelease */
        llmRelease?: (LLM_Release_Request.$Properties|null);

        /** GenAIRpcRequest llmSetStopTokens */
        llmSetStopTokens?: (LLM_Set_Stop_Tokens_Request.$Properties|null);

        /** GenAIRpcRequest llmGetStopTokens */
        llmGetStopTokens?: (LLM_Get_Stop_Tokens_Request.$Properties|null);

        /** GenAIRpcRequest llmGetContextUsageSize */
        llmGetContextUsageSize?: (LLM_Get_Context_Usage_Size_Request.$Properties|null);

        /** GenAIRpcRequest llmGetMaxContextCapacity */
        llmGetMaxContextCapacity?: (LLM_Get_Max_Context_Capacity_Request.$Properties|null);

        /** GenAIRpcRequest vlmCreate */
        vlmCreate?: (VLM_Create_Request.$Properties|null);

        /** GenAIRpcRequest vlmGeneratorGenerate */
        vlmGeneratorGenerate?: (VLM_Generator_Generate_Request.$Properties|null);

        /** GenAIRpcRequest genaiCheckHefExists */
        genaiCheckHefExists?: (GenAI_Check_Hef_Exists_Request.$Properties|null);

        /** GenAIRpcRequest speech2textCreate */
        speech2textCreate?: (Speech2Text_Create_Request.$Properties|null);

        /** GenAIRpcRequest speech2textGenerate */
        speech2textGenerate?: (Speech2Text_Generate_Request.$Properties|null);

        /** GenAIRpcRequest speech2textRelease */
        speech2textRelease?: (Speech2Text_Release_Request.$Properties|null);

        /** GenAIRpcRequest speech2textTokenize */
        speech2textTokenize?: (Speech2Text_Tokenize_Request.$Properties|null);

        /** GenAIRpcRequest request */
        request?: ("llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize");

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Narrowed shape of a GenAIRpcRequest. */
    type $Shape = {
      llmCreate?: LLM_Create_Request.$Shape|null;
      llmGetGeneratorParams?: LLM_Get_Generator_Params_Request.$Shape|null;
      llmGeneratorCreate?: LLM_Generator_Create_Request.$Shape|null;
      llmGeneratorWrite?: LLM_Generator_Write_Request.$Shape|null;
      llmGeneratorGenerate?: LLM_Generator_Generate_Request.$Shape|null;
      llmGeneratorRead?: LLM_Generator_Read_Request.$Shape|null;
      llmGeneratorAbort?: LLM_Generator_Abort_Request.$Shape|null;
      llmGeneratorRelease?: LLM_Generator_Release_Request.$Shape|null;
      llmTokenize?: LLM_Tokenize_Request.$Shape|null;
      llmGetContext?: LLM_Get_Context_Request.$Shape|null;
      llmSetContext?: LLM_Set_Context_Request.$Shape|null;
      llmClearContext?: LLM_Clear_Context_Request.$Shape|null;
      llmSetEndOfGenerationSequence?: LLM_Set_End_Of_Generation_Sequence_Request.$Shape|null;
      llmGetEndOfGenerationSequence?: LLM_Get_End_Of_Generation_Sequence_Request.$Shape|null;
      llmRelease?: LLM_Release_Request.$Shape|null;
      llmSetStopTokens?: LLM_Set_Stop_Tokens_Request.$Shape|null;
      llmGetStopTokens?: LLM_Get_Stop_Tokens_Request.$Shape|null;
      llmGetContextUsageSize?: LLM_Get_Context_Usage_Size_Request.$Shape|null;
      llmGetMaxContextCapacity?: LLM_Get_Max_Context_Capacity_Request.$Shape|null;
      vlmCreate?: VLM_Create_Request.$Shape|null;
      vlmGeneratorGenerate?: VLM_Generator_Generate_Request.$Shape|null;
      genaiCheckHefExists?: GenAI_Check_Hef_Exists_Request.$Shape|null;
      speech2textCreate?: Speech2Text_Create_Request.$Shape|null;
      speech2textGenerate?: Speech2Text_Generate_Request.$Shape|null;
      speech2textRelease?: Speech2Text_Release_Request.$Shape|null;
      speech2textTokenize?: Speech2Text_Tokenize_Request.$Shape|null;
      $unknowns?: Uint8Array[];
    } & (
      ({ request?: undefined; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmCreate"; llmCreate: LLM_Create_Request.$Shape; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetGeneratorParams"; llmCreate?: null; llmGetGeneratorParams: LLM_Get_Generator_Params_Request.$Shape; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate: LLM_Generator_Create_Request.$Shape; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorWrite"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite: LLM_Generator_Write_Request.$Shape; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate: LLM_Generator_Generate_Request.$Shape; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorRead"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead: LLM_Generator_Read_Request.$Shape; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorAbort"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort: LLM_Generator_Abort_Request.$Shape; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease: LLM_Generator_Release_Request.$Shape; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmTokenize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize: LLM_Tokenize_Request.$Shape; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext: LLM_Get_Context_Request.$Shape; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmSetContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext: LLM_Set_Context_Request.$Shape; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmClearContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext: LLM_Clear_Context_Request.$Shape; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmSetEndOfGenerationSequence"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence: LLM_Set_End_Of_Generation_Sequence_Request.$Shape; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetEndOfGenerationSequence"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence: LLM_Get_End_Of_Generation_Sequence_Request.$Shape; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease: LLM_Release_Request.$Shape; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmSetStopTokens"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens: LLM_Set_Stop_Tokens_Request.$Shape; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetStopTokens"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens: LLM_Get_Stop_Tokens_Request.$Shape; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetContextUsageSize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize: LLM_Get_Context_Usage_Size_Request.$Shape; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetMaxContextCapacity"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity: LLM_Get_Max_Context_Capacity_Request.$Shape; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "vlmCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate: VLM_Create_Request.$Shape; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "vlmGeneratorGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate: VLM_Generator_Generate_Request.$Shape; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "genaiCheckHefExists"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists: GenAI_Check_Hef_Exists_Request.$Shape; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "speech2textCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate: Speech2Text_Create_Request.$Shape; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "speech2textGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate: Speech2Text_Generate_Request.$Shape; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "speech2textRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease: Speech2Text_Release_Request.$Shape; speech2textTokenize?: null }|{ request?: "speech2textTokenize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize: Speech2Text_Tokenize_Request.$Shape })
    );
}

/**
 * Properties of a GenAIRpcReply.
 * @deprecated Use GenAIRpcReply.$Properties instead.
 */
export interface IGenAIRpcReply extends GenAIRpcReply.$Properties {
}

/** Represents a GenAIRpcReply. */
export class GenAIRpcReply {

    /**
     * Constructs a new GenAIRpcReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: GenAIRpcReply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** GenAIRpcReply llmCreate. */
    llmCreate?: (LLM_Create_Reply.$Properties|null);

    /** GenAIRpcReply llmGetGeneratorParams. */
    llmGetGeneratorParams?: (LLM_Get_Generator_Params_Reply.$Properties|null);

    /** GenAIRpcReply llmGeneratorCreate. */
    llmGeneratorCreate?: (LLM_Generator_Create_Reply.$Properties|null);

    /** GenAIRpcReply llmGeneratorWrite. */
    llmGeneratorWrite?: (LLM_Generator_Write_Reply.$Properties|null);

    /** GenAIRpcReply llmGeneratorGenerate. */
    llmGeneratorGenerate?: (LLM_Generator_Generate_Reply.$Properties|null);

    /** GenAIRpcReply llmGeneratorRead. */
    llmGeneratorRead?: (LLM_Generator_Read_Reply.$Properties|null);

    /** GenAIRpcReply llmGeneratorAbort. */
    llmGeneratorAbort?: (LLM_Generator_Abort_Reply.$Properties|null);

    /** GenAIRpcReply llmGeneratorRelease. */
    llmGeneratorRelease?: (LLM_Generator_Release_Reply.$Properties|null);

    /** GenAIRpcReply llmTokenize. */
    llmTokenize?: (LLM_Tokenize_Reply.$Properties|null);

    /** GenAIRpcReply llmGetContext. */
    llmGetContext?: (LLM_Get_Context_Reply.$Properties|null);

    /** GenAIRpcReply llmSetContext. */
    llmSetContext?: (LLM_Set_Context_Reply.$Properties|null);

    /** GenAIRpcReply llmClearContext. */
    llmClearContext?: (LLM_Clear_Context_Reply.$Properties|null);

    /** GenAIRpcReply llmSetEndOfGenerationSequence. */
    llmSetEndOfGenerationSequence?: (LLM_Set_End_Of_Generation_Sequence_Reply.$Properties|null);

    /** GenAIRpcReply llmGetEndOfGenerationSequence. */
    llmGetEndOfGenerationSequence?: (LLM_Get_End_Of_Generation_Sequence_Reply.$Properties|null);

    /** GenAIRpcReply llmRelease. */
    llmRelease?: (LLM_Release_Reply.$Properties|null);

    /** GenAIRpcReply llmSetStopTokens. */
    llmSetStopTokens?: (LLM_Set_Stop_Tokens_Reply.$Properties|null);

    /** GenAIRpcReply llmGetStopTokens. */
    llmGetStopTokens?: (LLM_Get_Stop_Tokens_Reply.$Properties|null);

    /** GenAIRpcReply llmGetContextUsageSize. */
    llmGetContextUsageSize?: (LLM_Get_Context_Usage_Size_Reply.$Properties|null);

    /** GenAIRpcReply llmGetMaxContextCapacity. */
    llmGetMaxContextCapacity?: (LLM_Get_Max_Context_Capacity_Reply.$Properties|null);

    /** GenAIRpcReply vlmCreate. */
    vlmCreate?: (VLM_Create_Reply.$Properties|null);

    /** GenAIRpcReply vlmGeneratorGenerate. */
    vlmGeneratorGenerate?: (VLM_Generator_Generate_Reply.$Properties|null);

    /** GenAIRpcReply genaiCheckHefExists. */
    genaiCheckHefExists?: (GenAI_Check_Hef_Exists_Reply.$Properties|null);

    /** GenAIRpcReply speech2textCreate. */
    speech2textCreate?: (Speech2Text_Create_Reply.$Properties|null);

    /** GenAIRpcReply speech2textGenerate. */
    speech2textGenerate?: (Speech2Text_Generate_Reply.$Properties|null);

    /** GenAIRpcReply speech2textRelease. */
    speech2textRelease?: (Speech2Text_Release_Reply.$Properties|null);

    /** GenAIRpcReply speech2textTokenize. */
    speech2textTokenize?: (Speech2Text_Tokenize_Reply.$Properties|null);

    /** GenAIRpcReply reply. */
    reply?: ("llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize");

    /**
     * Creates a new GenAIRpcReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenAIRpcReply instance
     */
    static create(properties: GenAIRpcReply.$Shape): GenAIRpcReply & GenAIRpcReply.$Shape;
    static create(properties?: GenAIRpcReply.$Properties): GenAIRpcReply;

    /**
     * Encodes the specified GenAIRpcReply message. Does not implicitly {@link GenAIRpcReply.verify|verify} messages.
     * @param message GenAIRpcReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: GenAIRpcReply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenAIRpcReply message, length delimited. Does not implicitly {@link GenAIRpcReply.verify|verify} messages.
     * @param message GenAIRpcReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: GenAIRpcReply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenAIRpcReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {GenAIRpcReply & GenAIRpcReply.$Shape} GenAIRpcReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenAIRpcReply & GenAIRpcReply.$Shape;

    /**
     * Decodes a GenAIRpcReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {GenAIRpcReply & GenAIRpcReply.$Shape} GenAIRpcReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenAIRpcReply & GenAIRpcReply.$Shape;

    /**
     * Verifies a GenAIRpcReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenAIRpcReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenAIRpcReply
     */
    static fromObject(object: { [k: string]: any }): GenAIRpcReply;

    /**
     * Creates a plain object from a GenAIRpcReply message. Also converts values to other types if specified.
     * @param message GenAIRpcReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: GenAIRpcReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenAIRpcReply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for GenAIRpcReply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace GenAIRpcReply {

    /** Properties of a GenAIRpcReply. */
    interface $Properties {

        /** GenAIRpcReply llmCreate */
        llmCreate?: (LLM_Create_Reply.$Properties|null);

        /** GenAIRpcReply llmGetGeneratorParams */
        llmGetGeneratorParams?: (LLM_Get_Generator_Params_Reply.$Properties|null);

        /** GenAIRpcReply llmGeneratorCreate */
        llmGeneratorCreate?: (LLM_Generator_Create_Reply.$Properties|null);

        /** GenAIRpcReply llmGeneratorWrite */
        llmGeneratorWrite?: (LLM_Generator_Write_Reply.$Properties|null);

        /** GenAIRpcReply llmGeneratorGenerate */
        llmGeneratorGenerate?: (LLM_Generator_Generate_Reply.$Properties|null);

        /** GenAIRpcReply llmGeneratorRead */
        llmGeneratorRead?: (LLM_Generator_Read_Reply.$Properties|null);

        /** GenAIRpcReply llmGeneratorAbort */
        llmGeneratorAbort?: (LLM_Generator_Abort_Reply.$Properties|null);

        /** GenAIRpcReply llmGeneratorRelease */
        llmGeneratorRelease?: (LLM_Generator_Release_Reply.$Properties|null);

        /** GenAIRpcReply llmTokenize */
        llmTokenize?: (LLM_Tokenize_Reply.$Properties|null);

        /** GenAIRpcReply llmGetContext */
        llmGetContext?: (LLM_Get_Context_Reply.$Properties|null);

        /** GenAIRpcReply llmSetContext */
        llmSetContext?: (LLM_Set_Context_Reply.$Properties|null);

        /** GenAIRpcReply llmClearContext */
        llmClearContext?: (LLM_Clear_Context_Reply.$Properties|null);

        /** GenAIRpcReply llmSetEndOfGenerationSequence */
        llmSetEndOfGenerationSequence?: (LLM_Set_End_Of_Generation_Sequence_Reply.$Properties|null);

        /** GenAIRpcReply llmGetEndOfGenerationSequence */
        llmGetEndOfGenerationSequence?: (LLM_Get_End_Of_Generation_Sequence_Reply.$Properties|null);

        /** GenAIRpcReply llmRelease */
        llmRelease?: (LLM_Release_Reply.$Properties|null);

        /** GenAIRpcReply llmSetStopTokens */
        llmSetStopTokens?: (LLM_Set_Stop_Tokens_Reply.$Properties|null);

        /** GenAIRpcReply llmGetStopTokens */
        llmGetStopTokens?: (LLM_Get_Stop_Tokens_Reply.$Properties|null);

        /** GenAIRpcReply llmGetContextUsageSize */
        llmGetContextUsageSize?: (LLM_Get_Context_Usage_Size_Reply.$Properties|null);

        /** GenAIRpcReply llmGetMaxContextCapacity */
        llmGetMaxContextCapacity?: (LLM_Get_Max_Context_Capacity_Reply.$Properties|null);

        /** GenAIRpcReply vlmCreate */
        vlmCreate?: (VLM_Create_Reply.$Properties|null);

        /** GenAIRpcReply vlmGeneratorGenerate */
        vlmGeneratorGenerate?: (VLM_Generator_Generate_Reply.$Properties|null);

        /** GenAIRpcReply genaiCheckHefExists */
        genaiCheckHefExists?: (GenAI_Check_Hef_Exists_Reply.$Properties|null);

        /** GenAIRpcReply speech2textCreate */
        speech2textCreate?: (Speech2Text_Create_Reply.$Properties|null);

        /** GenAIRpcReply speech2textGenerate */
        speech2textGenerate?: (Speech2Text_Generate_Reply.$Properties|null);

        /** GenAIRpcReply speech2textRelease */
        speech2textRelease?: (Speech2Text_Release_Reply.$Properties|null);

        /** GenAIRpcReply speech2textTokenize */
        speech2textTokenize?: (Speech2Text_Tokenize_Reply.$Properties|null);

        /** GenAIRpcReply reply */
        reply?: ("llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize");

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Narrowed shape of a GenAIRpcReply. */
    type $Shape = {
      llmCreate?: LLM_Create_Reply.$Shape|null;
      llmGetGeneratorParams?: LLM_Get_Generator_Params_Reply.$Shape|null;
      llmGeneratorCreate?: LLM_Generator_Create_Reply.$Shape|null;
      llmGeneratorWrite?: LLM_Generator_Write_Reply.$Shape|null;
      llmGeneratorGenerate?: LLM_Generator_Generate_Reply.$Shape|null;
      llmGeneratorRead?: LLM_Generator_Read_Reply.$Shape|null;
      llmGeneratorAbort?: LLM_Generator_Abort_Reply.$Shape|null;
      llmGeneratorRelease?: LLM_Generator_Release_Reply.$Shape|null;
      llmTokenize?: LLM_Tokenize_Reply.$Shape|null;
      llmGetContext?: LLM_Get_Context_Reply.$Shape|null;
      llmSetContext?: LLM_Set_Context_Reply.$Shape|null;
      llmClearContext?: LLM_Clear_Context_Reply.$Shape|null;
      llmSetEndOfGenerationSequence?: LLM_Set_End_Of_Generation_Sequence_Reply.$Shape|null;
      llmGetEndOfGenerationSequence?: LLM_Get_End_Of_Generation_Sequence_Reply.$Shape|null;
      llmRelease?: LLM_Release_Reply.$Shape|null;
      llmSetStopTokens?: LLM_Set_Stop_Tokens_Reply.$Shape|null;
      llmGetStopTokens?: LLM_Get_Stop_Tokens_Reply.$Shape|null;
      llmGetContextUsageSize?: LLM_Get_Context_Usage_Size_Reply.$Shape|null;
      llmGetMaxContextCapacity?: LLM_Get_Max_Context_Capacity_Reply.$Shape|null;
      vlmCreate?: VLM_Create_Reply.$Shape|null;
      vlmGeneratorGenerate?: VLM_Generator_Generate_Reply.$Shape|null;
      genaiCheckHefExists?: GenAI_Check_Hef_Exists_Reply.$Shape|null;
      speech2textCreate?: Speech2Text_Create_Reply.$Shape|null;
      speech2textGenerate?: Speech2Text_Generate_Reply.$Shape|null;
      speech2textRelease?: Speech2Text_Release_Reply.$Shape|null;
      speech2textTokenize?: Speech2Text_Tokenize_Reply.$Shape|null;
      $unknowns?: Uint8Array[];
    } & (
      ({ reply?: undefined; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmCreate"; llmCreate: LLM_Create_Reply.$Shape; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetGeneratorParams"; llmCreate?: null; llmGetGeneratorParams: LLM_Get_Generator_Params_Reply.$Shape; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate: LLM_Generator_Create_Reply.$Shape; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorWrite"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite: LLM_Generator_Write_Reply.$Shape; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate: LLM_Generator_Generate_Reply.$Shape; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorRead"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead: LLM_Generator_Read_Reply.$Shape; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorAbort"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort: LLM_Generator_Abort_Reply.$Shape; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease: LLM_Generator_Release_Reply.$Shape; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmTokenize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize: LLM_Tokenize_Reply.$Shape; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext: LLM_Get_Context_Reply.$Shape; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmSetContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext: LLM_Set_Context_Reply.$Shape; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmClearContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext: LLM_Clear_Context_Reply.$Shape; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmSetEndOfGenerationSequence"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence: LLM_Set_End_Of_Generation_Sequence_Reply.$Shape; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetEndOfGenerationSequence"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence: LLM_Get_End_Of_Generation_Sequence_Reply.$Shape; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease: LLM_Release_Reply.$Shape; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmSetStopTokens"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens: LLM_Set_Stop_Tokens_Reply.$Shape; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetStopTokens"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens: LLM_Get_Stop_Tokens_Reply.$Shape; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetContextUsageSize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize: LLM_Get_Context_Usage_Size_Reply.$Shape; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetMaxContextCapacity"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity: LLM_Get_Max_Context_Capacity_Reply.$Shape; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "vlmCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate: VLM_Create_Reply.$Shape; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "vlmGeneratorGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate: VLM_Generator_Generate_Reply.$Shape; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "genaiCheckHefExists"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists: GenAI_Check_Hef_Exists_Reply.$Shape; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "speech2textCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate: Speech2Text_Create_Reply.$Shape; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "speech2textGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate: Speech2Text_Generate_Reply.$Shape; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "speech2textRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease: Speech2Text_Release_Reply.$Shape; speech2textTokenize?: null }|{ reply?: "speech2textTokenize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize: Speech2Text_Tokenize_Reply.$Shape })
    );
}

/**
 * Properties of a HefChunkInfo.
 * @deprecated Use HefChunkInfo.$Properties instead.
 */
export interface IHefChunkInfo extends HefChunkInfo.$Properties {
}

/** Represents a HefChunkInfo. */
export class HefChunkInfo {

    /**
     * Constructs a new HefChunkInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: HefChunkInfo.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** HefChunkInfo name. */
    name: string;

    /** HefChunkInfo size. */
    size: (number|Long);

    /** HefChunkInfo offset. */
    offset: (number|Long);

    /**
     * Creates a new HefChunkInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HefChunkInfo instance
     */
    static create(properties: HefChunkInfo.$Shape): HefChunkInfo & HefChunkInfo.$Shape;
    static create(properties?: HefChunkInfo.$Properties): HefChunkInfo;

    /**
     * Encodes the specified HefChunkInfo message. Does not implicitly {@link HefChunkInfo.verify|verify} messages.
     * @param message HefChunkInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: HefChunkInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HefChunkInfo message, length delimited. Does not implicitly {@link HefChunkInfo.verify|verify} messages.
     * @param message HefChunkInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: HefChunkInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HefChunkInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {HefChunkInfo & HefChunkInfo.$Shape} HefChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HefChunkInfo & HefChunkInfo.$Shape;

    /**
     * Decodes a HefChunkInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {HefChunkInfo & HefChunkInfo.$Shape} HefChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HefChunkInfo & HefChunkInfo.$Shape;

    /**
     * Verifies a HefChunkInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HefChunkInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HefChunkInfo
     */
    static fromObject(object: { [k: string]: any }): HefChunkInfo;

    /**
     * Creates a plain object from a HefChunkInfo message. Also converts values to other types if specified.
     * @param message HefChunkInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: HefChunkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HefChunkInfo to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for HefChunkInfo
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace HefChunkInfo {

    /** Properties of a HefChunkInfo. */
    interface $Properties {

        /** HefChunkInfo name */
        name?: (string|null);

        /** HefChunkInfo size */
        size?: (number|Long|null);

        /** HefChunkInfo offset */
        offset?: (number|Long|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a HefChunkInfo. */
    type $Shape = HefChunkInfo.$Properties;
}

/**
 * Properties of a LLM_Create_Request.
 * @deprecated Use LLM_Create_Request.$Properties instead.
 */
export interface ILLM_Create_Request extends LLM_Create_Request.$Properties {
}

/** Represents a LLM_Create_Request. */
export class LLM_Create_Request {

    /**
     * Constructs a new LLM_Create_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Create_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Create_Request loraName. */
    loraName: string;

    /** LLM_Create_Request hefPath. */
    hefPath: string;

    /** LLM_Create_Request groupId. */
    groupId: string;

    /** LLM_Create_Request chunksToTransfer. */
    chunksToTransfer: HefChunkInfo.$Properties[];

    /** LLM_Create_Request tokenizerOnHost. */
    tokenizerOnHost: boolean;

    /** LLM_Create_Request totalHefSize. */
    totalHefSize: (number|Long);

    /**
     * Creates a new LLM_Create_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Create_Request instance
     */
    static create(properties: LLM_Create_Request.$Shape): LLM_Create_Request & LLM_Create_Request.$Shape;
    static create(properties?: LLM_Create_Request.$Properties): LLM_Create_Request;

    /**
     * Encodes the specified LLM_Create_Request message. Does not implicitly {@link LLM_Create_Request.verify|verify} messages.
     * @param message LLM_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Create_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Create_Request message, length delimited. Does not implicitly {@link LLM_Create_Request.verify|verify} messages.
     * @param message LLM_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Create_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Create_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Create_Request & LLM_Create_Request.$Shape} LLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Create_Request & LLM_Create_Request.$Shape;

    /**
     * Decodes a LLM_Create_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Create_Request & LLM_Create_Request.$Shape} LLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Create_Request & LLM_Create_Request.$Shape;

    /**
     * Verifies a LLM_Create_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Create_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Create_Request;

    /**
     * Creates a plain object from a LLM_Create_Request message. Also converts values to other types if specified.
     * @param message LLM_Create_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Create_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Create_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Create_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Create_Request {

    /** Properties of a LLM_Create_Request. */
    interface $Properties {

        /** LLM_Create_Request loraName */
        loraName?: (string|null);

        /** LLM_Create_Request hefPath */
        hefPath?: (string|null);

        /** LLM_Create_Request groupId */
        groupId?: (string|null);

        /** LLM_Create_Request chunksToTransfer */
        chunksToTransfer?: (HefChunkInfo.$Properties[]|null);

        /** LLM_Create_Request tokenizerOnHost */
        tokenizerOnHost?: (boolean|null);

        /** LLM_Create_Request totalHefSize */
        totalHefSize?: (number|Long|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Create_Request. */
    type $Shape = LLM_Create_Request.$Properties;
}

/**
 * Properties of a LLM_Create_Reply.
 * @deprecated Use LLM_Create_Reply.$Properties instead.
 */
export interface ILLM_Create_Reply extends LLM_Create_Reply.$Properties {
}

/** Represents a LLM_Create_Reply. */
export class LLM_Create_Reply {

    /**
     * Constructs a new LLM_Create_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Create_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Create_Reply status. */
    status: number;

    /** LLM_Create_Reply promptTemplate. */
    promptTemplate: string;

    /** LLM_Create_Reply embeddingFeatures. */
    embeddingFeatures: number;

    /**
     * Creates a new LLM_Create_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Create_Reply instance
     */
    static create(properties: LLM_Create_Reply.$Shape): LLM_Create_Reply & LLM_Create_Reply.$Shape;
    static create(properties?: LLM_Create_Reply.$Properties): LLM_Create_Reply;

    /**
     * Encodes the specified LLM_Create_Reply message. Does not implicitly {@link LLM_Create_Reply.verify|verify} messages.
     * @param message LLM_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Create_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Create_Reply message, length delimited. Does not implicitly {@link LLM_Create_Reply.verify|verify} messages.
     * @param message LLM_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Create_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Create_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Create_Reply & LLM_Create_Reply.$Shape} LLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Create_Reply & LLM_Create_Reply.$Shape;

    /**
     * Decodes a LLM_Create_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Create_Reply & LLM_Create_Reply.$Shape} LLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Create_Reply & LLM_Create_Reply.$Shape;

    /**
     * Verifies a LLM_Create_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Create_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Create_Reply;

    /**
     * Creates a plain object from a LLM_Create_Reply message. Also converts values to other types if specified.
     * @param message LLM_Create_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Create_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Create_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Create_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Create_Reply {

    /** Properties of a LLM_Create_Reply. */
    interface $Properties {

        /** LLM_Create_Reply status */
        status?: (number|null);

        /** LLM_Create_Reply promptTemplate */
        promptTemplate?: (string|null);

        /** LLM_Create_Reply embeddingFeatures */
        embeddingFeatures?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Create_Reply. */
    type $Shape = LLM_Create_Reply.$Properties;
}

/**
 * Properties of a LLM_Get_Generator_Params_Request.
 * @deprecated Use LLM_Get_Generator_Params_Request.$Properties instead.
 */
export interface ILLM_Get_Generator_Params_Request extends LLM_Get_Generator_Params_Request.$Properties {
}

/** Represents a LLM_Get_Generator_Params_Request. */
export class LLM_Get_Generator_Params_Request {

    /**
     * Constructs a new LLM_Get_Generator_Params_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Generator_Params_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Get_Generator_Params_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Generator_Params_Request instance
     */
    static create(properties: LLM_Get_Generator_Params_Request.$Shape): LLM_Get_Generator_Params_Request & LLM_Get_Generator_Params_Request.$Shape;
    static create(properties?: LLM_Get_Generator_Params_Request.$Properties): LLM_Get_Generator_Params_Request;

    /**
     * Encodes the specified LLM_Get_Generator_Params_Request message. Does not implicitly {@link LLM_Get_Generator_Params_Request.verify|verify} messages.
     * @param message LLM_Get_Generator_Params_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Generator_Params_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Generator_Params_Request message, length delimited. Does not implicitly {@link LLM_Get_Generator_Params_Request.verify|verify} messages.
     * @param message LLM_Get_Generator_Params_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Generator_Params_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Generator_Params_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Generator_Params_Request & LLM_Get_Generator_Params_Request.$Shape} LLM_Get_Generator_Params_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Generator_Params_Request & LLM_Get_Generator_Params_Request.$Shape;

    /**
     * Decodes a LLM_Get_Generator_Params_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Generator_Params_Request & LLM_Get_Generator_Params_Request.$Shape} LLM_Get_Generator_Params_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Generator_Params_Request & LLM_Get_Generator_Params_Request.$Shape;

    /**
     * Verifies a LLM_Get_Generator_Params_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Generator_Params_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Generator_Params_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Generator_Params_Request;

    /**
     * Creates a plain object from a LLM_Get_Generator_Params_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Generator_Params_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Generator_Params_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Generator_Params_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Generator_Params_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Generator_Params_Request {

    /** Properties of a LLM_Get_Generator_Params_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Generator_Params_Request. */
    type $Shape = LLM_Get_Generator_Params_Request.$Properties;
}

/**
 * Properties of a LLMGeneratorParams.
 * @deprecated Use LLMGeneratorParams.$Properties instead.
 */
export interface ILLMGeneratorParams extends LLMGeneratorParams.$Properties {
}

/** Represents a LLMGeneratorParams. */
export class LLMGeneratorParams {

    /**
     * Constructs a new LLMGeneratorParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLMGeneratorParams.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLMGeneratorParams temperature. */
    temperature: number;

    /** LLMGeneratorParams topP. */
    topP: number;

    /** LLMGeneratorParams topK. */
    topK: number;

    /** LLMGeneratorParams frequencyPenalty. */
    frequencyPenalty: number;

    /** LLMGeneratorParams maxGeneratedTokens. */
    maxGeneratedTokens: number;

    /** LLMGeneratorParams doSample. */
    doSample: boolean;

    /** LLMGeneratorParams seed. */
    seed: number;

    /**
     * Creates a new LLMGeneratorParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLMGeneratorParams instance
     */
    static create(properties: LLMGeneratorParams.$Shape): LLMGeneratorParams & LLMGeneratorParams.$Shape;
    static create(properties?: LLMGeneratorParams.$Properties): LLMGeneratorParams;

    /**
     * Encodes the specified LLMGeneratorParams message. Does not implicitly {@link LLMGeneratorParams.verify|verify} messages.
     * @param message LLMGeneratorParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLMGeneratorParams.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLMGeneratorParams message, length delimited. Does not implicitly {@link LLMGeneratorParams.verify|verify} messages.
     * @param message LLMGeneratorParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLMGeneratorParams.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLMGeneratorParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLMGeneratorParams & LLMGeneratorParams.$Shape} LLMGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLMGeneratorParams & LLMGeneratorParams.$Shape;

    /**
     * Decodes a LLMGeneratorParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLMGeneratorParams & LLMGeneratorParams.$Shape} LLMGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLMGeneratorParams & LLMGeneratorParams.$Shape;

    /**
     * Verifies a LLMGeneratorParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLMGeneratorParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLMGeneratorParams
     */
    static fromObject(object: { [k: string]: any }): LLMGeneratorParams;

    /**
     * Creates a plain object from a LLMGeneratorParams message. Also converts values to other types if specified.
     * @param message LLMGeneratorParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLMGeneratorParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLMGeneratorParams to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLMGeneratorParams
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLMGeneratorParams {

    /** Properties of a LLMGeneratorParams. */
    interface $Properties {

        /** LLMGeneratorParams temperature */
        temperature?: (number|null);

        /** LLMGeneratorParams topP */
        topP?: (number|null);

        /** LLMGeneratorParams topK */
        topK?: (number|null);

        /** LLMGeneratorParams frequencyPenalty */
        frequencyPenalty?: (number|null);

        /** LLMGeneratorParams maxGeneratedTokens */
        maxGeneratedTokens?: (number|null);

        /** LLMGeneratorParams doSample */
        doSample?: (boolean|null);

        /** LLMGeneratorParams seed */
        seed?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLMGeneratorParams. */
    type $Shape = LLMGeneratorParams.$Properties;
}

/**
 * Properties of a LLM_Get_Generator_Params_Reply.
 * @deprecated Use LLM_Get_Generator_Params_Reply.$Properties instead.
 */
export interface ILLM_Get_Generator_Params_Reply extends LLM_Get_Generator_Params_Reply.$Properties {
}

/** Represents a LLM_Get_Generator_Params_Reply. */
export class LLM_Get_Generator_Params_Reply {

    /**
     * Constructs a new LLM_Get_Generator_Params_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Generator_Params_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Get_Generator_Params_Reply generatorParams. */
    generatorParams?: (LLMGeneratorParams.$Properties|null);

    /** LLM_Get_Generator_Params_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Get_Generator_Params_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Generator_Params_Reply instance
     */
    static create(properties: LLM_Get_Generator_Params_Reply.$Shape): LLM_Get_Generator_Params_Reply & LLM_Get_Generator_Params_Reply.$Shape;
    static create(properties?: LLM_Get_Generator_Params_Reply.$Properties): LLM_Get_Generator_Params_Reply;

    /**
     * Encodes the specified LLM_Get_Generator_Params_Reply message. Does not implicitly {@link LLM_Get_Generator_Params_Reply.verify|verify} messages.
     * @param message LLM_Get_Generator_Params_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Generator_Params_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Generator_Params_Reply message, length delimited. Does not implicitly {@link LLM_Get_Generator_Params_Reply.verify|verify} messages.
     * @param message LLM_Get_Generator_Params_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Generator_Params_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Generator_Params_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Generator_Params_Reply & LLM_Get_Generator_Params_Reply.$Shape} LLM_Get_Generator_Params_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Generator_Params_Reply & LLM_Get_Generator_Params_Reply.$Shape;

    /**
     * Decodes a LLM_Get_Generator_Params_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Generator_Params_Reply & LLM_Get_Generator_Params_Reply.$Shape} LLM_Get_Generator_Params_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Generator_Params_Reply & LLM_Get_Generator_Params_Reply.$Shape;

    /**
     * Verifies a LLM_Get_Generator_Params_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Generator_Params_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Generator_Params_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Generator_Params_Reply;

    /**
     * Creates a plain object from a LLM_Get_Generator_Params_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Generator_Params_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Generator_Params_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Generator_Params_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Generator_Params_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Generator_Params_Reply {

    /** Properties of a LLM_Get_Generator_Params_Reply. */
    interface $Properties {

        /** LLM_Get_Generator_Params_Reply generatorParams */
        generatorParams?: (LLMGeneratorParams.$Properties|null);

        /** LLM_Get_Generator_Params_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Generator_Params_Reply. */
    type $Shape = LLM_Get_Generator_Params_Reply.$Properties;
}

/**
 * Properties of a LLM_Generator_Create_Request.
 * @deprecated Use LLM_Generator_Create_Request.$Properties instead.
 */
export interface ILLM_Generator_Create_Request extends LLM_Generator_Create_Request.$Properties {
}

/** Represents a LLM_Generator_Create_Request. */
export class LLM_Generator_Create_Request {

    /**
     * Constructs a new LLM_Generator_Create_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Create_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Generator_Create_Request generatorParams. */
    generatorParams?: (LLMGeneratorParams.$Properties|null);

    /**
     * Creates a new LLM_Generator_Create_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Create_Request instance
     */
    static create(properties: LLM_Generator_Create_Request.$Shape): LLM_Generator_Create_Request & LLM_Generator_Create_Request.$Shape;
    static create(properties?: LLM_Generator_Create_Request.$Properties): LLM_Generator_Create_Request;

    /**
     * Encodes the specified LLM_Generator_Create_Request message. Does not implicitly {@link LLM_Generator_Create_Request.verify|verify} messages.
     * @param message LLM_Generator_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Create_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Create_Request message, length delimited. Does not implicitly {@link LLM_Generator_Create_Request.verify|verify} messages.
     * @param message LLM_Generator_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Create_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Create_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Create_Request & LLM_Generator_Create_Request.$Shape} LLM_Generator_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Create_Request & LLM_Generator_Create_Request.$Shape;

    /**
     * Decodes a LLM_Generator_Create_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Create_Request & LLM_Generator_Create_Request.$Shape} LLM_Generator_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Create_Request & LLM_Generator_Create_Request.$Shape;

    /**
     * Verifies a LLM_Generator_Create_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Create_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Create_Request;

    /**
     * Creates a plain object from a LLM_Generator_Create_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Create_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Create_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Create_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Create_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Create_Request {

    /** Properties of a LLM_Generator_Create_Request. */
    interface $Properties {

        /** LLM_Generator_Create_Request generatorParams */
        generatorParams?: (LLMGeneratorParams.$Properties|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Create_Request. */
    type $Shape = LLM_Generator_Create_Request.$Properties;
}

/**
 * Properties of a LLM_Generator_Create_Reply.
 * @deprecated Use LLM_Generator_Create_Reply.$Properties instead.
 */
export interface ILLM_Generator_Create_Reply extends LLM_Generator_Create_Reply.$Properties {
}

/** Represents a LLM_Generator_Create_Reply. */
export class LLM_Generator_Create_Reply {

    /**
     * Constructs a new LLM_Generator_Create_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Create_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Generator_Create_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Generator_Create_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Create_Reply instance
     */
    static create(properties: LLM_Generator_Create_Reply.$Shape): LLM_Generator_Create_Reply & LLM_Generator_Create_Reply.$Shape;
    static create(properties?: LLM_Generator_Create_Reply.$Properties): LLM_Generator_Create_Reply;

    /**
     * Encodes the specified LLM_Generator_Create_Reply message. Does not implicitly {@link LLM_Generator_Create_Reply.verify|verify} messages.
     * @param message LLM_Generator_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Create_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Create_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Create_Reply.verify|verify} messages.
     * @param message LLM_Generator_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Create_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Create_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Create_Reply & LLM_Generator_Create_Reply.$Shape} LLM_Generator_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Create_Reply & LLM_Generator_Create_Reply.$Shape;

    /**
     * Decodes a LLM_Generator_Create_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Create_Reply & LLM_Generator_Create_Reply.$Shape} LLM_Generator_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Create_Reply & LLM_Generator_Create_Reply.$Shape;

    /**
     * Verifies a LLM_Generator_Create_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Create_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Create_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Create_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Create_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Create_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Create_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Create_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Create_Reply {

    /** Properties of a LLM_Generator_Create_Reply. */
    interface $Properties {

        /** LLM_Generator_Create_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Create_Reply. */
    type $Shape = LLM_Generator_Create_Reply.$Properties;
}

/**
 * Properties of a LLM_Generator_Write_Request.
 * @deprecated Use LLM_Generator_Write_Request.$Properties instead.
 */
export interface ILLM_Generator_Write_Request extends LLM_Generator_Write_Request.$Properties {
}

/** Represents a LLM_Generator_Write_Request. */
export class LLM_Generator_Write_Request {

    /**
     * Constructs a new LLM_Generator_Write_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Write_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Generator_Write_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Write_Request instance
     */
    static create(properties: LLM_Generator_Write_Request.$Shape): LLM_Generator_Write_Request & LLM_Generator_Write_Request.$Shape;
    static create(properties?: LLM_Generator_Write_Request.$Properties): LLM_Generator_Write_Request;

    /**
     * Encodes the specified LLM_Generator_Write_Request message. Does not implicitly {@link LLM_Generator_Write_Request.verify|verify} messages.
     * @param message LLM_Generator_Write_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Write_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Write_Request message, length delimited. Does not implicitly {@link LLM_Generator_Write_Request.verify|verify} messages.
     * @param message LLM_Generator_Write_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Write_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Write_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Write_Request & LLM_Generator_Write_Request.$Shape} LLM_Generator_Write_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Write_Request & LLM_Generator_Write_Request.$Shape;

    /**
     * Decodes a LLM_Generator_Write_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Write_Request & LLM_Generator_Write_Request.$Shape} LLM_Generator_Write_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Write_Request & LLM_Generator_Write_Request.$Shape;

    /**
     * Verifies a LLM_Generator_Write_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Write_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Write_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Write_Request;

    /**
     * Creates a plain object from a LLM_Generator_Write_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Write_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Write_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Write_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Write_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Write_Request {

    /** Properties of a LLM_Generator_Write_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Write_Request. */
    type $Shape = LLM_Generator_Write_Request.$Properties;
}

/**
 * Properties of a LLM_Generator_Write_Reply.
 * @deprecated Use LLM_Generator_Write_Reply.$Properties instead.
 */
export interface ILLM_Generator_Write_Reply extends LLM_Generator_Write_Reply.$Properties {
}

/** Represents a LLM_Generator_Write_Reply. */
export class LLM_Generator_Write_Reply {

    /**
     * Constructs a new LLM_Generator_Write_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Write_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Generator_Write_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Generator_Write_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Write_Reply instance
     */
    static create(properties: LLM_Generator_Write_Reply.$Shape): LLM_Generator_Write_Reply & LLM_Generator_Write_Reply.$Shape;
    static create(properties?: LLM_Generator_Write_Reply.$Properties): LLM_Generator_Write_Reply;

    /**
     * Encodes the specified LLM_Generator_Write_Reply message. Does not implicitly {@link LLM_Generator_Write_Reply.verify|verify} messages.
     * @param message LLM_Generator_Write_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Write_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Write_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Write_Reply.verify|verify} messages.
     * @param message LLM_Generator_Write_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Write_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Write_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Write_Reply & LLM_Generator_Write_Reply.$Shape} LLM_Generator_Write_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Write_Reply & LLM_Generator_Write_Reply.$Shape;

    /**
     * Decodes a LLM_Generator_Write_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Write_Reply & LLM_Generator_Write_Reply.$Shape} LLM_Generator_Write_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Write_Reply & LLM_Generator_Write_Reply.$Shape;

    /**
     * Verifies a LLM_Generator_Write_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Write_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Write_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Write_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Write_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Write_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Write_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Write_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Write_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Write_Reply {

    /** Properties of a LLM_Generator_Write_Reply. */
    interface $Properties {

        /** LLM_Generator_Write_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Write_Reply. */
    type $Shape = LLM_Generator_Write_Reply.$Properties;
}

/**
 * Properties of a LLM_Generator_Generate_Request.
 * @deprecated Use LLM_Generator_Generate_Request.$Properties instead.
 */
export interface ILLM_Generator_Generate_Request extends LLM_Generator_Generate_Request.$Properties {
}

/** Represents a LLM_Generator_Generate_Request. */
export class LLM_Generator_Generate_Request {

    /**
     * Constructs a new LLM_Generator_Generate_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Generate_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Generator_Generate_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Generate_Request instance
     */
    static create(properties: LLM_Generator_Generate_Request.$Shape): LLM_Generator_Generate_Request & LLM_Generator_Generate_Request.$Shape;
    static create(properties?: LLM_Generator_Generate_Request.$Properties): LLM_Generator_Generate_Request;

    /**
     * Encodes the specified LLM_Generator_Generate_Request message. Does not implicitly {@link LLM_Generator_Generate_Request.verify|verify} messages.
     * @param message LLM_Generator_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Generate_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Generate_Request message, length delimited. Does not implicitly {@link LLM_Generator_Generate_Request.verify|verify} messages.
     * @param message LLM_Generator_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Generate_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Generate_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Generate_Request & LLM_Generator_Generate_Request.$Shape} LLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Generate_Request & LLM_Generator_Generate_Request.$Shape;

    /**
     * Decodes a LLM_Generator_Generate_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Generate_Request & LLM_Generator_Generate_Request.$Shape} LLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Generate_Request & LLM_Generator_Generate_Request.$Shape;

    /**
     * Verifies a LLM_Generator_Generate_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Generate_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Generate_Request;

    /**
     * Creates a plain object from a LLM_Generator_Generate_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Generate_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Generate_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Generate_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Generate_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Generate_Request {

    /** Properties of a LLM_Generator_Generate_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Generate_Request. */
    type $Shape = LLM_Generator_Generate_Request.$Properties;
}

/**
 * Properties of a LLM_Generator_Generate_Reply.
 * @deprecated Use LLM_Generator_Generate_Reply.$Properties instead.
 */
export interface ILLM_Generator_Generate_Reply extends LLM_Generator_Generate_Reply.$Properties {
}

/** Represents a LLM_Generator_Generate_Reply. */
export class LLM_Generator_Generate_Reply {

    /**
     * Constructs a new LLM_Generator_Generate_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Generate_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Generator_Generate_Reply status. */
    status: number;

    /** LLM_Generator_Generate_Reply initialPrefixTokens. */
    initialPrefixTokens: number[];

    /**
     * Creates a new LLM_Generator_Generate_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Generate_Reply instance
     */
    static create(properties: LLM_Generator_Generate_Reply.$Shape): LLM_Generator_Generate_Reply & LLM_Generator_Generate_Reply.$Shape;
    static create(properties?: LLM_Generator_Generate_Reply.$Properties): LLM_Generator_Generate_Reply;

    /**
     * Encodes the specified LLM_Generator_Generate_Reply message. Does not implicitly {@link LLM_Generator_Generate_Reply.verify|verify} messages.
     * @param message LLM_Generator_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Generate_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Generate_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Generate_Reply.verify|verify} messages.
     * @param message LLM_Generator_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Generate_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Generate_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Generate_Reply & LLM_Generator_Generate_Reply.$Shape} LLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Generate_Reply & LLM_Generator_Generate_Reply.$Shape;

    /**
     * Decodes a LLM_Generator_Generate_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Generate_Reply & LLM_Generator_Generate_Reply.$Shape} LLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Generate_Reply & LLM_Generator_Generate_Reply.$Shape;

    /**
     * Verifies a LLM_Generator_Generate_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Generate_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Generate_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Generate_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Generate_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Generate_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Generate_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Generate_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Generate_Reply {

    /** Properties of a LLM_Generator_Generate_Reply. */
    interface $Properties {

        /** LLM_Generator_Generate_Reply status */
        status?: (number|null);

        /** LLM_Generator_Generate_Reply initialPrefixTokens */
        initialPrefixTokens?: (number[]|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Generate_Reply. */
    type $Shape = LLM_Generator_Generate_Reply.$Properties;
}

/**
 * Properties of an Embedding.
 * @deprecated Use Embedding.$Properties instead.
 */
export interface IEmbedding extends Embedding.$Properties {
}

/** Represents an Embedding. */
export class Embedding {

    /**
     * Constructs a new Embedding.
     * @param [properties] Properties to set
     */
    constructor(properties?: Embedding.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** Embedding type. */
    type: number;

    /** Embedding data. */
    data: Uint8Array;

    /**
     * Creates a new Embedding instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Embedding instance
     */
    static create(properties: Embedding.$Shape): Embedding & Embedding.$Shape;
    static create(properties?: Embedding.$Properties): Embedding;

    /**
     * Encodes the specified Embedding message. Does not implicitly {@link Embedding.verify|verify} messages.
     * @param message Embedding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Embedding.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Embedding message, length delimited. Does not implicitly {@link Embedding.verify|verify} messages.
     * @param message Embedding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Embedding.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Embedding message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Embedding & Embedding.$Shape} Embedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Embedding & Embedding.$Shape;

    /**
     * Decodes an Embedding message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Embedding & Embedding.$Shape} Embedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Embedding & Embedding.$Shape;

    /**
     * Verifies an Embedding message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Embedding message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Embedding
     */
    static fromObject(object: { [k: string]: any }): Embedding;

    /**
     * Creates a plain object from an Embedding message. Also converts values to other types if specified.
     * @param message Embedding
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Embedding, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Embedding to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Embedding
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Embedding {

    /** Properties of an Embedding. */
    interface $Properties {

        /** Embedding type */
        type?: (number|null);

        /** Embedding data */
        data?: (Uint8Array|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of an Embedding. */
    type $Shape = Embedding.$Properties;
}

/**
 * Properties of a TextGenerationInput.
 * @deprecated Use TextGenerationInput.$Properties instead.
 */
export interface ITextGenerationInput extends TextGenerationInput.$Properties {
}

/** Represents a TextGenerationInput. */
export class TextGenerationInput {

    /**
     * Constructs a new TextGenerationInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: TextGenerationInput.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** TextGenerationInput initialPrompt. */
    initialPrompt: string;

    /** TextGenerationInput tokens. */
    tokens: number[];

    /** TextGenerationInput embeddings. */
    embeddings: Embedding.$Properties[];

    /**
     * Creates a new TextGenerationInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextGenerationInput instance
     */
    static create(properties: TextGenerationInput.$Shape): TextGenerationInput & TextGenerationInput.$Shape;
    static create(properties?: TextGenerationInput.$Properties): TextGenerationInput;

    /**
     * Encodes the specified TextGenerationInput message. Does not implicitly {@link TextGenerationInput.verify|verify} messages.
     * @param message TextGenerationInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: TextGenerationInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextGenerationInput message, length delimited. Does not implicitly {@link TextGenerationInput.verify|verify} messages.
     * @param message TextGenerationInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: TextGenerationInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextGenerationInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {TextGenerationInput & TextGenerationInput.$Shape} TextGenerationInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextGenerationInput & TextGenerationInput.$Shape;

    /**
     * Decodes a TextGenerationInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {TextGenerationInput & TextGenerationInput.$Shape} TextGenerationInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextGenerationInput & TextGenerationInput.$Shape;

    /**
     * Verifies a TextGenerationInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextGenerationInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextGenerationInput
     */
    static fromObject(object: { [k: string]: any }): TextGenerationInput;

    /**
     * Creates a plain object from a TextGenerationInput message. Also converts values to other types if specified.
     * @param message TextGenerationInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: TextGenerationInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextGenerationInput to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for TextGenerationInput
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace TextGenerationInput {

    /** Properties of a TextGenerationInput. */
    interface $Properties {

        /** TextGenerationInput initialPrompt */
        initialPrompt?: (string|null);

        /** TextGenerationInput tokens */
        tokens?: (number[]|null);

        /** TextGenerationInput embeddings */
        embeddings?: (Embedding.$Properties[]|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a TextGenerationInput. */
    type $Shape = TextGenerationInput.$Properties;
}

/**
 * Properties of a TextGenerationOutput.
 * @deprecated Use TextGenerationOutput.$Properties instead.
 */
export interface ITextGenerationOutput extends TextGenerationOutput.$Properties {
}

/** Represents a TextGenerationOutput. */
export class TextGenerationOutput {

    /**
     * Constructs a new TextGenerationOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: TextGenerationOutput.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** TextGenerationOutput outputTokenStr. */
    outputTokenStr: string;

    /** TextGenerationOutput outputTokenId. */
    outputTokenId: number;

    /**
     * Creates a new TextGenerationOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextGenerationOutput instance
     */
    static create(properties: TextGenerationOutput.$Shape): TextGenerationOutput & TextGenerationOutput.$Shape;
    static create(properties?: TextGenerationOutput.$Properties): TextGenerationOutput;

    /**
     * Encodes the specified TextGenerationOutput message. Does not implicitly {@link TextGenerationOutput.verify|verify} messages.
     * @param message TextGenerationOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: TextGenerationOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextGenerationOutput message, length delimited. Does not implicitly {@link TextGenerationOutput.verify|verify} messages.
     * @param message TextGenerationOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: TextGenerationOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextGenerationOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {TextGenerationOutput & TextGenerationOutput.$Shape} TextGenerationOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextGenerationOutput & TextGenerationOutput.$Shape;

    /**
     * Decodes a TextGenerationOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {TextGenerationOutput & TextGenerationOutput.$Shape} TextGenerationOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextGenerationOutput & TextGenerationOutput.$Shape;

    /**
     * Verifies a TextGenerationOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextGenerationOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextGenerationOutput
     */
    static fromObject(object: { [k: string]: any }): TextGenerationOutput;

    /**
     * Creates a plain object from a TextGenerationOutput message. Also converts values to other types if specified.
     * @param message TextGenerationOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: TextGenerationOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextGenerationOutput to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for TextGenerationOutput
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace TextGenerationOutput {

    /** Properties of a TextGenerationOutput. */
    interface $Properties {

        /** TextGenerationOutput outputTokenStr */
        outputTokenStr?: (string|null);

        /** TextGenerationOutput outputTokenId */
        outputTokenId?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a TextGenerationOutput. */
    type $Shape = TextGenerationOutput.$Properties;
}

/**
 * Properties of a LLM_Generator_Read_Request.
 * @deprecated Use LLM_Generator_Read_Request.$Properties instead.
 */
export interface ILLM_Generator_Read_Request extends LLM_Generator_Read_Request.$Properties {
}

/** Represents a LLM_Generator_Read_Request. */
export class LLM_Generator_Read_Request {

    /**
     * Constructs a new LLM_Generator_Read_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Read_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Generator_Read_Request timeoutMs. */
    timeoutMs: number;

    /** LLM_Generator_Read_Request generationInput. */
    generationInput?: (TextGenerationInput.$Properties|null);

    /**
     * Creates a new LLM_Generator_Read_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Read_Request instance
     */
    static create(properties: LLM_Generator_Read_Request.$Shape): LLM_Generator_Read_Request & LLM_Generator_Read_Request.$Shape;
    static create(properties?: LLM_Generator_Read_Request.$Properties): LLM_Generator_Read_Request;

    /**
     * Encodes the specified LLM_Generator_Read_Request message. Does not implicitly {@link LLM_Generator_Read_Request.verify|verify} messages.
     * @param message LLM_Generator_Read_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Read_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Read_Request message, length delimited. Does not implicitly {@link LLM_Generator_Read_Request.verify|verify} messages.
     * @param message LLM_Generator_Read_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Read_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Read_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Read_Request & LLM_Generator_Read_Request.$Shape} LLM_Generator_Read_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Read_Request & LLM_Generator_Read_Request.$Shape;

    /**
     * Decodes a LLM_Generator_Read_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Read_Request & LLM_Generator_Read_Request.$Shape} LLM_Generator_Read_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Read_Request & LLM_Generator_Read_Request.$Shape;

    /**
     * Verifies a LLM_Generator_Read_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Read_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Read_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Read_Request;

    /**
     * Creates a plain object from a LLM_Generator_Read_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Read_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Read_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Read_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Read_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Read_Request {

    /** Properties of a LLM_Generator_Read_Request. */
    interface $Properties {

        /** LLM_Generator_Read_Request timeoutMs */
        timeoutMs?: (number|null);

        /** LLM_Generator_Read_Request generationInput */
        generationInput?: (TextGenerationInput.$Properties|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Read_Request. */
    type $Shape = LLM_Generator_Read_Request.$Properties;
}

/**
 * Properties of a LLM_Generator_Read_Reply.
 * @deprecated Use LLM_Generator_Read_Reply.$Properties instead.
 */
export interface ILLM_Generator_Read_Reply extends LLM_Generator_Read_Reply.$Properties {
}

/** Represents a LLM_Generator_Read_Reply. */
export class LLM_Generator_Read_Reply {

    /**
     * Constructs a new LLM_Generator_Read_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Read_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Generator_Read_Reply generationOutput. */
    generationOutput?: (TextGenerationOutput.$Properties|null);

    /** LLM_Generator_Read_Reply generationStatus. */
    generationStatus: number;

    /** LLM_Generator_Read_Reply status. */
    status: number;

    /** LLM_Generator_Read_Reply isContextFull. */
    isContextFull: boolean;

    /**
     * Creates a new LLM_Generator_Read_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Read_Reply instance
     */
    static create(properties: LLM_Generator_Read_Reply.$Shape): LLM_Generator_Read_Reply & LLM_Generator_Read_Reply.$Shape;
    static create(properties?: LLM_Generator_Read_Reply.$Properties): LLM_Generator_Read_Reply;

    /**
     * Encodes the specified LLM_Generator_Read_Reply message. Does not implicitly {@link LLM_Generator_Read_Reply.verify|verify} messages.
     * @param message LLM_Generator_Read_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Read_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Read_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Read_Reply.verify|verify} messages.
     * @param message LLM_Generator_Read_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Read_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Read_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Read_Reply & LLM_Generator_Read_Reply.$Shape} LLM_Generator_Read_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Read_Reply & LLM_Generator_Read_Reply.$Shape;

    /**
     * Decodes a LLM_Generator_Read_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Read_Reply & LLM_Generator_Read_Reply.$Shape} LLM_Generator_Read_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Read_Reply & LLM_Generator_Read_Reply.$Shape;

    /**
     * Verifies a LLM_Generator_Read_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Read_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Read_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Read_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Read_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Read_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Read_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Read_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Read_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Read_Reply {

    /** Properties of a LLM_Generator_Read_Reply. */
    interface $Properties {

        /** LLM_Generator_Read_Reply generationOutput */
        generationOutput?: (TextGenerationOutput.$Properties|null);

        /** LLM_Generator_Read_Reply generationStatus */
        generationStatus?: (number|null);

        /** LLM_Generator_Read_Reply status */
        status?: (number|null);

        /** LLM_Generator_Read_Reply isContextFull */
        isContextFull?: (boolean|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Read_Reply. */
    type $Shape = LLM_Generator_Read_Reply.$Properties;
}

/**
 * Properties of a LLM_Tokenize_Request.
 * @deprecated Use LLM_Tokenize_Request.$Properties instead.
 */
export interface ILLM_Tokenize_Request extends LLM_Tokenize_Request.$Properties {
}

/** Represents a LLM_Tokenize_Request. */
export class LLM_Tokenize_Request {

    /**
     * Constructs a new LLM_Tokenize_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Tokenize_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Tokenize_Request prompt. */
    prompt: string;

    /**
     * Creates a new LLM_Tokenize_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Tokenize_Request instance
     */
    static create(properties: LLM_Tokenize_Request.$Shape): LLM_Tokenize_Request & LLM_Tokenize_Request.$Shape;
    static create(properties?: LLM_Tokenize_Request.$Properties): LLM_Tokenize_Request;

    /**
     * Encodes the specified LLM_Tokenize_Request message. Does not implicitly {@link LLM_Tokenize_Request.verify|verify} messages.
     * @param message LLM_Tokenize_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Tokenize_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Tokenize_Request message, length delimited. Does not implicitly {@link LLM_Tokenize_Request.verify|verify} messages.
     * @param message LLM_Tokenize_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Tokenize_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Tokenize_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Tokenize_Request & LLM_Tokenize_Request.$Shape} LLM_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Tokenize_Request & LLM_Tokenize_Request.$Shape;

    /**
     * Decodes a LLM_Tokenize_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Tokenize_Request & LLM_Tokenize_Request.$Shape} LLM_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Tokenize_Request & LLM_Tokenize_Request.$Shape;

    /**
     * Verifies a LLM_Tokenize_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Tokenize_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Tokenize_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Tokenize_Request;

    /**
     * Creates a plain object from a LLM_Tokenize_Request message. Also converts values to other types if specified.
     * @param message LLM_Tokenize_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Tokenize_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Tokenize_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Tokenize_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Tokenize_Request {

    /** Properties of a LLM_Tokenize_Request. */
    interface $Properties {

        /** LLM_Tokenize_Request prompt */
        prompt?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Tokenize_Request. */
    type $Shape = LLM_Tokenize_Request.$Properties;
}

/**
 * Properties of a LLM_Tokenize_Reply.
 * @deprecated Use LLM_Tokenize_Reply.$Properties instead.
 */
export interface ILLM_Tokenize_Reply extends LLM_Tokenize_Reply.$Properties {
}

/** Represents a LLM_Tokenize_Reply. */
export class LLM_Tokenize_Reply {

    /**
     * Constructs a new LLM_Tokenize_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Tokenize_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Tokenize_Reply tokens. */
    tokens: number[];

    /** LLM_Tokenize_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Tokenize_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Tokenize_Reply instance
     */
    static create(properties: LLM_Tokenize_Reply.$Shape): LLM_Tokenize_Reply & LLM_Tokenize_Reply.$Shape;
    static create(properties?: LLM_Tokenize_Reply.$Properties): LLM_Tokenize_Reply;

    /**
     * Encodes the specified LLM_Tokenize_Reply message. Does not implicitly {@link LLM_Tokenize_Reply.verify|verify} messages.
     * @param message LLM_Tokenize_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Tokenize_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Tokenize_Reply message, length delimited. Does not implicitly {@link LLM_Tokenize_Reply.verify|verify} messages.
     * @param message LLM_Tokenize_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Tokenize_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Tokenize_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Tokenize_Reply & LLM_Tokenize_Reply.$Shape} LLM_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Tokenize_Reply & LLM_Tokenize_Reply.$Shape;

    /**
     * Decodes a LLM_Tokenize_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Tokenize_Reply & LLM_Tokenize_Reply.$Shape} LLM_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Tokenize_Reply & LLM_Tokenize_Reply.$Shape;

    /**
     * Verifies a LLM_Tokenize_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Tokenize_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Tokenize_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Tokenize_Reply;

    /**
     * Creates a plain object from a LLM_Tokenize_Reply message. Also converts values to other types if specified.
     * @param message LLM_Tokenize_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Tokenize_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Tokenize_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Tokenize_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Tokenize_Reply {

    /** Properties of a LLM_Tokenize_Reply. */
    interface $Properties {

        /** LLM_Tokenize_Reply tokens */
        tokens?: (number[]|null);

        /** LLM_Tokenize_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Tokenize_Reply. */
    type $Shape = LLM_Tokenize_Reply.$Properties;
}

/**
 * Properties of a LLM_Get_Context_Request.
 * @deprecated Use LLM_Get_Context_Request.$Properties instead.
 */
export interface ILLM_Get_Context_Request extends LLM_Get_Context_Request.$Properties {
}

/** Represents a LLM_Get_Context_Request. */
export class LLM_Get_Context_Request {

    /**
     * Constructs a new LLM_Get_Context_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Context_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Get_Context_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Context_Request instance
     */
    static create(properties: LLM_Get_Context_Request.$Shape): LLM_Get_Context_Request & LLM_Get_Context_Request.$Shape;
    static create(properties?: LLM_Get_Context_Request.$Properties): LLM_Get_Context_Request;

    /**
     * Encodes the specified LLM_Get_Context_Request message. Does not implicitly {@link LLM_Get_Context_Request.verify|verify} messages.
     * @param message LLM_Get_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Context_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Context_Request message, length delimited. Does not implicitly {@link LLM_Get_Context_Request.verify|verify} messages.
     * @param message LLM_Get_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Context_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Context_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Request & LLM_Get_Context_Request.$Shape} LLM_Get_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Context_Request & LLM_Get_Context_Request.$Shape;

    /**
     * Decodes a LLM_Get_Context_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Request & LLM_Get_Context_Request.$Shape} LLM_Get_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Context_Request & LLM_Get_Context_Request.$Shape;

    /**
     * Verifies a LLM_Get_Context_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Context_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Context_Request;

    /**
     * Creates a plain object from a LLM_Get_Context_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Context_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Context_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Context_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Context_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Context_Request {

    /** Properties of a LLM_Get_Context_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Context_Request. */
    type $Shape = LLM_Get_Context_Request.$Properties;
}

/**
 * Properties of a LLM_Get_Context_Reply.
 * @deprecated Use LLM_Get_Context_Reply.$Properties instead.
 */
export interface ILLM_Get_Context_Reply extends LLM_Get_Context_Reply.$Properties {
}

/** Represents a LLM_Get_Context_Reply. */
export class LLM_Get_Context_Reply {

    /**
     * Constructs a new LLM_Get_Context_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Context_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Get_Context_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Get_Context_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Context_Reply instance
     */
    static create(properties: LLM_Get_Context_Reply.$Shape): LLM_Get_Context_Reply & LLM_Get_Context_Reply.$Shape;
    static create(properties?: LLM_Get_Context_Reply.$Properties): LLM_Get_Context_Reply;

    /**
     * Encodes the specified LLM_Get_Context_Reply message. Does not implicitly {@link LLM_Get_Context_Reply.verify|verify} messages.
     * @param message LLM_Get_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Context_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Context_Reply message, length delimited. Does not implicitly {@link LLM_Get_Context_Reply.verify|verify} messages.
     * @param message LLM_Get_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Context_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Context_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Reply & LLM_Get_Context_Reply.$Shape} LLM_Get_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Context_Reply & LLM_Get_Context_Reply.$Shape;

    /**
     * Decodes a LLM_Get_Context_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Reply & LLM_Get_Context_Reply.$Shape} LLM_Get_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Context_Reply & LLM_Get_Context_Reply.$Shape;

    /**
     * Verifies a LLM_Get_Context_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Context_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Context_Reply;

    /**
     * Creates a plain object from a LLM_Get_Context_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Context_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Context_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Context_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Context_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Context_Reply {

    /** Properties of a LLM_Get_Context_Reply. */
    interface $Properties {

        /** LLM_Get_Context_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Context_Reply. */
    type $Shape = LLM_Get_Context_Reply.$Properties;
}

/**
 * Properties of a LLM_Set_Context_Request.
 * @deprecated Use LLM_Set_Context_Request.$Properties instead.
 */
export interface ILLM_Set_Context_Request extends LLM_Set_Context_Request.$Properties {
}

/** Represents a LLM_Set_Context_Request. */
export class LLM_Set_Context_Request {

    /**
     * Constructs a new LLM_Set_Context_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Set_Context_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Set_Context_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_Context_Request instance
     */
    static create(properties: LLM_Set_Context_Request.$Shape): LLM_Set_Context_Request & LLM_Set_Context_Request.$Shape;
    static create(properties?: LLM_Set_Context_Request.$Properties): LLM_Set_Context_Request;

    /**
     * Encodes the specified LLM_Set_Context_Request message. Does not implicitly {@link LLM_Set_Context_Request.verify|verify} messages.
     * @param message LLM_Set_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Set_Context_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_Context_Request message, length delimited. Does not implicitly {@link LLM_Set_Context_Request.verify|verify} messages.
     * @param message LLM_Set_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Set_Context_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_Context_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Set_Context_Request & LLM_Set_Context_Request.$Shape} LLM_Set_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_Context_Request & LLM_Set_Context_Request.$Shape;

    /**
     * Decodes a LLM_Set_Context_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Set_Context_Request & LLM_Set_Context_Request.$Shape} LLM_Set_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_Context_Request & LLM_Set_Context_Request.$Shape;

    /**
     * Verifies a LLM_Set_Context_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_Context_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Set_Context_Request;

    /**
     * Creates a plain object from a LLM_Set_Context_Request message. Also converts values to other types if specified.
     * @param message LLM_Set_Context_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Set_Context_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_Context_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Set_Context_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Set_Context_Request {

    /** Properties of a LLM_Set_Context_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Set_Context_Request. */
    type $Shape = LLM_Set_Context_Request.$Properties;
}

/**
 * Properties of a LLM_Set_Context_Reply.
 * @deprecated Use LLM_Set_Context_Reply.$Properties instead.
 */
export interface ILLM_Set_Context_Reply extends LLM_Set_Context_Reply.$Properties {
}

/** Represents a LLM_Set_Context_Reply. */
export class LLM_Set_Context_Reply {

    /**
     * Constructs a new LLM_Set_Context_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Set_Context_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Set_Context_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Set_Context_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_Context_Reply instance
     */
    static create(properties: LLM_Set_Context_Reply.$Shape): LLM_Set_Context_Reply & LLM_Set_Context_Reply.$Shape;
    static create(properties?: LLM_Set_Context_Reply.$Properties): LLM_Set_Context_Reply;

    /**
     * Encodes the specified LLM_Set_Context_Reply message. Does not implicitly {@link LLM_Set_Context_Reply.verify|verify} messages.
     * @param message LLM_Set_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Set_Context_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_Context_Reply message, length delimited. Does not implicitly {@link LLM_Set_Context_Reply.verify|verify} messages.
     * @param message LLM_Set_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Set_Context_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_Context_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Set_Context_Reply & LLM_Set_Context_Reply.$Shape} LLM_Set_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_Context_Reply & LLM_Set_Context_Reply.$Shape;

    /**
     * Decodes a LLM_Set_Context_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Set_Context_Reply & LLM_Set_Context_Reply.$Shape} LLM_Set_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_Context_Reply & LLM_Set_Context_Reply.$Shape;

    /**
     * Verifies a LLM_Set_Context_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_Context_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Set_Context_Reply;

    /**
     * Creates a plain object from a LLM_Set_Context_Reply message. Also converts values to other types if specified.
     * @param message LLM_Set_Context_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Set_Context_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_Context_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Set_Context_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Set_Context_Reply {

    /** Properties of a LLM_Set_Context_Reply. */
    interface $Properties {

        /** LLM_Set_Context_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Set_Context_Reply. */
    type $Shape = LLM_Set_Context_Reply.$Properties;
}

/**
 * Properties of a LLM_Clear_Context_Request.
 * @deprecated Use LLM_Clear_Context_Request.$Properties instead.
 */
export interface ILLM_Clear_Context_Request extends LLM_Clear_Context_Request.$Properties {
}

/** Represents a LLM_Clear_Context_Request. */
export class LLM_Clear_Context_Request {

    /**
     * Constructs a new LLM_Clear_Context_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Clear_Context_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Clear_Context_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Clear_Context_Request instance
     */
    static create(properties: LLM_Clear_Context_Request.$Shape): LLM_Clear_Context_Request & LLM_Clear_Context_Request.$Shape;
    static create(properties?: LLM_Clear_Context_Request.$Properties): LLM_Clear_Context_Request;

    /**
     * Encodes the specified LLM_Clear_Context_Request message. Does not implicitly {@link LLM_Clear_Context_Request.verify|verify} messages.
     * @param message LLM_Clear_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Clear_Context_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Clear_Context_Request message, length delimited. Does not implicitly {@link LLM_Clear_Context_Request.verify|verify} messages.
     * @param message LLM_Clear_Context_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Clear_Context_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Clear_Context_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Clear_Context_Request & LLM_Clear_Context_Request.$Shape} LLM_Clear_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Clear_Context_Request & LLM_Clear_Context_Request.$Shape;

    /**
     * Decodes a LLM_Clear_Context_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Clear_Context_Request & LLM_Clear_Context_Request.$Shape} LLM_Clear_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Clear_Context_Request & LLM_Clear_Context_Request.$Shape;

    /**
     * Verifies a LLM_Clear_Context_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Clear_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Clear_Context_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Clear_Context_Request;

    /**
     * Creates a plain object from a LLM_Clear_Context_Request message. Also converts values to other types if specified.
     * @param message LLM_Clear_Context_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Clear_Context_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Clear_Context_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Clear_Context_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Clear_Context_Request {

    /** Properties of a LLM_Clear_Context_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Clear_Context_Request. */
    type $Shape = LLM_Clear_Context_Request.$Properties;
}

/**
 * Properties of a LLM_Clear_Context_Reply.
 * @deprecated Use LLM_Clear_Context_Reply.$Properties instead.
 */
export interface ILLM_Clear_Context_Reply extends LLM_Clear_Context_Reply.$Properties {
}

/** Represents a LLM_Clear_Context_Reply. */
export class LLM_Clear_Context_Reply {

    /**
     * Constructs a new LLM_Clear_Context_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Clear_Context_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Clear_Context_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Clear_Context_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Clear_Context_Reply instance
     */
    static create(properties: LLM_Clear_Context_Reply.$Shape): LLM_Clear_Context_Reply & LLM_Clear_Context_Reply.$Shape;
    static create(properties?: LLM_Clear_Context_Reply.$Properties): LLM_Clear_Context_Reply;

    /**
     * Encodes the specified LLM_Clear_Context_Reply message. Does not implicitly {@link LLM_Clear_Context_Reply.verify|verify} messages.
     * @param message LLM_Clear_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Clear_Context_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Clear_Context_Reply message, length delimited. Does not implicitly {@link LLM_Clear_Context_Reply.verify|verify} messages.
     * @param message LLM_Clear_Context_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Clear_Context_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Clear_Context_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Clear_Context_Reply & LLM_Clear_Context_Reply.$Shape} LLM_Clear_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Clear_Context_Reply & LLM_Clear_Context_Reply.$Shape;

    /**
     * Decodes a LLM_Clear_Context_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Clear_Context_Reply & LLM_Clear_Context_Reply.$Shape} LLM_Clear_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Clear_Context_Reply & LLM_Clear_Context_Reply.$Shape;

    /**
     * Verifies a LLM_Clear_Context_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Clear_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Clear_Context_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Clear_Context_Reply;

    /**
     * Creates a plain object from a LLM_Clear_Context_Reply message. Also converts values to other types if specified.
     * @param message LLM_Clear_Context_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Clear_Context_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Clear_Context_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Clear_Context_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Clear_Context_Reply {

    /** Properties of a LLM_Clear_Context_Reply. */
    interface $Properties {

        /** LLM_Clear_Context_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Clear_Context_Reply. */
    type $Shape = LLM_Clear_Context_Reply.$Properties;
}

/**
 * Properties of a LLM_Release_Request.
 * @deprecated Use LLM_Release_Request.$Properties instead.
 */
export interface ILLM_Release_Request extends LLM_Release_Request.$Properties {
}

/** Represents a LLM_Release_Request. */
export class LLM_Release_Request {

    /**
     * Constructs a new LLM_Release_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Release_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Release_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Release_Request instance
     */
    static create(properties: LLM_Release_Request.$Shape): LLM_Release_Request & LLM_Release_Request.$Shape;
    static create(properties?: LLM_Release_Request.$Properties): LLM_Release_Request;

    /**
     * Encodes the specified LLM_Release_Request message. Does not implicitly {@link LLM_Release_Request.verify|verify} messages.
     * @param message LLM_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Release_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Release_Request message, length delimited. Does not implicitly {@link LLM_Release_Request.verify|verify} messages.
     * @param message LLM_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Release_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Release_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Release_Request & LLM_Release_Request.$Shape} LLM_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Release_Request & LLM_Release_Request.$Shape;

    /**
     * Decodes a LLM_Release_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Release_Request & LLM_Release_Request.$Shape} LLM_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Release_Request & LLM_Release_Request.$Shape;

    /**
     * Verifies a LLM_Release_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Release_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Release_Request;

    /**
     * Creates a plain object from a LLM_Release_Request message. Also converts values to other types if specified.
     * @param message LLM_Release_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Release_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Release_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Release_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Release_Request {

    /** Properties of a LLM_Release_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Release_Request. */
    type $Shape = LLM_Release_Request.$Properties;
}

/**
 * Properties of a LLM_Release_Reply.
 * @deprecated Use LLM_Release_Reply.$Properties instead.
 */
export interface ILLM_Release_Reply extends LLM_Release_Reply.$Properties {
}

/** Represents a LLM_Release_Reply. */
export class LLM_Release_Reply {

    /**
     * Constructs a new LLM_Release_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Release_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Release_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Release_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Release_Reply instance
     */
    static create(properties: LLM_Release_Reply.$Shape): LLM_Release_Reply & LLM_Release_Reply.$Shape;
    static create(properties?: LLM_Release_Reply.$Properties): LLM_Release_Reply;

    /**
     * Encodes the specified LLM_Release_Reply message. Does not implicitly {@link LLM_Release_Reply.verify|verify} messages.
     * @param message LLM_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Release_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Release_Reply message, length delimited. Does not implicitly {@link LLM_Release_Reply.verify|verify} messages.
     * @param message LLM_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Release_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Release_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Release_Reply & LLM_Release_Reply.$Shape} LLM_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Release_Reply & LLM_Release_Reply.$Shape;

    /**
     * Decodes a LLM_Release_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Release_Reply & LLM_Release_Reply.$Shape} LLM_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Release_Reply & LLM_Release_Reply.$Shape;

    /**
     * Verifies a LLM_Release_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Release_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Release_Reply;

    /**
     * Creates a plain object from a LLM_Release_Reply message. Also converts values to other types if specified.
     * @param message LLM_Release_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Release_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Release_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Release_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Release_Reply {

    /** Properties of a LLM_Release_Reply. */
    interface $Properties {

        /** LLM_Release_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Release_Reply. */
    type $Shape = LLM_Release_Reply.$Properties;
}

/**
 * Properties of a LLM_Generator_Abort_Request.
 * @deprecated Use LLM_Generator_Abort_Request.$Properties instead.
 */
export interface ILLM_Generator_Abort_Request extends LLM_Generator_Abort_Request.$Properties {
}

/** Represents a LLM_Generator_Abort_Request. */
export class LLM_Generator_Abort_Request {

    /**
     * Constructs a new LLM_Generator_Abort_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Abort_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Generator_Abort_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Abort_Request instance
     */
    static create(properties: LLM_Generator_Abort_Request.$Shape): LLM_Generator_Abort_Request & LLM_Generator_Abort_Request.$Shape;
    static create(properties?: LLM_Generator_Abort_Request.$Properties): LLM_Generator_Abort_Request;

    /**
     * Encodes the specified LLM_Generator_Abort_Request message. Does not implicitly {@link LLM_Generator_Abort_Request.verify|verify} messages.
     * @param message LLM_Generator_Abort_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Abort_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Abort_Request message, length delimited. Does not implicitly {@link LLM_Generator_Abort_Request.verify|verify} messages.
     * @param message LLM_Generator_Abort_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Abort_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Abort_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Abort_Request & LLM_Generator_Abort_Request.$Shape} LLM_Generator_Abort_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Abort_Request & LLM_Generator_Abort_Request.$Shape;

    /**
     * Decodes a LLM_Generator_Abort_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Abort_Request & LLM_Generator_Abort_Request.$Shape} LLM_Generator_Abort_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Abort_Request & LLM_Generator_Abort_Request.$Shape;

    /**
     * Verifies a LLM_Generator_Abort_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Abort_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Abort_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Abort_Request;

    /**
     * Creates a plain object from a LLM_Generator_Abort_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Abort_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Abort_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Abort_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Abort_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Abort_Request {

    /** Properties of a LLM_Generator_Abort_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Abort_Request. */
    type $Shape = LLM_Generator_Abort_Request.$Properties;
}

/**
 * Properties of a LLM_Generator_Abort_Reply.
 * @deprecated Use LLM_Generator_Abort_Reply.$Properties instead.
 */
export interface ILLM_Generator_Abort_Reply extends LLM_Generator_Abort_Reply.$Properties {
}

/** Represents a LLM_Generator_Abort_Reply. */
export class LLM_Generator_Abort_Reply {

    /**
     * Constructs a new LLM_Generator_Abort_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Abort_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Generator_Abort_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Generator_Abort_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Abort_Reply instance
     */
    static create(properties: LLM_Generator_Abort_Reply.$Shape): LLM_Generator_Abort_Reply & LLM_Generator_Abort_Reply.$Shape;
    static create(properties?: LLM_Generator_Abort_Reply.$Properties): LLM_Generator_Abort_Reply;

    /**
     * Encodes the specified LLM_Generator_Abort_Reply message. Does not implicitly {@link LLM_Generator_Abort_Reply.verify|verify} messages.
     * @param message LLM_Generator_Abort_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Abort_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Abort_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Abort_Reply.verify|verify} messages.
     * @param message LLM_Generator_Abort_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Abort_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Abort_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Abort_Reply & LLM_Generator_Abort_Reply.$Shape} LLM_Generator_Abort_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Abort_Reply & LLM_Generator_Abort_Reply.$Shape;

    /**
     * Decodes a LLM_Generator_Abort_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Abort_Reply & LLM_Generator_Abort_Reply.$Shape} LLM_Generator_Abort_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Abort_Reply & LLM_Generator_Abort_Reply.$Shape;

    /**
     * Verifies a LLM_Generator_Abort_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Abort_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Abort_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Abort_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Abort_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Abort_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Abort_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Abort_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Abort_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Abort_Reply {

    /** Properties of a LLM_Generator_Abort_Reply. */
    interface $Properties {

        /** LLM_Generator_Abort_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Abort_Reply. */
    type $Shape = LLM_Generator_Abort_Reply.$Properties;
}

/**
 * Properties of a LLM_Set_End_Of_Generation_Sequence_Request.
 * @deprecated Use LLM_Set_End_Of_Generation_Sequence_Request.$Properties instead.
 */
export interface ILLM_Set_End_Of_Generation_Sequence_Request extends LLM_Set_End_Of_Generation_Sequence_Request.$Properties {
}

/** Represents a LLM_Set_End_Of_Generation_Sequence_Request. */
export class LLM_Set_End_Of_Generation_Sequence_Request {

    /**
     * Constructs a new LLM_Set_End_Of_Generation_Sequence_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Set_End_Of_Generation_Sequence_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Set_End_Of_Generation_Sequence_Request endOfGenerationSequenceTokens. */
    endOfGenerationSequenceTokens: number[];

    /**
     * Creates a new LLM_Set_End_Of_Generation_Sequence_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_End_Of_Generation_Sequence_Request instance
     */
    static create(properties: LLM_Set_End_Of_Generation_Sequence_Request.$Shape): LLM_Set_End_Of_Generation_Sequence_Request & LLM_Set_End_Of_Generation_Sequence_Request.$Shape;
    static create(properties?: LLM_Set_End_Of_Generation_Sequence_Request.$Properties): LLM_Set_End_Of_Generation_Sequence_Request;

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Request message. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @param message LLM_Set_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Set_End_Of_Generation_Sequence_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Request message, length delimited. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @param message LLM_Set_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Set_End_Of_Generation_Sequence_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request & LLM_Set_End_Of_Generation_Sequence_Request.$Shape} LLM_Set_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_End_Of_Generation_Sequence_Request & LLM_Set_End_Of_Generation_Sequence_Request.$Shape;

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request & LLM_Set_End_Of_Generation_Sequence_Request.$Shape} LLM_Set_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_End_Of_Generation_Sequence_Request & LLM_Set_End_Of_Generation_Sequence_Request.$Shape;

    /**
     * Verifies a LLM_Set_End_Of_Generation_Sequence_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_End_Of_Generation_Sequence_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_End_Of_Generation_Sequence_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Set_End_Of_Generation_Sequence_Request;

    /**
     * Creates a plain object from a LLM_Set_End_Of_Generation_Sequence_Request message. Also converts values to other types if specified.
     * @param message LLM_Set_End_Of_Generation_Sequence_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Set_End_Of_Generation_Sequence_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_End_Of_Generation_Sequence_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Set_End_Of_Generation_Sequence_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Set_End_Of_Generation_Sequence_Request {

    /** Properties of a LLM_Set_End_Of_Generation_Sequence_Request. */
    interface $Properties {

        /** LLM_Set_End_Of_Generation_Sequence_Request endOfGenerationSequenceTokens */
        endOfGenerationSequenceTokens?: (number[]|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Set_End_Of_Generation_Sequence_Request. */
    type $Shape = LLM_Set_End_Of_Generation_Sequence_Request.$Properties;
}

/**
 * Properties of a LLM_Generator_Release_Request.
 * @deprecated Use LLM_Generator_Release_Request.$Properties instead.
 */
export interface ILLM_Generator_Release_Request extends LLM_Generator_Release_Request.$Properties {
}

/** Represents a LLM_Generator_Release_Request. */
export class LLM_Generator_Release_Request {

    /**
     * Constructs a new LLM_Generator_Release_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Release_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Generator_Release_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Release_Request instance
     */
    static create(properties: LLM_Generator_Release_Request.$Shape): LLM_Generator_Release_Request & LLM_Generator_Release_Request.$Shape;
    static create(properties?: LLM_Generator_Release_Request.$Properties): LLM_Generator_Release_Request;

    /**
     * Encodes the specified LLM_Generator_Release_Request message. Does not implicitly {@link LLM_Generator_Release_Request.verify|verify} messages.
     * @param message LLM_Generator_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Release_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Release_Request message, length delimited. Does not implicitly {@link LLM_Generator_Release_Request.verify|verify} messages.
     * @param message LLM_Generator_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Release_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Release_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Release_Request & LLM_Generator_Release_Request.$Shape} LLM_Generator_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Release_Request & LLM_Generator_Release_Request.$Shape;

    /**
     * Decodes a LLM_Generator_Release_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Release_Request & LLM_Generator_Release_Request.$Shape} LLM_Generator_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Release_Request & LLM_Generator_Release_Request.$Shape;

    /**
     * Verifies a LLM_Generator_Release_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Release_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Release_Request;

    /**
     * Creates a plain object from a LLM_Generator_Release_Request message. Also converts values to other types if specified.
     * @param message LLM_Generator_Release_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Release_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Release_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Release_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Release_Request {

    /** Properties of a LLM_Generator_Release_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Release_Request. */
    type $Shape = LLM_Generator_Release_Request.$Properties;
}

/**
 * Properties of a LLM_Generator_Release_Reply.
 * @deprecated Use LLM_Generator_Release_Reply.$Properties instead.
 */
export interface ILLM_Generator_Release_Reply extends LLM_Generator_Release_Reply.$Properties {
}

/** Represents a LLM_Generator_Release_Reply. */
export class LLM_Generator_Release_Reply {

    /**
     * Constructs a new LLM_Generator_Release_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Generator_Release_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Generator_Release_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Generator_Release_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Generator_Release_Reply instance
     */
    static create(properties: LLM_Generator_Release_Reply.$Shape): LLM_Generator_Release_Reply & LLM_Generator_Release_Reply.$Shape;
    static create(properties?: LLM_Generator_Release_Reply.$Properties): LLM_Generator_Release_Reply;

    /**
     * Encodes the specified LLM_Generator_Release_Reply message. Does not implicitly {@link LLM_Generator_Release_Reply.verify|verify} messages.
     * @param message LLM_Generator_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Generator_Release_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Generator_Release_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Release_Reply.verify|verify} messages.
     * @param message LLM_Generator_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Generator_Release_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Generator_Release_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Generator_Release_Reply & LLM_Generator_Release_Reply.$Shape} LLM_Generator_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Generator_Release_Reply & LLM_Generator_Release_Reply.$Shape;

    /**
     * Decodes a LLM_Generator_Release_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Generator_Release_Reply & LLM_Generator_Release_Reply.$Shape} LLM_Generator_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Generator_Release_Reply & LLM_Generator_Release_Reply.$Shape;

    /**
     * Verifies a LLM_Generator_Release_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Generator_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Generator_Release_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Generator_Release_Reply;

    /**
     * Creates a plain object from a LLM_Generator_Release_Reply message. Also converts values to other types if specified.
     * @param message LLM_Generator_Release_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Generator_Release_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Generator_Release_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Generator_Release_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Generator_Release_Reply {

    /** Properties of a LLM_Generator_Release_Reply. */
    interface $Properties {

        /** LLM_Generator_Release_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Generator_Release_Reply. */
    type $Shape = LLM_Generator_Release_Reply.$Properties;
}

/**
 * Properties of a LLM_Set_End_Of_Generation_Sequence_Reply.
 * @deprecated Use LLM_Set_End_Of_Generation_Sequence_Reply.$Properties instead.
 */
export interface ILLM_Set_End_Of_Generation_Sequence_Reply extends LLM_Set_End_Of_Generation_Sequence_Reply.$Properties {
}

/** Represents a LLM_Set_End_Of_Generation_Sequence_Reply. */
export class LLM_Set_End_Of_Generation_Sequence_Reply {

    /**
     * Constructs a new LLM_Set_End_Of_Generation_Sequence_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Set_End_Of_Generation_Sequence_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Set_End_Of_Generation_Sequence_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Set_End_Of_Generation_Sequence_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_End_Of_Generation_Sequence_Reply instance
     */
    static create(properties: LLM_Set_End_Of_Generation_Sequence_Reply.$Shape): LLM_Set_End_Of_Generation_Sequence_Reply & LLM_Set_End_Of_Generation_Sequence_Reply.$Shape;
    static create(properties?: LLM_Set_End_Of_Generation_Sequence_Reply.$Properties): LLM_Set_End_Of_Generation_Sequence_Reply;

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Reply message. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @param message LLM_Set_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Set_End_Of_Generation_Sequence_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Reply message, length delimited. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @param message LLM_Set_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Set_End_Of_Generation_Sequence_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply & LLM_Set_End_Of_Generation_Sequence_Reply.$Shape} LLM_Set_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_End_Of_Generation_Sequence_Reply & LLM_Set_End_Of_Generation_Sequence_Reply.$Shape;

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply & LLM_Set_End_Of_Generation_Sequence_Reply.$Shape} LLM_Set_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_End_Of_Generation_Sequence_Reply & LLM_Set_End_Of_Generation_Sequence_Reply.$Shape;

    /**
     * Verifies a LLM_Set_End_Of_Generation_Sequence_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_End_Of_Generation_Sequence_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_End_Of_Generation_Sequence_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Set_End_Of_Generation_Sequence_Reply;

    /**
     * Creates a plain object from a LLM_Set_End_Of_Generation_Sequence_Reply message. Also converts values to other types if specified.
     * @param message LLM_Set_End_Of_Generation_Sequence_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Set_End_Of_Generation_Sequence_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_End_Of_Generation_Sequence_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Set_End_Of_Generation_Sequence_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Set_End_Of_Generation_Sequence_Reply {

    /** Properties of a LLM_Set_End_Of_Generation_Sequence_Reply. */
    interface $Properties {

        /** LLM_Set_End_Of_Generation_Sequence_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Set_End_Of_Generation_Sequence_Reply. */
    type $Shape = LLM_Set_End_Of_Generation_Sequence_Reply.$Properties;
}

/**
 * Properties of a LLM_Get_End_Of_Generation_Sequence_Request.
 * @deprecated Use LLM_Get_End_Of_Generation_Sequence_Request.$Properties instead.
 */
export interface ILLM_Get_End_Of_Generation_Sequence_Request extends LLM_Get_End_Of_Generation_Sequence_Request.$Properties {
}

/** Represents a LLM_Get_End_Of_Generation_Sequence_Request. */
export class LLM_Get_End_Of_Generation_Sequence_Request {

    /**
     * Constructs a new LLM_Get_End_Of_Generation_Sequence_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_End_Of_Generation_Sequence_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Get_End_Of_Generation_Sequence_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_End_Of_Generation_Sequence_Request instance
     */
    static create(properties: LLM_Get_End_Of_Generation_Sequence_Request.$Shape): LLM_Get_End_Of_Generation_Sequence_Request & LLM_Get_End_Of_Generation_Sequence_Request.$Shape;
    static create(properties?: LLM_Get_End_Of_Generation_Sequence_Request.$Properties): LLM_Get_End_Of_Generation_Sequence_Request;

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Request message. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @param message LLM_Get_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_End_Of_Generation_Sequence_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Request message, length delimited. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @param message LLM_Get_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_End_Of_Generation_Sequence_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request & LLM_Get_End_Of_Generation_Sequence_Request.$Shape} LLM_Get_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_End_Of_Generation_Sequence_Request & LLM_Get_End_Of_Generation_Sequence_Request.$Shape;

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request & LLM_Get_End_Of_Generation_Sequence_Request.$Shape} LLM_Get_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_End_Of_Generation_Sequence_Request & LLM_Get_End_Of_Generation_Sequence_Request.$Shape;

    /**
     * Verifies a LLM_Get_End_Of_Generation_Sequence_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_End_Of_Generation_Sequence_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_End_Of_Generation_Sequence_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_End_Of_Generation_Sequence_Request;

    /**
     * Creates a plain object from a LLM_Get_End_Of_Generation_Sequence_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_End_Of_Generation_Sequence_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_End_Of_Generation_Sequence_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_End_Of_Generation_Sequence_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_End_Of_Generation_Sequence_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_End_Of_Generation_Sequence_Request {

    /** Properties of a LLM_Get_End_Of_Generation_Sequence_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_End_Of_Generation_Sequence_Request. */
    type $Shape = LLM_Get_End_Of_Generation_Sequence_Request.$Properties;
}

/**
 * Properties of a LLM_Get_End_Of_Generation_Sequence_Reply.
 * @deprecated Use LLM_Get_End_Of_Generation_Sequence_Reply.$Properties instead.
 */
export interface ILLM_Get_End_Of_Generation_Sequence_Reply extends LLM_Get_End_Of_Generation_Sequence_Reply.$Properties {
}

/** Represents a LLM_Get_End_Of_Generation_Sequence_Reply. */
export class LLM_Get_End_Of_Generation_Sequence_Reply {

    /**
     * Constructs a new LLM_Get_End_Of_Generation_Sequence_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_End_Of_Generation_Sequence_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequence. */
    endOfGenerationSequence: string;

    /** LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequenceTokens. */
    endOfGenerationSequenceTokens: number[];

    /** LLM_Get_End_Of_Generation_Sequence_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Get_End_Of_Generation_Sequence_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_End_Of_Generation_Sequence_Reply instance
     */
    static create(properties: LLM_Get_End_Of_Generation_Sequence_Reply.$Shape): LLM_Get_End_Of_Generation_Sequence_Reply & LLM_Get_End_Of_Generation_Sequence_Reply.$Shape;
    static create(properties?: LLM_Get_End_Of_Generation_Sequence_Reply.$Properties): LLM_Get_End_Of_Generation_Sequence_Reply;

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Reply message. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @param message LLM_Get_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_End_Of_Generation_Sequence_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Reply message, length delimited. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @param message LLM_Get_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_End_Of_Generation_Sequence_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply & LLM_Get_End_Of_Generation_Sequence_Reply.$Shape} LLM_Get_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_End_Of_Generation_Sequence_Reply & LLM_Get_End_Of_Generation_Sequence_Reply.$Shape;

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply & LLM_Get_End_Of_Generation_Sequence_Reply.$Shape} LLM_Get_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_End_Of_Generation_Sequence_Reply & LLM_Get_End_Of_Generation_Sequence_Reply.$Shape;

    /**
     * Verifies a LLM_Get_End_Of_Generation_Sequence_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_End_Of_Generation_Sequence_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_End_Of_Generation_Sequence_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_End_Of_Generation_Sequence_Reply;

    /**
     * Creates a plain object from a LLM_Get_End_Of_Generation_Sequence_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_End_Of_Generation_Sequence_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_End_Of_Generation_Sequence_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_End_Of_Generation_Sequence_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_End_Of_Generation_Sequence_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_End_Of_Generation_Sequence_Reply {

    /** Properties of a LLM_Get_End_Of_Generation_Sequence_Reply. */
    interface $Properties {

        /** LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequence */
        endOfGenerationSequence?: (string|null);

        /** LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequenceTokens */
        endOfGenerationSequenceTokens?: (number[]|null);

        /** LLM_Get_End_Of_Generation_Sequence_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_End_Of_Generation_Sequence_Reply. */
    type $Shape = LLM_Get_End_Of_Generation_Sequence_Reply.$Properties;
}

/**
 * Properties of a LLM_Set_Stop_Tokens_Request.
 * @deprecated Use LLM_Set_Stop_Tokens_Request.$Properties instead.
 */
export interface ILLM_Set_Stop_Tokens_Request extends LLM_Set_Stop_Tokens_Request.$Properties {
}

/** Represents a LLM_Set_Stop_Tokens_Request. */
export class LLM_Set_Stop_Tokens_Request {

    /**
     * Constructs a new LLM_Set_Stop_Tokens_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Set_Stop_Tokens_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Set_Stop_Tokens_Request tokenizedStopTokens. */
    tokenizedStopTokens: TokenizedSequence.$Properties[];

    /**
     * Creates a new LLM_Set_Stop_Tokens_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_Stop_Tokens_Request instance
     */
    static create(properties: LLM_Set_Stop_Tokens_Request.$Shape): LLM_Set_Stop_Tokens_Request & LLM_Set_Stop_Tokens_Request.$Shape;
    static create(properties?: LLM_Set_Stop_Tokens_Request.$Properties): LLM_Set_Stop_Tokens_Request;

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Request message. Does not implicitly {@link LLM_Set_Stop_Tokens_Request.verify|verify} messages.
     * @param message LLM_Set_Stop_Tokens_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Set_Stop_Tokens_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Request message, length delimited. Does not implicitly {@link LLM_Set_Stop_Tokens_Request.verify|verify} messages.
     * @param message LLM_Set_Stop_Tokens_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Set_Stop_Tokens_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_Stop_Tokens_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Set_Stop_Tokens_Request & LLM_Set_Stop_Tokens_Request.$Shape} LLM_Set_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_Stop_Tokens_Request & LLM_Set_Stop_Tokens_Request.$Shape;

    /**
     * Decodes a LLM_Set_Stop_Tokens_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Set_Stop_Tokens_Request & LLM_Set_Stop_Tokens_Request.$Shape} LLM_Set_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_Stop_Tokens_Request & LLM_Set_Stop_Tokens_Request.$Shape;

    /**
     * Verifies a LLM_Set_Stop_Tokens_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_Stop_Tokens_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_Stop_Tokens_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Set_Stop_Tokens_Request;

    /**
     * Creates a plain object from a LLM_Set_Stop_Tokens_Request message. Also converts values to other types if specified.
     * @param message LLM_Set_Stop_Tokens_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Set_Stop_Tokens_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_Stop_Tokens_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Set_Stop_Tokens_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Set_Stop_Tokens_Request {

    /** Properties of a LLM_Set_Stop_Tokens_Request. */
    interface $Properties {

        /** LLM_Set_Stop_Tokens_Request tokenizedStopTokens */
        tokenizedStopTokens?: (TokenizedSequence.$Properties[]|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Set_Stop_Tokens_Request. */
    type $Shape = LLM_Set_Stop_Tokens_Request.$Properties;
}

/**
 * Properties of a TokenizedSequence.
 * @deprecated Use TokenizedSequence.$Properties instead.
 */
export interface ITokenizedSequence extends TokenizedSequence.$Properties {
}

/** Represents a TokenizedSequence. */
export class TokenizedSequence {

    /**
     * Constructs a new TokenizedSequence.
     * @param [properties] Properties to set
     */
    constructor(properties?: TokenizedSequence.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** TokenizedSequence tokens. */
    tokens: number[];

    /**
     * Creates a new TokenizedSequence instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TokenizedSequence instance
     */
    static create(properties: TokenizedSequence.$Shape): TokenizedSequence & TokenizedSequence.$Shape;
    static create(properties?: TokenizedSequence.$Properties): TokenizedSequence;

    /**
     * Encodes the specified TokenizedSequence message. Does not implicitly {@link TokenizedSequence.verify|verify} messages.
     * @param message TokenizedSequence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: TokenizedSequence.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TokenizedSequence message, length delimited. Does not implicitly {@link TokenizedSequence.verify|verify} messages.
     * @param message TokenizedSequence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: TokenizedSequence.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TokenizedSequence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {TokenizedSequence & TokenizedSequence.$Shape} TokenizedSequence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TokenizedSequence & TokenizedSequence.$Shape;

    /**
     * Decodes a TokenizedSequence message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {TokenizedSequence & TokenizedSequence.$Shape} TokenizedSequence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TokenizedSequence & TokenizedSequence.$Shape;

    /**
     * Verifies a TokenizedSequence message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TokenizedSequence message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TokenizedSequence
     */
    static fromObject(object: { [k: string]: any }): TokenizedSequence;

    /**
     * Creates a plain object from a TokenizedSequence message. Also converts values to other types if specified.
     * @param message TokenizedSequence
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: TokenizedSequence, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TokenizedSequence to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for TokenizedSequence
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace TokenizedSequence {

    /** Properties of a TokenizedSequence. */
    interface $Properties {

        /** TokenizedSequence tokens */
        tokens?: (number[]|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a TokenizedSequence. */
    type $Shape = TokenizedSequence.$Properties;
}

/**
 * Properties of a LLM_Set_Stop_Tokens_Reply.
 * @deprecated Use LLM_Set_Stop_Tokens_Reply.$Properties instead.
 */
export interface ILLM_Set_Stop_Tokens_Reply extends LLM_Set_Stop_Tokens_Reply.$Properties {
}

/** Represents a LLM_Set_Stop_Tokens_Reply. */
export class LLM_Set_Stop_Tokens_Reply {

    /**
     * Constructs a new LLM_Set_Stop_Tokens_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Set_Stop_Tokens_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Set_Stop_Tokens_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Set_Stop_Tokens_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Set_Stop_Tokens_Reply instance
     */
    static create(properties: LLM_Set_Stop_Tokens_Reply.$Shape): LLM_Set_Stop_Tokens_Reply & LLM_Set_Stop_Tokens_Reply.$Shape;
    static create(properties?: LLM_Set_Stop_Tokens_Reply.$Properties): LLM_Set_Stop_Tokens_Reply;

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Reply message. Does not implicitly {@link LLM_Set_Stop_Tokens_Reply.verify|verify} messages.
     * @param message LLM_Set_Stop_Tokens_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Set_Stop_Tokens_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Reply message, length delimited. Does not implicitly {@link LLM_Set_Stop_Tokens_Reply.verify|verify} messages.
     * @param message LLM_Set_Stop_Tokens_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Set_Stop_Tokens_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Set_Stop_Tokens_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Set_Stop_Tokens_Reply & LLM_Set_Stop_Tokens_Reply.$Shape} LLM_Set_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Set_Stop_Tokens_Reply & LLM_Set_Stop_Tokens_Reply.$Shape;

    /**
     * Decodes a LLM_Set_Stop_Tokens_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Set_Stop_Tokens_Reply & LLM_Set_Stop_Tokens_Reply.$Shape} LLM_Set_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Set_Stop_Tokens_Reply & LLM_Set_Stop_Tokens_Reply.$Shape;

    /**
     * Verifies a LLM_Set_Stop_Tokens_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Set_Stop_Tokens_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Set_Stop_Tokens_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Set_Stop_Tokens_Reply;

    /**
     * Creates a plain object from a LLM_Set_Stop_Tokens_Reply message. Also converts values to other types if specified.
     * @param message LLM_Set_Stop_Tokens_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Set_Stop_Tokens_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Set_Stop_Tokens_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Set_Stop_Tokens_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Set_Stop_Tokens_Reply {

    /** Properties of a LLM_Set_Stop_Tokens_Reply. */
    interface $Properties {

        /** LLM_Set_Stop_Tokens_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Set_Stop_Tokens_Reply. */
    type $Shape = LLM_Set_Stop_Tokens_Reply.$Properties;
}

/**
 * Properties of a LLM_Get_Stop_Tokens_Request.
 * @deprecated Use LLM_Get_Stop_Tokens_Request.$Properties instead.
 */
export interface ILLM_Get_Stop_Tokens_Request extends LLM_Get_Stop_Tokens_Request.$Properties {
}

/** Represents a LLM_Get_Stop_Tokens_Request. */
export class LLM_Get_Stop_Tokens_Request {

    /**
     * Constructs a new LLM_Get_Stop_Tokens_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Stop_Tokens_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Get_Stop_Tokens_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Stop_Tokens_Request instance
     */
    static create(properties: LLM_Get_Stop_Tokens_Request.$Shape): LLM_Get_Stop_Tokens_Request & LLM_Get_Stop_Tokens_Request.$Shape;
    static create(properties?: LLM_Get_Stop_Tokens_Request.$Properties): LLM_Get_Stop_Tokens_Request;

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Request message. Does not implicitly {@link LLM_Get_Stop_Tokens_Request.verify|verify} messages.
     * @param message LLM_Get_Stop_Tokens_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Stop_Tokens_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Request message, length delimited. Does not implicitly {@link LLM_Get_Stop_Tokens_Request.verify|verify} messages.
     * @param message LLM_Get_Stop_Tokens_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Stop_Tokens_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Stop_Tokens_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Stop_Tokens_Request & LLM_Get_Stop_Tokens_Request.$Shape} LLM_Get_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Stop_Tokens_Request & LLM_Get_Stop_Tokens_Request.$Shape;

    /**
     * Decodes a LLM_Get_Stop_Tokens_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Stop_Tokens_Request & LLM_Get_Stop_Tokens_Request.$Shape} LLM_Get_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Stop_Tokens_Request & LLM_Get_Stop_Tokens_Request.$Shape;

    /**
     * Verifies a LLM_Get_Stop_Tokens_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Stop_Tokens_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Stop_Tokens_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Stop_Tokens_Request;

    /**
     * Creates a plain object from a LLM_Get_Stop_Tokens_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Stop_Tokens_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Stop_Tokens_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Stop_Tokens_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Stop_Tokens_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Stop_Tokens_Request {

    /** Properties of a LLM_Get_Stop_Tokens_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Stop_Tokens_Request. */
    type $Shape = LLM_Get_Stop_Tokens_Request.$Properties;
}

/**
 * Properties of a LLM_Get_Stop_Tokens_Reply.
 * @deprecated Use LLM_Get_Stop_Tokens_Reply.$Properties instead.
 */
export interface ILLM_Get_Stop_Tokens_Reply extends LLM_Get_Stop_Tokens_Reply.$Properties {
}

/** Represents a LLM_Get_Stop_Tokens_Reply. */
export class LLM_Get_Stop_Tokens_Reply {

    /**
     * Constructs a new LLM_Get_Stop_Tokens_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Stop_Tokens_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Get_Stop_Tokens_Reply stopTokens. */
    stopTokens: string[];

    /** LLM_Get_Stop_Tokens_Reply tokenizedStopTokens. */
    tokenizedStopTokens: TokenizedSequence.$Properties[];

    /** LLM_Get_Stop_Tokens_Reply status. */
    status: number;

    /**
     * Creates a new LLM_Get_Stop_Tokens_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Stop_Tokens_Reply instance
     */
    static create(properties: LLM_Get_Stop_Tokens_Reply.$Shape): LLM_Get_Stop_Tokens_Reply & LLM_Get_Stop_Tokens_Reply.$Shape;
    static create(properties?: LLM_Get_Stop_Tokens_Reply.$Properties): LLM_Get_Stop_Tokens_Reply;

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Reply message. Does not implicitly {@link LLM_Get_Stop_Tokens_Reply.verify|verify} messages.
     * @param message LLM_Get_Stop_Tokens_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Stop_Tokens_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Reply message, length delimited. Does not implicitly {@link LLM_Get_Stop_Tokens_Reply.verify|verify} messages.
     * @param message LLM_Get_Stop_Tokens_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Stop_Tokens_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Stop_Tokens_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Stop_Tokens_Reply & LLM_Get_Stop_Tokens_Reply.$Shape} LLM_Get_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Stop_Tokens_Reply & LLM_Get_Stop_Tokens_Reply.$Shape;

    /**
     * Decodes a LLM_Get_Stop_Tokens_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Stop_Tokens_Reply & LLM_Get_Stop_Tokens_Reply.$Shape} LLM_Get_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Stop_Tokens_Reply & LLM_Get_Stop_Tokens_Reply.$Shape;

    /**
     * Verifies a LLM_Get_Stop_Tokens_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Stop_Tokens_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Stop_Tokens_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Stop_Tokens_Reply;

    /**
     * Creates a plain object from a LLM_Get_Stop_Tokens_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Stop_Tokens_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Stop_Tokens_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Stop_Tokens_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Stop_Tokens_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Stop_Tokens_Reply {

    /** Properties of a LLM_Get_Stop_Tokens_Reply. */
    interface $Properties {

        /** LLM_Get_Stop_Tokens_Reply stopTokens */
        stopTokens?: (string[]|null);

        /** LLM_Get_Stop_Tokens_Reply tokenizedStopTokens */
        tokenizedStopTokens?: (TokenizedSequence.$Properties[]|null);

        /** LLM_Get_Stop_Tokens_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Stop_Tokens_Reply. */
    type $Shape = LLM_Get_Stop_Tokens_Reply.$Properties;
}

/**
 * Properties of a LLM_Get_Context_Usage_Size_Request.
 * @deprecated Use LLM_Get_Context_Usage_Size_Request.$Properties instead.
 */
export interface ILLM_Get_Context_Usage_Size_Request extends LLM_Get_Context_Usage_Size_Request.$Properties {
}

/** Represents a LLM_Get_Context_Usage_Size_Request. */
export class LLM_Get_Context_Usage_Size_Request {

    /**
     * Constructs a new LLM_Get_Context_Usage_Size_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Context_Usage_Size_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Get_Context_Usage_Size_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Context_Usage_Size_Request instance
     */
    static create(properties: LLM_Get_Context_Usage_Size_Request.$Shape): LLM_Get_Context_Usage_Size_Request & LLM_Get_Context_Usage_Size_Request.$Shape;
    static create(properties?: LLM_Get_Context_Usage_Size_Request.$Properties): LLM_Get_Context_Usage_Size_Request;

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Request message. Does not implicitly {@link LLM_Get_Context_Usage_Size_Request.verify|verify} messages.
     * @param message LLM_Get_Context_Usage_Size_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Context_Usage_Size_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Request message, length delimited. Does not implicitly {@link LLM_Get_Context_Usage_Size_Request.verify|verify} messages.
     * @param message LLM_Get_Context_Usage_Size_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Context_Usage_Size_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Usage_Size_Request & LLM_Get_Context_Usage_Size_Request.$Shape} LLM_Get_Context_Usage_Size_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Context_Usage_Size_Request & LLM_Get_Context_Usage_Size_Request.$Shape;

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Usage_Size_Request & LLM_Get_Context_Usage_Size_Request.$Shape} LLM_Get_Context_Usage_Size_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Context_Usage_Size_Request & LLM_Get_Context_Usage_Size_Request.$Shape;

    /**
     * Verifies a LLM_Get_Context_Usage_Size_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Context_Usage_Size_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Context_Usage_Size_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Context_Usage_Size_Request;

    /**
     * Creates a plain object from a LLM_Get_Context_Usage_Size_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Context_Usage_Size_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Context_Usage_Size_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Context_Usage_Size_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Context_Usage_Size_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Context_Usage_Size_Request {

    /** Properties of a LLM_Get_Context_Usage_Size_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Context_Usage_Size_Request. */
    type $Shape = LLM_Get_Context_Usage_Size_Request.$Properties;
}

/**
 * Properties of a LLM_Get_Context_Usage_Size_Reply.
 * @deprecated Use LLM_Get_Context_Usage_Size_Reply.$Properties instead.
 */
export interface ILLM_Get_Context_Usage_Size_Reply extends LLM_Get_Context_Usage_Size_Reply.$Properties {
}

/** Represents a LLM_Get_Context_Usage_Size_Reply. */
export class LLM_Get_Context_Usage_Size_Reply {

    /**
     * Constructs a new LLM_Get_Context_Usage_Size_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Context_Usage_Size_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Get_Context_Usage_Size_Reply status. */
    status: number;

    /** LLM_Get_Context_Usage_Size_Reply contextUsage. */
    contextUsage: number;

    /**
     * Creates a new LLM_Get_Context_Usage_Size_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Context_Usage_Size_Reply instance
     */
    static create(properties: LLM_Get_Context_Usage_Size_Reply.$Shape): LLM_Get_Context_Usage_Size_Reply & LLM_Get_Context_Usage_Size_Reply.$Shape;
    static create(properties?: LLM_Get_Context_Usage_Size_Reply.$Properties): LLM_Get_Context_Usage_Size_Reply;

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Reply message. Does not implicitly {@link LLM_Get_Context_Usage_Size_Reply.verify|verify} messages.
     * @param message LLM_Get_Context_Usage_Size_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Context_Usage_Size_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Reply message, length delimited. Does not implicitly {@link LLM_Get_Context_Usage_Size_Reply.verify|verify} messages.
     * @param message LLM_Get_Context_Usage_Size_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Context_Usage_Size_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Usage_Size_Reply & LLM_Get_Context_Usage_Size_Reply.$Shape} LLM_Get_Context_Usage_Size_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Context_Usage_Size_Reply & LLM_Get_Context_Usage_Size_Reply.$Shape;

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Usage_Size_Reply & LLM_Get_Context_Usage_Size_Reply.$Shape} LLM_Get_Context_Usage_Size_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Context_Usage_Size_Reply & LLM_Get_Context_Usage_Size_Reply.$Shape;

    /**
     * Verifies a LLM_Get_Context_Usage_Size_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Context_Usage_Size_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Context_Usage_Size_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Context_Usage_Size_Reply;

    /**
     * Creates a plain object from a LLM_Get_Context_Usage_Size_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Context_Usage_Size_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Context_Usage_Size_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Context_Usage_Size_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Context_Usage_Size_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Context_Usage_Size_Reply {

    /** Properties of a LLM_Get_Context_Usage_Size_Reply. */
    interface $Properties {

        /** LLM_Get_Context_Usage_Size_Reply status */
        status?: (number|null);

        /** LLM_Get_Context_Usage_Size_Reply contextUsage */
        contextUsage?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Context_Usage_Size_Reply. */
    type $Shape = LLM_Get_Context_Usage_Size_Reply.$Properties;
}

/**
 * Properties of a LLM_Get_Max_Context_Capacity_Request.
 * @deprecated Use LLM_Get_Max_Context_Capacity_Request.$Properties instead.
 */
export interface ILLM_Get_Max_Context_Capacity_Request extends LLM_Get_Max_Context_Capacity_Request.$Properties {
}

/** Represents a LLM_Get_Max_Context_Capacity_Request. */
export class LLM_Get_Max_Context_Capacity_Request {

    /**
     * Constructs a new LLM_Get_Max_Context_Capacity_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Max_Context_Capacity_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new LLM_Get_Max_Context_Capacity_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Max_Context_Capacity_Request instance
     */
    static create(properties: LLM_Get_Max_Context_Capacity_Request.$Shape): LLM_Get_Max_Context_Capacity_Request & LLM_Get_Max_Context_Capacity_Request.$Shape;
    static create(properties?: LLM_Get_Max_Context_Capacity_Request.$Properties): LLM_Get_Max_Context_Capacity_Request;

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Request message. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Request.verify|verify} messages.
     * @param message LLM_Get_Max_Context_Capacity_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Max_Context_Capacity_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Request message, length delimited. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Request.verify|verify} messages.
     * @param message LLM_Get_Max_Context_Capacity_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Max_Context_Capacity_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Max_Context_Capacity_Request & LLM_Get_Max_Context_Capacity_Request.$Shape} LLM_Get_Max_Context_Capacity_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Max_Context_Capacity_Request & LLM_Get_Max_Context_Capacity_Request.$Shape;

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Max_Context_Capacity_Request & LLM_Get_Max_Context_Capacity_Request.$Shape} LLM_Get_Max_Context_Capacity_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Max_Context_Capacity_Request & LLM_Get_Max_Context_Capacity_Request.$Shape;

    /**
     * Verifies a LLM_Get_Max_Context_Capacity_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Max_Context_Capacity_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Max_Context_Capacity_Request
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Max_Context_Capacity_Request;

    /**
     * Creates a plain object from a LLM_Get_Max_Context_Capacity_Request message. Also converts values to other types if specified.
     * @param message LLM_Get_Max_Context_Capacity_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Max_Context_Capacity_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Max_Context_Capacity_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Max_Context_Capacity_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Max_Context_Capacity_Request {

    /** Properties of a LLM_Get_Max_Context_Capacity_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Max_Context_Capacity_Request. */
    type $Shape = LLM_Get_Max_Context_Capacity_Request.$Properties;
}

/**
 * Properties of a LLM_Get_Max_Context_Capacity_Reply.
 * @deprecated Use LLM_Get_Max_Context_Capacity_Reply.$Properties instead.
 */
export interface ILLM_Get_Max_Context_Capacity_Reply extends LLM_Get_Max_Context_Capacity_Reply.$Properties {
}

/** Represents a LLM_Get_Max_Context_Capacity_Reply. */
export class LLM_Get_Max_Context_Capacity_Reply {

    /**
     * Constructs a new LLM_Get_Max_Context_Capacity_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: LLM_Get_Max_Context_Capacity_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** LLM_Get_Max_Context_Capacity_Reply status. */
    status: number;

    /** LLM_Get_Max_Context_Capacity_Reply maxContextCapacity. */
    maxContextCapacity: number;

    /**
     * Creates a new LLM_Get_Max_Context_Capacity_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LLM_Get_Max_Context_Capacity_Reply instance
     */
    static create(properties: LLM_Get_Max_Context_Capacity_Reply.$Shape): LLM_Get_Max_Context_Capacity_Reply & LLM_Get_Max_Context_Capacity_Reply.$Shape;
    static create(properties?: LLM_Get_Max_Context_Capacity_Reply.$Properties): LLM_Get_Max_Context_Capacity_Reply;

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Reply message. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Reply.verify|verify} messages.
     * @param message LLM_Get_Max_Context_Capacity_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: LLM_Get_Max_Context_Capacity_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Reply message, length delimited. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Reply.verify|verify} messages.
     * @param message LLM_Get_Max_Context_Capacity_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: LLM_Get_Max_Context_Capacity_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {LLM_Get_Max_Context_Capacity_Reply & LLM_Get_Max_Context_Capacity_Reply.$Shape} LLM_Get_Max_Context_Capacity_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LLM_Get_Max_Context_Capacity_Reply & LLM_Get_Max_Context_Capacity_Reply.$Shape;

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {LLM_Get_Max_Context_Capacity_Reply & LLM_Get_Max_Context_Capacity_Reply.$Shape} LLM_Get_Max_Context_Capacity_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LLM_Get_Max_Context_Capacity_Reply & LLM_Get_Max_Context_Capacity_Reply.$Shape;

    /**
     * Verifies a LLM_Get_Max_Context_Capacity_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LLM_Get_Max_Context_Capacity_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LLM_Get_Max_Context_Capacity_Reply
     */
    static fromObject(object: { [k: string]: any }): LLM_Get_Max_Context_Capacity_Reply;

    /**
     * Creates a plain object from a LLM_Get_Max_Context_Capacity_Reply message. Also converts values to other types if specified.
     * @param message LLM_Get_Max_Context_Capacity_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: LLM_Get_Max_Context_Capacity_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LLM_Get_Max_Context_Capacity_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for LLM_Get_Max_Context_Capacity_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace LLM_Get_Max_Context_Capacity_Reply {

    /** Properties of a LLM_Get_Max_Context_Capacity_Reply. */
    interface $Properties {

        /** LLM_Get_Max_Context_Capacity_Reply status */
        status?: (number|null);

        /** LLM_Get_Max_Context_Capacity_Reply maxContextCapacity */
        maxContextCapacity?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a LLM_Get_Max_Context_Capacity_Reply. */
    type $Shape = LLM_Get_Max_Context_Capacity_Reply.$Properties;
}

/**
 * Properties of a VLM_Create_Request.
 * @deprecated Use VLM_Create_Request.$Properties instead.
 */
export interface IVLM_Create_Request extends VLM_Create_Request.$Properties {
}

/** Represents a VLM_Create_Request. */
export class VLM_Create_Request {

    /**
     * Constructs a new VLM_Create_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: VLM_Create_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** VLM_Create_Request groupId. */
    groupId: string;

    /** VLM_Create_Request hefPath. */
    hefPath: string;

    /** VLM_Create_Request chunksToTransfer. */
    chunksToTransfer: HefChunkInfo.$Properties[];

    /** VLM_Create_Request tokenizerOnHost. */
    tokenizerOnHost: boolean;

    /** VLM_Create_Request totalHefSize. */
    totalHefSize: (number|Long);

    /**
     * Creates a new VLM_Create_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VLM_Create_Request instance
     */
    static create(properties: VLM_Create_Request.$Shape): VLM_Create_Request & VLM_Create_Request.$Shape;
    static create(properties?: VLM_Create_Request.$Properties): VLM_Create_Request;

    /**
     * Encodes the specified VLM_Create_Request message. Does not implicitly {@link VLM_Create_Request.verify|verify} messages.
     * @param message VLM_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: VLM_Create_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VLM_Create_Request message, length delimited. Does not implicitly {@link VLM_Create_Request.verify|verify} messages.
     * @param message VLM_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: VLM_Create_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VLM_Create_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {VLM_Create_Request & VLM_Create_Request.$Shape} VLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VLM_Create_Request & VLM_Create_Request.$Shape;

    /**
     * Decodes a VLM_Create_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {VLM_Create_Request & VLM_Create_Request.$Shape} VLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VLM_Create_Request & VLM_Create_Request.$Shape;

    /**
     * Verifies a VLM_Create_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VLM_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VLM_Create_Request
     */
    static fromObject(object: { [k: string]: any }): VLM_Create_Request;

    /**
     * Creates a plain object from a VLM_Create_Request message. Also converts values to other types if specified.
     * @param message VLM_Create_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: VLM_Create_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VLM_Create_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for VLM_Create_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace VLM_Create_Request {

    /** Properties of a VLM_Create_Request. */
    interface $Properties {

        /** VLM_Create_Request groupId */
        groupId?: (string|null);

        /** VLM_Create_Request hefPath */
        hefPath?: (string|null);

        /** VLM_Create_Request chunksToTransfer */
        chunksToTransfer?: (HefChunkInfo.$Properties[]|null);

        /** VLM_Create_Request tokenizerOnHost */
        tokenizerOnHost?: (boolean|null);

        /** VLM_Create_Request totalHefSize */
        totalHefSize?: (number|Long|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a VLM_Create_Request. */
    type $Shape = VLM_Create_Request.$Properties;
}

/**
 * Properties of a FrameFormat.
 * @deprecated Use FrameFormat.$Properties instead.
 */
export interface IFrameFormat extends FrameFormat.$Properties {
}

/** Represents a FrameFormat. */
export class FrameFormat {

    /**
     * Constructs a new FrameFormat.
     * @param [properties] Properties to set
     */
    constructor(properties?: FrameFormat.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** FrameFormat formatOrder. */
    formatOrder: number;

    /** FrameFormat formatType. */
    formatType: number;

    /**
     * Creates a new FrameFormat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameFormat instance
     */
    static create(properties: FrameFormat.$Shape): FrameFormat & FrameFormat.$Shape;
    static create(properties?: FrameFormat.$Properties): FrameFormat;

    /**
     * Encodes the specified FrameFormat message. Does not implicitly {@link FrameFormat.verify|verify} messages.
     * @param message FrameFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: FrameFormat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameFormat message, length delimited. Does not implicitly {@link FrameFormat.verify|verify} messages.
     * @param message FrameFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: FrameFormat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameFormat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {FrameFormat & FrameFormat.$Shape} FrameFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameFormat & FrameFormat.$Shape;

    /**
     * Decodes a FrameFormat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {FrameFormat & FrameFormat.$Shape} FrameFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameFormat & FrameFormat.$Shape;

    /**
     * Verifies a FrameFormat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FrameFormat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameFormat
     */
    static fromObject(object: { [k: string]: any }): FrameFormat;

    /**
     * Creates a plain object from a FrameFormat message. Also converts values to other types if specified.
     * @param message FrameFormat
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: FrameFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FrameFormat to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for FrameFormat
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace FrameFormat {

    /** Properties of a FrameFormat. */
    interface $Properties {

        /** FrameFormat formatOrder */
        formatOrder?: (number|null);

        /** FrameFormat formatType */
        formatType?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a FrameFormat. */
    type $Shape = FrameFormat.$Properties;
}

/**
 * Properties of a FrameShape.
 * @deprecated Use FrameShape.$Properties instead.
 */
export interface IFrameShape extends FrameShape.$Properties {
}

/** Represents a FrameShape. */
export class FrameShape {

    /**
     * Constructs a new FrameShape.
     * @param [properties] Properties to set
     */
    constructor(properties?: FrameShape.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** FrameShape height. */
    height: number;

    /** FrameShape width. */
    width: number;

    /** FrameShape features. */
    features: number;

    /**
     * Creates a new FrameShape instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameShape instance
     */
    static create(properties: FrameShape.$Shape): FrameShape & FrameShape.$Shape;
    static create(properties?: FrameShape.$Properties): FrameShape;

    /**
     * Encodes the specified FrameShape message. Does not implicitly {@link FrameShape.verify|verify} messages.
     * @param message FrameShape message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: FrameShape.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameShape message, length delimited. Does not implicitly {@link FrameShape.verify|verify} messages.
     * @param message FrameShape message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: FrameShape.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameShape message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {FrameShape & FrameShape.$Shape} FrameShape
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameShape & FrameShape.$Shape;

    /**
     * Decodes a FrameShape message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {FrameShape & FrameShape.$Shape} FrameShape
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameShape & FrameShape.$Shape;

    /**
     * Verifies a FrameShape message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FrameShape message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameShape
     */
    static fromObject(object: { [k: string]: any }): FrameShape;

    /**
     * Creates a plain object from a FrameShape message. Also converts values to other types if specified.
     * @param message FrameShape
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: FrameShape, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FrameShape to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for FrameShape
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace FrameShape {

    /** Properties of a FrameShape. */
    interface $Properties {

        /** FrameShape height */
        height?: (number|null);

        /** FrameShape width */
        width?: (number|null);

        /** FrameShape features */
        features?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a FrameShape. */
    type $Shape = FrameShape.$Properties;
}

/**
 * Properties of a VLM_Create_Reply.
 * @deprecated Use VLM_Create_Reply.$Properties instead.
 */
export interface IVLM_Create_Reply extends VLM_Create_Reply.$Properties {
}

/** Represents a VLM_Create_Reply. */
export class VLM_Create_Reply {

    /**
     * Constructs a new VLM_Create_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: VLM_Create_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** VLM_Create_Reply status. */
    status: number;

    /** VLM_Create_Reply frameFormat. */
    frameFormat?: (FrameFormat.$Properties|null);

    /** VLM_Create_Reply frameShape. */
    frameShape?: (FrameShape.$Properties|null);

    /** VLM_Create_Reply promptTemplate. */
    promptTemplate: string;

    /** VLM_Create_Reply embeddingFeatures. */
    embeddingFeatures: number;

    /** VLM_Create_Reply imagePadTokenId. */
    imagePadTokenId: number;

    /** VLM_Create_Reply videoPadTokenId. */
    videoPadTokenId: number;

    /** VLM_Create_Reply embeddingsPerFrame. */
    embeddingsPerFrame: number;

    /**
     * Creates a new VLM_Create_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VLM_Create_Reply instance
     */
    static create(properties: VLM_Create_Reply.$Shape): VLM_Create_Reply & VLM_Create_Reply.$Shape;
    static create(properties?: VLM_Create_Reply.$Properties): VLM_Create_Reply;

    /**
     * Encodes the specified VLM_Create_Reply message. Does not implicitly {@link VLM_Create_Reply.verify|verify} messages.
     * @param message VLM_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: VLM_Create_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VLM_Create_Reply message, length delimited. Does not implicitly {@link VLM_Create_Reply.verify|verify} messages.
     * @param message VLM_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: VLM_Create_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VLM_Create_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {VLM_Create_Reply & VLM_Create_Reply.$Shape} VLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VLM_Create_Reply & VLM_Create_Reply.$Shape;

    /**
     * Decodes a VLM_Create_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {VLM_Create_Reply & VLM_Create_Reply.$Shape} VLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VLM_Create_Reply & VLM_Create_Reply.$Shape;

    /**
     * Verifies a VLM_Create_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VLM_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VLM_Create_Reply
     */
    static fromObject(object: { [k: string]: any }): VLM_Create_Reply;

    /**
     * Creates a plain object from a VLM_Create_Reply message. Also converts values to other types if specified.
     * @param message VLM_Create_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: VLM_Create_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VLM_Create_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for VLM_Create_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace VLM_Create_Reply {

    /** Properties of a VLM_Create_Reply. */
    interface $Properties {

        /** VLM_Create_Reply status */
        status?: (number|null);

        /** VLM_Create_Reply frameFormat */
        frameFormat?: (FrameFormat.$Properties|null);

        /** VLM_Create_Reply frameShape */
        frameShape?: (FrameShape.$Properties|null);

        /** VLM_Create_Reply promptTemplate */
        promptTemplate?: (string|null);

        /** VLM_Create_Reply embeddingFeatures */
        embeddingFeatures?: (number|null);

        /** VLM_Create_Reply imagePadTokenId */
        imagePadTokenId?: (number|null);

        /** VLM_Create_Reply videoPadTokenId */
        videoPadTokenId?: (number|null);

        /** VLM_Create_Reply embeddingsPerFrame */
        embeddingsPerFrame?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a VLM_Create_Reply. */
    type $Shape = VLM_Create_Reply.$Properties;
}

/**
 * Properties of a VLM_Generator_Generate_Request.
 * @deprecated Use VLM_Generator_Generate_Request.$Properties instead.
 */
export interface IVLM_Generator_Generate_Request extends VLM_Generator_Generate_Request.$Properties {
}

/** Represents a VLM_Generator_Generate_Request. */
export class VLM_Generator_Generate_Request {

    /**
     * Constructs a new VLM_Generator_Generate_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: VLM_Generator_Generate_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** VLM_Generator_Generate_Request numberOfFrames. */
    numberOfFrames: number;

    /** VLM_Generator_Generate_Request videoFramesCountPerVideo. */
    videoFramesCountPerVideo: number[];

    /**
     * Creates a new VLM_Generator_Generate_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VLM_Generator_Generate_Request instance
     */
    static create(properties: VLM_Generator_Generate_Request.$Shape): VLM_Generator_Generate_Request & VLM_Generator_Generate_Request.$Shape;
    static create(properties?: VLM_Generator_Generate_Request.$Properties): VLM_Generator_Generate_Request;

    /**
     * Encodes the specified VLM_Generator_Generate_Request message. Does not implicitly {@link VLM_Generator_Generate_Request.verify|verify} messages.
     * @param message VLM_Generator_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: VLM_Generator_Generate_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VLM_Generator_Generate_Request message, length delimited. Does not implicitly {@link VLM_Generator_Generate_Request.verify|verify} messages.
     * @param message VLM_Generator_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: VLM_Generator_Generate_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VLM_Generator_Generate_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {VLM_Generator_Generate_Request & VLM_Generator_Generate_Request.$Shape} VLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VLM_Generator_Generate_Request & VLM_Generator_Generate_Request.$Shape;

    /**
     * Decodes a VLM_Generator_Generate_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {VLM_Generator_Generate_Request & VLM_Generator_Generate_Request.$Shape} VLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VLM_Generator_Generate_Request & VLM_Generator_Generate_Request.$Shape;

    /**
     * Verifies a VLM_Generator_Generate_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VLM_Generator_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VLM_Generator_Generate_Request
     */
    static fromObject(object: { [k: string]: any }): VLM_Generator_Generate_Request;

    /**
     * Creates a plain object from a VLM_Generator_Generate_Request message. Also converts values to other types if specified.
     * @param message VLM_Generator_Generate_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: VLM_Generator_Generate_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VLM_Generator_Generate_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for VLM_Generator_Generate_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace VLM_Generator_Generate_Request {

    /** Properties of a VLM_Generator_Generate_Request. */
    interface $Properties {

        /** VLM_Generator_Generate_Request numberOfFrames */
        numberOfFrames?: (number|null);

        /** VLM_Generator_Generate_Request videoFramesCountPerVideo */
        videoFramesCountPerVideo?: (number[]|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a VLM_Generator_Generate_Request. */
    type $Shape = VLM_Generator_Generate_Request.$Properties;
}

/**
 * Properties of a VLM_Generator_Generate_Reply.
 * @deprecated Use VLM_Generator_Generate_Reply.$Properties instead.
 */
export interface IVLM_Generator_Generate_Reply extends VLM_Generator_Generate_Reply.$Properties {
}

/** Represents a VLM_Generator_Generate_Reply. */
export class VLM_Generator_Generate_Reply {

    /**
     * Constructs a new VLM_Generator_Generate_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: VLM_Generator_Generate_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** VLM_Generator_Generate_Reply status. */
    status: number;

    /**
     * Creates a new VLM_Generator_Generate_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VLM_Generator_Generate_Reply instance
     */
    static create(properties: VLM_Generator_Generate_Reply.$Shape): VLM_Generator_Generate_Reply & VLM_Generator_Generate_Reply.$Shape;
    static create(properties?: VLM_Generator_Generate_Reply.$Properties): VLM_Generator_Generate_Reply;

    /**
     * Encodes the specified VLM_Generator_Generate_Reply message. Does not implicitly {@link VLM_Generator_Generate_Reply.verify|verify} messages.
     * @param message VLM_Generator_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: VLM_Generator_Generate_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VLM_Generator_Generate_Reply message, length delimited. Does not implicitly {@link VLM_Generator_Generate_Reply.verify|verify} messages.
     * @param message VLM_Generator_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: VLM_Generator_Generate_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VLM_Generator_Generate_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {VLM_Generator_Generate_Reply & VLM_Generator_Generate_Reply.$Shape} VLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VLM_Generator_Generate_Reply & VLM_Generator_Generate_Reply.$Shape;

    /**
     * Decodes a VLM_Generator_Generate_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {VLM_Generator_Generate_Reply & VLM_Generator_Generate_Reply.$Shape} VLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VLM_Generator_Generate_Reply & VLM_Generator_Generate_Reply.$Shape;

    /**
     * Verifies a VLM_Generator_Generate_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VLM_Generator_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VLM_Generator_Generate_Reply
     */
    static fromObject(object: { [k: string]: any }): VLM_Generator_Generate_Reply;

    /**
     * Creates a plain object from a VLM_Generator_Generate_Reply message. Also converts values to other types if specified.
     * @param message VLM_Generator_Generate_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: VLM_Generator_Generate_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VLM_Generator_Generate_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for VLM_Generator_Generate_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace VLM_Generator_Generate_Reply {

    /** Properties of a VLM_Generator_Generate_Reply. */
    interface $Properties {

        /** VLM_Generator_Generate_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a VLM_Generator_Generate_Reply. */
    type $Shape = VLM_Generator_Generate_Reply.$Properties;
}

/**
 * Properties of a GenAI_Check_Hef_Exists_Request.
 * @deprecated Use GenAI_Check_Hef_Exists_Request.$Properties instead.
 */
export interface IGenAI_Check_Hef_Exists_Request extends GenAI_Check_Hef_Exists_Request.$Properties {
}

/** Represents a GenAI_Check_Hef_Exists_Request. */
export class GenAI_Check_Hef_Exists_Request {

    /**
     * Constructs a new GenAI_Check_Hef_Exists_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: GenAI_Check_Hef_Exists_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** GenAI_Check_Hef_Exists_Request hefPath. */
    hefPath: string;

    /** GenAI_Check_Hef_Exists_Request hash. */
    hash: string;

    /**
     * Creates a new GenAI_Check_Hef_Exists_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenAI_Check_Hef_Exists_Request instance
     */
    static create(properties: GenAI_Check_Hef_Exists_Request.$Shape): GenAI_Check_Hef_Exists_Request & GenAI_Check_Hef_Exists_Request.$Shape;
    static create(properties?: GenAI_Check_Hef_Exists_Request.$Properties): GenAI_Check_Hef_Exists_Request;

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Request message. Does not implicitly {@link GenAI_Check_Hef_Exists_Request.verify|verify} messages.
     * @param message GenAI_Check_Hef_Exists_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: GenAI_Check_Hef_Exists_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Request message, length delimited. Does not implicitly {@link GenAI_Check_Hef_Exists_Request.verify|verify} messages.
     * @param message GenAI_Check_Hef_Exists_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: GenAI_Check_Hef_Exists_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenAI_Check_Hef_Exists_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {GenAI_Check_Hef_Exists_Request & GenAI_Check_Hef_Exists_Request.$Shape} GenAI_Check_Hef_Exists_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenAI_Check_Hef_Exists_Request & GenAI_Check_Hef_Exists_Request.$Shape;

    /**
     * Decodes a GenAI_Check_Hef_Exists_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {GenAI_Check_Hef_Exists_Request & GenAI_Check_Hef_Exists_Request.$Shape} GenAI_Check_Hef_Exists_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenAI_Check_Hef_Exists_Request & GenAI_Check_Hef_Exists_Request.$Shape;

    /**
     * Verifies a GenAI_Check_Hef_Exists_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenAI_Check_Hef_Exists_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenAI_Check_Hef_Exists_Request
     */
    static fromObject(object: { [k: string]: any }): GenAI_Check_Hef_Exists_Request;

    /**
     * Creates a plain object from a GenAI_Check_Hef_Exists_Request message. Also converts values to other types if specified.
     * @param message GenAI_Check_Hef_Exists_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: GenAI_Check_Hef_Exists_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenAI_Check_Hef_Exists_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for GenAI_Check_Hef_Exists_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace GenAI_Check_Hef_Exists_Request {

    /** Properties of a GenAI_Check_Hef_Exists_Request. */
    interface $Properties {

        /** GenAI_Check_Hef_Exists_Request hefPath */
        hefPath?: (string|null);

        /** GenAI_Check_Hef_Exists_Request hash */
        hash?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a GenAI_Check_Hef_Exists_Request. */
    type $Shape = GenAI_Check_Hef_Exists_Request.$Properties;
}

/**
 * Properties of a GenAI_Check_Hef_Exists_Reply.
 * @deprecated Use GenAI_Check_Hef_Exists_Reply.$Properties instead.
 */
export interface IGenAI_Check_Hef_Exists_Reply extends GenAI_Check_Hef_Exists_Reply.$Properties {
}

/** Represents a GenAI_Check_Hef_Exists_Reply. */
export class GenAI_Check_Hef_Exists_Reply {

    /**
     * Constructs a new GenAI_Check_Hef_Exists_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: GenAI_Check_Hef_Exists_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** GenAI_Check_Hef_Exists_Reply status. */
    status: number;

    /** GenAI_Check_Hef_Exists_Reply hefExists. */
    hefExists: boolean;

    /**
     * Creates a new GenAI_Check_Hef_Exists_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenAI_Check_Hef_Exists_Reply instance
     */
    static create(properties: GenAI_Check_Hef_Exists_Reply.$Shape): GenAI_Check_Hef_Exists_Reply & GenAI_Check_Hef_Exists_Reply.$Shape;
    static create(properties?: GenAI_Check_Hef_Exists_Reply.$Properties): GenAI_Check_Hef_Exists_Reply;

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Reply message. Does not implicitly {@link GenAI_Check_Hef_Exists_Reply.verify|verify} messages.
     * @param message GenAI_Check_Hef_Exists_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: GenAI_Check_Hef_Exists_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Reply message, length delimited. Does not implicitly {@link GenAI_Check_Hef_Exists_Reply.verify|verify} messages.
     * @param message GenAI_Check_Hef_Exists_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: GenAI_Check_Hef_Exists_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenAI_Check_Hef_Exists_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {GenAI_Check_Hef_Exists_Reply & GenAI_Check_Hef_Exists_Reply.$Shape} GenAI_Check_Hef_Exists_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenAI_Check_Hef_Exists_Reply & GenAI_Check_Hef_Exists_Reply.$Shape;

    /**
     * Decodes a GenAI_Check_Hef_Exists_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {GenAI_Check_Hef_Exists_Reply & GenAI_Check_Hef_Exists_Reply.$Shape} GenAI_Check_Hef_Exists_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenAI_Check_Hef_Exists_Reply & GenAI_Check_Hef_Exists_Reply.$Shape;

    /**
     * Verifies a GenAI_Check_Hef_Exists_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenAI_Check_Hef_Exists_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenAI_Check_Hef_Exists_Reply
     */
    static fromObject(object: { [k: string]: any }): GenAI_Check_Hef_Exists_Reply;

    /**
     * Creates a plain object from a GenAI_Check_Hef_Exists_Reply message. Also converts values to other types if specified.
     * @param message GenAI_Check_Hef_Exists_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: GenAI_Check_Hef_Exists_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenAI_Check_Hef_Exists_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for GenAI_Check_Hef_Exists_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace GenAI_Check_Hef_Exists_Reply {

    /** Properties of a GenAI_Check_Hef_Exists_Reply. */
    interface $Properties {

        /** GenAI_Check_Hef_Exists_Reply status */
        status?: (number|null);

        /** GenAI_Check_Hef_Exists_Reply hefExists */
        hefExists?: (boolean|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a GenAI_Check_Hef_Exists_Reply. */
    type $Shape = GenAI_Check_Hef_Exists_Reply.$Properties;
}

/**
 * Properties of a Speech2Text_Create_Request.
 * @deprecated Use Speech2Text_Create_Request.$Properties instead.
 */
export interface ISpeech2Text_Create_Request extends Speech2Text_Create_Request.$Properties {
}

/** Represents a Speech2Text_Create_Request. */
export class Speech2Text_Create_Request {

    /**
     * Constructs a new Speech2Text_Create_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: Speech2Text_Create_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** Speech2Text_Create_Request groupId. */
    groupId: string;

    /**
     * Creates a new Speech2Text_Create_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Create_Request instance
     */
    static create(properties: Speech2Text_Create_Request.$Shape): Speech2Text_Create_Request & Speech2Text_Create_Request.$Shape;
    static create(properties?: Speech2Text_Create_Request.$Properties): Speech2Text_Create_Request;

    /**
     * Encodes the specified Speech2Text_Create_Request message. Does not implicitly {@link Speech2Text_Create_Request.verify|verify} messages.
     * @param message Speech2Text_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Speech2Text_Create_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Create_Request message, length delimited. Does not implicitly {@link Speech2Text_Create_Request.verify|verify} messages.
     * @param message Speech2Text_Create_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Speech2Text_Create_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Create_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Speech2Text_Create_Request & Speech2Text_Create_Request.$Shape} Speech2Text_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Create_Request & Speech2Text_Create_Request.$Shape;

    /**
     * Decodes a Speech2Text_Create_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Speech2Text_Create_Request & Speech2Text_Create_Request.$Shape} Speech2Text_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Create_Request & Speech2Text_Create_Request.$Shape;

    /**
     * Verifies a Speech2Text_Create_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Create_Request
     */
    static fromObject(object: { [k: string]: any }): Speech2Text_Create_Request;

    /**
     * Creates a plain object from a Speech2Text_Create_Request message. Also converts values to other types if specified.
     * @param message Speech2Text_Create_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Speech2Text_Create_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Create_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Speech2Text_Create_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Speech2Text_Create_Request {

    /** Properties of a Speech2Text_Create_Request. */
    interface $Properties {

        /** Speech2Text_Create_Request groupId */
        groupId?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a Speech2Text_Create_Request. */
    type $Shape = Speech2Text_Create_Request.$Properties;
}

/**
 * Properties of a Speech2Text_Create_Reply.
 * @deprecated Use Speech2Text_Create_Reply.$Properties instead.
 */
export interface ISpeech2Text_Create_Reply extends Speech2Text_Create_Reply.$Properties {
}

/** Represents a Speech2Text_Create_Reply. */
export class Speech2Text_Create_Reply {

    /**
     * Constructs a new Speech2Text_Create_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: Speech2Text_Create_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** Speech2Text_Create_Reply status. */
    status: number;

    /** Speech2Text_Create_Reply generatorParams. */
    generatorParams?: (Speech2TextGeneratorParams.$Properties|null);

    /**
     * Creates a new Speech2Text_Create_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Create_Reply instance
     */
    static create(properties: Speech2Text_Create_Reply.$Shape): Speech2Text_Create_Reply & Speech2Text_Create_Reply.$Shape;
    static create(properties?: Speech2Text_Create_Reply.$Properties): Speech2Text_Create_Reply;

    /**
     * Encodes the specified Speech2Text_Create_Reply message. Does not implicitly {@link Speech2Text_Create_Reply.verify|verify} messages.
     * @param message Speech2Text_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Speech2Text_Create_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Create_Reply message, length delimited. Does not implicitly {@link Speech2Text_Create_Reply.verify|verify} messages.
     * @param message Speech2Text_Create_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Speech2Text_Create_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Create_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Speech2Text_Create_Reply & Speech2Text_Create_Reply.$Shape} Speech2Text_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Create_Reply & Speech2Text_Create_Reply.$Shape;

    /**
     * Decodes a Speech2Text_Create_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Speech2Text_Create_Reply & Speech2Text_Create_Reply.$Shape} Speech2Text_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Create_Reply & Speech2Text_Create_Reply.$Shape;

    /**
     * Verifies a Speech2Text_Create_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Create_Reply
     */
    static fromObject(object: { [k: string]: any }): Speech2Text_Create_Reply;

    /**
     * Creates a plain object from a Speech2Text_Create_Reply message. Also converts values to other types if specified.
     * @param message Speech2Text_Create_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Speech2Text_Create_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Create_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Speech2Text_Create_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Speech2Text_Create_Reply {

    /** Properties of a Speech2Text_Create_Reply. */
    interface $Properties {

        /** Speech2Text_Create_Reply status */
        status?: (number|null);

        /** Speech2Text_Create_Reply generatorParams */
        generatorParams?: (Speech2TextGeneratorParams.$Properties|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a Speech2Text_Create_Reply. */
    type $Shape = Speech2Text_Create_Reply.$Properties;
}

/**
 * Properties of a Speech2TextGeneratorParams.
 * @deprecated Use Speech2TextGeneratorParams.$Properties instead.
 */
export interface ISpeech2TextGeneratorParams extends Speech2TextGeneratorParams.$Properties {
}

/** Represents a Speech2TextGeneratorParams. */
export class Speech2TextGeneratorParams {

    /**
     * Constructs a new Speech2TextGeneratorParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: Speech2TextGeneratorParams.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** Speech2TextGeneratorParams taskType. */
    taskType: number;

    /** Speech2TextGeneratorParams language. */
    language: string;

    /** Speech2TextGeneratorParams repetitionPenalty. */
    repetitionPenalty: number;

    /**
     * Creates a new Speech2TextGeneratorParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2TextGeneratorParams instance
     */
    static create(properties: Speech2TextGeneratorParams.$Shape): Speech2TextGeneratorParams & Speech2TextGeneratorParams.$Shape;
    static create(properties?: Speech2TextGeneratorParams.$Properties): Speech2TextGeneratorParams;

    /**
     * Encodes the specified Speech2TextGeneratorParams message. Does not implicitly {@link Speech2TextGeneratorParams.verify|verify} messages.
     * @param message Speech2TextGeneratorParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Speech2TextGeneratorParams.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2TextGeneratorParams message, length delimited. Does not implicitly {@link Speech2TextGeneratorParams.verify|verify} messages.
     * @param message Speech2TextGeneratorParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Speech2TextGeneratorParams.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2TextGeneratorParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Speech2TextGeneratorParams & Speech2TextGeneratorParams.$Shape} Speech2TextGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2TextGeneratorParams & Speech2TextGeneratorParams.$Shape;

    /**
     * Decodes a Speech2TextGeneratorParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Speech2TextGeneratorParams & Speech2TextGeneratorParams.$Shape} Speech2TextGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2TextGeneratorParams & Speech2TextGeneratorParams.$Shape;

    /**
     * Verifies a Speech2TextGeneratorParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2TextGeneratorParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2TextGeneratorParams
     */
    static fromObject(object: { [k: string]: any }): Speech2TextGeneratorParams;

    /**
     * Creates a plain object from a Speech2TextGeneratorParams message. Also converts values to other types if specified.
     * @param message Speech2TextGeneratorParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Speech2TextGeneratorParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2TextGeneratorParams to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Speech2TextGeneratorParams
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Speech2TextGeneratorParams {

    /** Properties of a Speech2TextGeneratorParams. */
    interface $Properties {

        /** Speech2TextGeneratorParams taskType */
        taskType?: (number|null);

        /** Speech2TextGeneratorParams language */
        language?: (string|null);

        /** Speech2TextGeneratorParams repetitionPenalty */
        repetitionPenalty?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a Speech2TextGeneratorParams. */
    type $Shape = Speech2TextGeneratorParams.$Properties;
}

/**
 * Properties of a Speech2Text_Generate_Request.
 * @deprecated Use Speech2Text_Generate_Request.$Properties instead.
 */
export interface ISpeech2Text_Generate_Request extends Speech2Text_Generate_Request.$Properties {
}

/** Represents a Speech2Text_Generate_Request. */
export class Speech2Text_Generate_Request {

    /**
     * Constructs a new Speech2Text_Generate_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: Speech2Text_Generate_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** Speech2Text_Generate_Request generatorParams. */
    generatorParams?: (Speech2TextGeneratorParams.$Properties|null);

    /**
     * Creates a new Speech2Text_Generate_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Generate_Request instance
     */
    static create(properties: Speech2Text_Generate_Request.$Shape): Speech2Text_Generate_Request & Speech2Text_Generate_Request.$Shape;
    static create(properties?: Speech2Text_Generate_Request.$Properties): Speech2Text_Generate_Request;

    /**
     * Encodes the specified Speech2Text_Generate_Request message. Does not implicitly {@link Speech2Text_Generate_Request.verify|verify} messages.
     * @param message Speech2Text_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Speech2Text_Generate_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Generate_Request message, length delimited. Does not implicitly {@link Speech2Text_Generate_Request.verify|verify} messages.
     * @param message Speech2Text_Generate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Speech2Text_Generate_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Generate_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Speech2Text_Generate_Request & Speech2Text_Generate_Request.$Shape} Speech2Text_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Generate_Request & Speech2Text_Generate_Request.$Shape;

    /**
     * Decodes a Speech2Text_Generate_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Speech2Text_Generate_Request & Speech2Text_Generate_Request.$Shape} Speech2Text_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Generate_Request & Speech2Text_Generate_Request.$Shape;

    /**
     * Verifies a Speech2Text_Generate_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Generate_Request
     */
    static fromObject(object: { [k: string]: any }): Speech2Text_Generate_Request;

    /**
     * Creates a plain object from a Speech2Text_Generate_Request message. Also converts values to other types if specified.
     * @param message Speech2Text_Generate_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Speech2Text_Generate_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Generate_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Speech2Text_Generate_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Speech2Text_Generate_Request {

    /** Properties of a Speech2Text_Generate_Request. */
    interface $Properties {

        /** Speech2Text_Generate_Request generatorParams */
        generatorParams?: (Speech2TextGeneratorParams.$Properties|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a Speech2Text_Generate_Request. */
    type $Shape = Speech2Text_Generate_Request.$Properties;
}

/**
 * Properties of a ProtoSpeech2TextSegmentInfo.
 * @deprecated Use ProtoSpeech2TextSegmentInfo.$Properties instead.
 */
export interface IProtoSpeech2TextSegmentInfo extends ProtoSpeech2TextSegmentInfo.$Properties {
}

/** Represents a ProtoSpeech2TextSegmentInfo. */
export class ProtoSpeech2TextSegmentInfo {

    /**
     * Constructs a new ProtoSpeech2TextSegmentInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ProtoSpeech2TextSegmentInfo.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** ProtoSpeech2TextSegmentInfo startSec. */
    startSec: number;

    /** ProtoSpeech2TextSegmentInfo endSec. */
    endSec: number;

    /** ProtoSpeech2TextSegmentInfo text. */
    text: string;

    /**
     * Creates a new ProtoSpeech2TextSegmentInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoSpeech2TextSegmentInfo instance
     */
    static create(properties: ProtoSpeech2TextSegmentInfo.$Shape): ProtoSpeech2TextSegmentInfo & ProtoSpeech2TextSegmentInfo.$Shape;
    static create(properties?: ProtoSpeech2TextSegmentInfo.$Properties): ProtoSpeech2TextSegmentInfo;

    /**
     * Encodes the specified ProtoSpeech2TextSegmentInfo message. Does not implicitly {@link ProtoSpeech2TextSegmentInfo.verify|verify} messages.
     * @param message ProtoSpeech2TextSegmentInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: ProtoSpeech2TextSegmentInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoSpeech2TextSegmentInfo message, length delimited. Does not implicitly {@link ProtoSpeech2TextSegmentInfo.verify|verify} messages.
     * @param message ProtoSpeech2TextSegmentInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: ProtoSpeech2TextSegmentInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoSpeech2TextSegmentInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {ProtoSpeech2TextSegmentInfo & ProtoSpeech2TextSegmentInfo.$Shape} ProtoSpeech2TextSegmentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoSpeech2TextSegmentInfo & ProtoSpeech2TextSegmentInfo.$Shape;

    /**
     * Decodes a ProtoSpeech2TextSegmentInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {ProtoSpeech2TextSegmentInfo & ProtoSpeech2TextSegmentInfo.$Shape} ProtoSpeech2TextSegmentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoSpeech2TextSegmentInfo & ProtoSpeech2TextSegmentInfo.$Shape;

    /**
     * Verifies a ProtoSpeech2TextSegmentInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoSpeech2TextSegmentInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoSpeech2TextSegmentInfo
     */
    static fromObject(object: { [k: string]: any }): ProtoSpeech2TextSegmentInfo;

    /**
     * Creates a plain object from a ProtoSpeech2TextSegmentInfo message. Also converts values to other types if specified.
     * @param message ProtoSpeech2TextSegmentInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: ProtoSpeech2TextSegmentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoSpeech2TextSegmentInfo to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for ProtoSpeech2TextSegmentInfo
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace ProtoSpeech2TextSegmentInfo {

    /** Properties of a ProtoSpeech2TextSegmentInfo. */
    interface $Properties {

        /** ProtoSpeech2TextSegmentInfo startSec */
        startSec?: (number|null);

        /** ProtoSpeech2TextSegmentInfo endSec */
        endSec?: (number|null);

        /** ProtoSpeech2TextSegmentInfo text */
        text?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a ProtoSpeech2TextSegmentInfo. */
    type $Shape = ProtoSpeech2TextSegmentInfo.$Properties;
}

/**
 * Properties of a Speech2Text_Generate_Reply.
 * @deprecated Use Speech2Text_Generate_Reply.$Properties instead.
 */
export interface ISpeech2Text_Generate_Reply extends Speech2Text_Generate_Reply.$Properties {
}

/** Represents a Speech2Text_Generate_Reply. */
export class Speech2Text_Generate_Reply {

    /**
     * Constructs a new Speech2Text_Generate_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: Speech2Text_Generate_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** Speech2Text_Generate_Reply status. */
    status: number;

    /** Speech2Text_Generate_Reply segmentsInfos. */
    segmentsInfos: ProtoSpeech2TextSegmentInfo.$Properties[];

    /**
     * Creates a new Speech2Text_Generate_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Generate_Reply instance
     */
    static create(properties: Speech2Text_Generate_Reply.$Shape): Speech2Text_Generate_Reply & Speech2Text_Generate_Reply.$Shape;
    static create(properties?: Speech2Text_Generate_Reply.$Properties): Speech2Text_Generate_Reply;

    /**
     * Encodes the specified Speech2Text_Generate_Reply message. Does not implicitly {@link Speech2Text_Generate_Reply.verify|verify} messages.
     * @param message Speech2Text_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Speech2Text_Generate_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Generate_Reply message, length delimited. Does not implicitly {@link Speech2Text_Generate_Reply.verify|verify} messages.
     * @param message Speech2Text_Generate_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Speech2Text_Generate_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Generate_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Speech2Text_Generate_Reply & Speech2Text_Generate_Reply.$Shape} Speech2Text_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Generate_Reply & Speech2Text_Generate_Reply.$Shape;

    /**
     * Decodes a Speech2Text_Generate_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Speech2Text_Generate_Reply & Speech2Text_Generate_Reply.$Shape} Speech2Text_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Generate_Reply & Speech2Text_Generate_Reply.$Shape;

    /**
     * Verifies a Speech2Text_Generate_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Generate_Reply
     */
    static fromObject(object: { [k: string]: any }): Speech2Text_Generate_Reply;

    /**
     * Creates a plain object from a Speech2Text_Generate_Reply message. Also converts values to other types if specified.
     * @param message Speech2Text_Generate_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Speech2Text_Generate_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Generate_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Speech2Text_Generate_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Speech2Text_Generate_Reply {

    /** Properties of a Speech2Text_Generate_Reply. */
    interface $Properties {

        /** Speech2Text_Generate_Reply status */
        status?: (number|null);

        /** Speech2Text_Generate_Reply segmentsInfos */
        segmentsInfos?: (ProtoSpeech2TextSegmentInfo.$Properties[]|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a Speech2Text_Generate_Reply. */
    type $Shape = Speech2Text_Generate_Reply.$Properties;
}

/**
 * Properties of a Speech2Text_Release_Request.
 * @deprecated Use Speech2Text_Release_Request.$Properties instead.
 */
export interface ISpeech2Text_Release_Request extends Speech2Text_Release_Request.$Properties {
}

/** Represents a Speech2Text_Release_Request. */
export class Speech2Text_Release_Request {

    /**
     * Constructs a new Speech2Text_Release_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: Speech2Text_Release_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /**
     * Creates a new Speech2Text_Release_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Release_Request instance
     */
    static create(properties: Speech2Text_Release_Request.$Shape): Speech2Text_Release_Request & Speech2Text_Release_Request.$Shape;
    static create(properties?: Speech2Text_Release_Request.$Properties): Speech2Text_Release_Request;

    /**
     * Encodes the specified Speech2Text_Release_Request message. Does not implicitly {@link Speech2Text_Release_Request.verify|verify} messages.
     * @param message Speech2Text_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Speech2Text_Release_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Release_Request message, length delimited. Does not implicitly {@link Speech2Text_Release_Request.verify|verify} messages.
     * @param message Speech2Text_Release_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Speech2Text_Release_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Release_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Speech2Text_Release_Request & Speech2Text_Release_Request.$Shape} Speech2Text_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Release_Request & Speech2Text_Release_Request.$Shape;

    /**
     * Decodes a Speech2Text_Release_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Speech2Text_Release_Request & Speech2Text_Release_Request.$Shape} Speech2Text_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Release_Request & Speech2Text_Release_Request.$Shape;

    /**
     * Verifies a Speech2Text_Release_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Release_Request
     */
    static fromObject(object: { [k: string]: any }): Speech2Text_Release_Request;

    /**
     * Creates a plain object from a Speech2Text_Release_Request message. Also converts values to other types if specified.
     * @param message Speech2Text_Release_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Speech2Text_Release_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Release_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Speech2Text_Release_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Speech2Text_Release_Request {

    /** Properties of a Speech2Text_Release_Request. */
    interface $Properties {

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a Speech2Text_Release_Request. */
    type $Shape = Speech2Text_Release_Request.$Properties;
}

/**
 * Properties of a Speech2Text_Release_Reply.
 * @deprecated Use Speech2Text_Release_Reply.$Properties instead.
 */
export interface ISpeech2Text_Release_Reply extends Speech2Text_Release_Reply.$Properties {
}

/** Represents a Speech2Text_Release_Reply. */
export class Speech2Text_Release_Reply {

    /**
     * Constructs a new Speech2Text_Release_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: Speech2Text_Release_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** Speech2Text_Release_Reply status. */
    status: number;

    /**
     * Creates a new Speech2Text_Release_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Release_Reply instance
     */
    static create(properties: Speech2Text_Release_Reply.$Shape): Speech2Text_Release_Reply & Speech2Text_Release_Reply.$Shape;
    static create(properties?: Speech2Text_Release_Reply.$Properties): Speech2Text_Release_Reply;

    /**
     * Encodes the specified Speech2Text_Release_Reply message. Does not implicitly {@link Speech2Text_Release_Reply.verify|verify} messages.
     * @param message Speech2Text_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Speech2Text_Release_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Release_Reply message, length delimited. Does not implicitly {@link Speech2Text_Release_Reply.verify|verify} messages.
     * @param message Speech2Text_Release_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Speech2Text_Release_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Release_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Speech2Text_Release_Reply & Speech2Text_Release_Reply.$Shape} Speech2Text_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Release_Reply & Speech2Text_Release_Reply.$Shape;

    /**
     * Decodes a Speech2Text_Release_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Speech2Text_Release_Reply & Speech2Text_Release_Reply.$Shape} Speech2Text_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Release_Reply & Speech2Text_Release_Reply.$Shape;

    /**
     * Verifies a Speech2Text_Release_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Release_Reply
     */
    static fromObject(object: { [k: string]: any }): Speech2Text_Release_Reply;

    /**
     * Creates a plain object from a Speech2Text_Release_Reply message. Also converts values to other types if specified.
     * @param message Speech2Text_Release_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Speech2Text_Release_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Release_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Speech2Text_Release_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Speech2Text_Release_Reply {

    /** Properties of a Speech2Text_Release_Reply. */
    interface $Properties {

        /** Speech2Text_Release_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a Speech2Text_Release_Reply. */
    type $Shape = Speech2Text_Release_Reply.$Properties;
}

/**
 * Properties of a Speech2Text_Tokenize_Request.
 * @deprecated Use Speech2Text_Tokenize_Request.$Properties instead.
 */
export interface ISpeech2Text_Tokenize_Request extends Speech2Text_Tokenize_Request.$Properties {
}

/** Represents a Speech2Text_Tokenize_Request. */
export class Speech2Text_Tokenize_Request {

    /**
     * Constructs a new Speech2Text_Tokenize_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: Speech2Text_Tokenize_Request.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** Speech2Text_Tokenize_Request text. */
    text: string;

    /**
     * Creates a new Speech2Text_Tokenize_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Tokenize_Request instance
     */
    static create(properties: Speech2Text_Tokenize_Request.$Shape): Speech2Text_Tokenize_Request & Speech2Text_Tokenize_Request.$Shape;
    static create(properties?: Speech2Text_Tokenize_Request.$Properties): Speech2Text_Tokenize_Request;

    /**
     * Encodes the specified Speech2Text_Tokenize_Request message. Does not implicitly {@link Speech2Text_Tokenize_Request.verify|verify} messages.
     * @param message Speech2Text_Tokenize_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Speech2Text_Tokenize_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Tokenize_Request message, length delimited. Does not implicitly {@link Speech2Text_Tokenize_Request.verify|verify} messages.
     * @param message Speech2Text_Tokenize_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Speech2Text_Tokenize_Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Tokenize_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Speech2Text_Tokenize_Request & Speech2Text_Tokenize_Request.$Shape} Speech2Text_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Tokenize_Request & Speech2Text_Tokenize_Request.$Shape;

    /**
     * Decodes a Speech2Text_Tokenize_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Speech2Text_Tokenize_Request & Speech2Text_Tokenize_Request.$Shape} Speech2Text_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Tokenize_Request & Speech2Text_Tokenize_Request.$Shape;

    /**
     * Verifies a Speech2Text_Tokenize_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Tokenize_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Tokenize_Request
     */
    static fromObject(object: { [k: string]: any }): Speech2Text_Tokenize_Request;

    /**
     * Creates a plain object from a Speech2Text_Tokenize_Request message. Also converts values to other types if specified.
     * @param message Speech2Text_Tokenize_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Speech2Text_Tokenize_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Tokenize_Request to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Speech2Text_Tokenize_Request
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Speech2Text_Tokenize_Request {

    /** Properties of a Speech2Text_Tokenize_Request. */
    interface $Properties {

        /** Speech2Text_Tokenize_Request text */
        text?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a Speech2Text_Tokenize_Request. */
    type $Shape = Speech2Text_Tokenize_Request.$Properties;
}

/**
 * Properties of a Speech2Text_Tokenize_Reply.
 * @deprecated Use Speech2Text_Tokenize_Reply.$Properties instead.
 */
export interface ISpeech2Text_Tokenize_Reply extends Speech2Text_Tokenize_Reply.$Properties {
}

/** Represents a Speech2Text_Tokenize_Reply. */
export class Speech2Text_Tokenize_Reply {

    /**
     * Constructs a new Speech2Text_Tokenize_Reply.
     * @param [properties] Properties to set
     */
    constructor(properties?: Speech2Text_Tokenize_Reply.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** Speech2Text_Tokenize_Reply tokens. */
    tokens: number[];

    /** Speech2Text_Tokenize_Reply status. */
    status: number;

    /**
     * Creates a new Speech2Text_Tokenize_Reply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Speech2Text_Tokenize_Reply instance
     */
    static create(properties: Speech2Text_Tokenize_Reply.$Shape): Speech2Text_Tokenize_Reply & Speech2Text_Tokenize_Reply.$Shape;
    static create(properties?: Speech2Text_Tokenize_Reply.$Properties): Speech2Text_Tokenize_Reply;

    /**
     * Encodes the specified Speech2Text_Tokenize_Reply message. Does not implicitly {@link Speech2Text_Tokenize_Reply.verify|verify} messages.
     * @param message Speech2Text_Tokenize_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: Speech2Text_Tokenize_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Speech2Text_Tokenize_Reply message, length delimited. Does not implicitly {@link Speech2Text_Tokenize_Reply.verify|verify} messages.
     * @param message Speech2Text_Tokenize_Reply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: Speech2Text_Tokenize_Reply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Speech2Text_Tokenize_Reply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {Speech2Text_Tokenize_Reply & Speech2Text_Tokenize_Reply.$Shape} Speech2Text_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Speech2Text_Tokenize_Reply & Speech2Text_Tokenize_Reply.$Shape;

    /**
     * Decodes a Speech2Text_Tokenize_Reply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {Speech2Text_Tokenize_Reply & Speech2Text_Tokenize_Reply.$Shape} Speech2Text_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Speech2Text_Tokenize_Reply & Speech2Text_Tokenize_Reply.$Shape;

    /**
     * Verifies a Speech2Text_Tokenize_Reply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Speech2Text_Tokenize_Reply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Speech2Text_Tokenize_Reply
     */
    static fromObject(object: { [k: string]: any }): Speech2Text_Tokenize_Reply;

    /**
     * Creates a plain object from a Speech2Text_Tokenize_Reply message. Also converts values to other types if specified.
     * @param message Speech2Text_Tokenize_Reply
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: Speech2Text_Tokenize_Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Speech2Text_Tokenize_Reply to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for Speech2Text_Tokenize_Reply
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace Speech2Text_Tokenize_Reply {

    /** Properties of a Speech2Text_Tokenize_Reply. */
    interface $Properties {

        /** Speech2Text_Tokenize_Reply tokens */
        tokens?: (number[]|null);

        /** Speech2Text_Tokenize_Reply status */
        status?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a Speech2Text_Tokenize_Reply. */
    type $Shape = Speech2Text_Tokenize_Reply.$Properties;
}
