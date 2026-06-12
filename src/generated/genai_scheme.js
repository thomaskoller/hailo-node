/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Number = $util.global.Number, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $Array = $util.global.Array, $Boolean = $util.global.Boolean, $isFinite = $util.global.isFinite;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GenAIRpcRequest = (function() {

    /**
     * Properties of a GenAIRpcRequest.
     * @typedef {Object} GenAIRpcRequest.$Properties
     * @property {LLM_Create_Request.$Properties|null} [llmCreate] GenAIRpcRequest llmCreate
     * @property {LLM_Get_Generator_Params_Request.$Properties|null} [llmGetGeneratorParams] GenAIRpcRequest llmGetGeneratorParams
     * @property {LLM_Generator_Create_Request.$Properties|null} [llmGeneratorCreate] GenAIRpcRequest llmGeneratorCreate
     * @property {LLM_Generator_Write_Request.$Properties|null} [llmGeneratorWrite] GenAIRpcRequest llmGeneratorWrite
     * @property {LLM_Generator_Generate_Request.$Properties|null} [llmGeneratorGenerate] GenAIRpcRequest llmGeneratorGenerate
     * @property {LLM_Generator_Read_Request.$Properties|null} [llmGeneratorRead] GenAIRpcRequest llmGeneratorRead
     * @property {LLM_Generator_Abort_Request.$Properties|null} [llmGeneratorAbort] GenAIRpcRequest llmGeneratorAbort
     * @property {LLM_Generator_Release_Request.$Properties|null} [llmGeneratorRelease] GenAIRpcRequest llmGeneratorRelease
     * @property {LLM_Tokenize_Request.$Properties|null} [llmTokenize] GenAIRpcRequest llmTokenize
     * @property {LLM_Get_Context_Request.$Properties|null} [llmGetContext] GenAIRpcRequest llmGetContext
     * @property {LLM_Set_Context_Request.$Properties|null} [llmSetContext] GenAIRpcRequest llmSetContext
     * @property {LLM_Clear_Context_Request.$Properties|null} [llmClearContext] GenAIRpcRequest llmClearContext
     * @property {LLM_Set_End_Of_Generation_Sequence_Request.$Properties|null} [llmSetEndOfGenerationSequence] GenAIRpcRequest llmSetEndOfGenerationSequence
     * @property {LLM_Get_End_Of_Generation_Sequence_Request.$Properties|null} [llmGetEndOfGenerationSequence] GenAIRpcRequest llmGetEndOfGenerationSequence
     * @property {LLM_Release_Request.$Properties|null} [llmRelease] GenAIRpcRequest llmRelease
     * @property {LLM_Set_Stop_Tokens_Request.$Properties|null} [llmSetStopTokens] GenAIRpcRequest llmSetStopTokens
     * @property {LLM_Get_Stop_Tokens_Request.$Properties|null} [llmGetStopTokens] GenAIRpcRequest llmGetStopTokens
     * @property {LLM_Get_Context_Usage_Size_Request.$Properties|null} [llmGetContextUsageSize] GenAIRpcRequest llmGetContextUsageSize
     * @property {LLM_Get_Max_Context_Capacity_Request.$Properties|null} [llmGetMaxContextCapacity] GenAIRpcRequest llmGetMaxContextCapacity
     * @property {VLM_Create_Request.$Properties|null} [vlmCreate] GenAIRpcRequest vlmCreate
     * @property {VLM_Generator_Generate_Request.$Properties|null} [vlmGeneratorGenerate] GenAIRpcRequest vlmGeneratorGenerate
     * @property {GenAI_Check_Hef_Exists_Request.$Properties|null} [genaiCheckHefExists] GenAIRpcRequest genaiCheckHefExists
     * @property {Speech2Text_Create_Request.$Properties|null} [speech2textCreate] GenAIRpcRequest speech2textCreate
     * @property {Speech2Text_Generate_Request.$Properties|null} [speech2textGenerate] GenAIRpcRequest speech2textGenerate
     * @property {Speech2Text_Release_Request.$Properties|null} [speech2textRelease] GenAIRpcRequest speech2textRelease
     * @property {Speech2Text_Tokenize_Request.$Properties|null} [speech2textTokenize] GenAIRpcRequest speech2textTokenize
     * @property {"llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize"} [request] GenAIRpcRequest request
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a GenAIRpcRequest.
     * @exports IGenAIRpcRequest
     * @interface IGenAIRpcRequest
     * @augments GenAIRpcRequest.$Properties
     * @deprecated Use GenAIRpcRequest.$Properties instead.
     */

    /**
     * Narrowed shape of a GenAIRpcRequest.
     * @typedef {{
     *   llmCreate?: LLM_Create_Request.$Shape|null;
     *   llmGetGeneratorParams?: LLM_Get_Generator_Params_Request.$Shape|null;
     *   llmGeneratorCreate?: LLM_Generator_Create_Request.$Shape|null;
     *   llmGeneratorWrite?: LLM_Generator_Write_Request.$Shape|null;
     *   llmGeneratorGenerate?: LLM_Generator_Generate_Request.$Shape|null;
     *   llmGeneratorRead?: LLM_Generator_Read_Request.$Shape|null;
     *   llmGeneratorAbort?: LLM_Generator_Abort_Request.$Shape|null;
     *   llmGeneratorRelease?: LLM_Generator_Release_Request.$Shape|null;
     *   llmTokenize?: LLM_Tokenize_Request.$Shape|null;
     *   llmGetContext?: LLM_Get_Context_Request.$Shape|null;
     *   llmSetContext?: LLM_Set_Context_Request.$Shape|null;
     *   llmClearContext?: LLM_Clear_Context_Request.$Shape|null;
     *   llmSetEndOfGenerationSequence?: LLM_Set_End_Of_Generation_Sequence_Request.$Shape|null;
     *   llmGetEndOfGenerationSequence?: LLM_Get_End_Of_Generation_Sequence_Request.$Shape|null;
     *   llmRelease?: LLM_Release_Request.$Shape|null;
     *   llmSetStopTokens?: LLM_Set_Stop_Tokens_Request.$Shape|null;
     *   llmGetStopTokens?: LLM_Get_Stop_Tokens_Request.$Shape|null;
     *   llmGetContextUsageSize?: LLM_Get_Context_Usage_Size_Request.$Shape|null;
     *   llmGetMaxContextCapacity?: LLM_Get_Max_Context_Capacity_Request.$Shape|null;
     *   vlmCreate?: VLM_Create_Request.$Shape|null;
     *   vlmGeneratorGenerate?: VLM_Generator_Generate_Request.$Shape|null;
     *   genaiCheckHefExists?: GenAI_Check_Hef_Exists_Request.$Shape|null;
     *   speech2textCreate?: Speech2Text_Create_Request.$Shape|null;
     *   speech2textGenerate?: Speech2Text_Generate_Request.$Shape|null;
     *   speech2textRelease?: Speech2Text_Release_Request.$Shape|null;
     *   speech2textTokenize?: Speech2Text_Tokenize_Request.$Shape|null;
     *   $unknowns?: Array.<Uint8Array>;
     * } & (
     *   ({ request?: undefined; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmCreate"; llmCreate: LLM_Create_Request.$Shape; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetGeneratorParams"; llmCreate?: null; llmGetGeneratorParams: LLM_Get_Generator_Params_Request.$Shape; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate: LLM_Generator_Create_Request.$Shape; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorWrite"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite: LLM_Generator_Write_Request.$Shape; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate: LLM_Generator_Generate_Request.$Shape; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorRead"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead: LLM_Generator_Read_Request.$Shape; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorAbort"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort: LLM_Generator_Abort_Request.$Shape; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGeneratorRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease: LLM_Generator_Release_Request.$Shape; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmTokenize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize: LLM_Tokenize_Request.$Shape; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext: LLM_Get_Context_Request.$Shape; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmSetContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext: LLM_Set_Context_Request.$Shape; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmClearContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext: LLM_Clear_Context_Request.$Shape; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmSetEndOfGenerationSequence"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence: LLM_Set_End_Of_Generation_Sequence_Request.$Shape; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetEndOfGenerationSequence"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence: LLM_Get_End_Of_Generation_Sequence_Request.$Shape; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease: LLM_Release_Request.$Shape; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmSetStopTokens"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens: LLM_Set_Stop_Tokens_Request.$Shape; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetStopTokens"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens: LLM_Get_Stop_Tokens_Request.$Shape; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetContextUsageSize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize: LLM_Get_Context_Usage_Size_Request.$Shape; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "llmGetMaxContextCapacity"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity: LLM_Get_Max_Context_Capacity_Request.$Shape; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "vlmCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate: VLM_Create_Request.$Shape; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "vlmGeneratorGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate: VLM_Generator_Generate_Request.$Shape; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "genaiCheckHefExists"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists: GenAI_Check_Hef_Exists_Request.$Shape; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "speech2textCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate: Speech2Text_Create_Request.$Shape; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "speech2textGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate: Speech2Text_Generate_Request.$Shape; speech2textRelease?: null; speech2textTokenize?: null }|{ request?: "speech2textRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease: Speech2Text_Release_Request.$Shape; speech2textTokenize?: null }|{ request?: "speech2textTokenize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize: Speech2Text_Tokenize_Request.$Shape })
     * )} GenAIRpcRequest.$Shape
     */

    /**
     * Constructs a new GenAIRpcRequest.
     * @exports GenAIRpcRequest
     * @classdesc Represents a GenAIRpcRequest.
     * @constructor
     * @param {GenAIRpcRequest.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var GenAIRpcRequest = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * GenAIRpcRequest llmCreate.
     * @member {LLM_Create_Request.$Properties|null|undefined} llmCreate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmCreate = null;

    /**
     * GenAIRpcRequest llmGetGeneratorParams.
     * @member {LLM_Get_Generator_Params_Request.$Properties|null|undefined} llmGetGeneratorParams
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetGeneratorParams = null;

    /**
     * GenAIRpcRequest llmGeneratorCreate.
     * @member {LLM_Generator_Create_Request.$Properties|null|undefined} llmGeneratorCreate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorCreate = null;

    /**
     * GenAIRpcRequest llmGeneratorWrite.
     * @member {LLM_Generator_Write_Request.$Properties|null|undefined} llmGeneratorWrite
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorWrite = null;

    /**
     * GenAIRpcRequest llmGeneratorGenerate.
     * @member {LLM_Generator_Generate_Request.$Properties|null|undefined} llmGeneratorGenerate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorGenerate = null;

    /**
     * GenAIRpcRequest llmGeneratorRead.
     * @member {LLM_Generator_Read_Request.$Properties|null|undefined} llmGeneratorRead
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorRead = null;

    /**
     * GenAIRpcRequest llmGeneratorAbort.
     * @member {LLM_Generator_Abort_Request.$Properties|null|undefined} llmGeneratorAbort
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorAbort = null;

    /**
     * GenAIRpcRequest llmGeneratorRelease.
     * @member {LLM_Generator_Release_Request.$Properties|null|undefined} llmGeneratorRelease
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGeneratorRelease = null;

    /**
     * GenAIRpcRequest llmTokenize.
     * @member {LLM_Tokenize_Request.$Properties|null|undefined} llmTokenize
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmTokenize = null;

    /**
     * GenAIRpcRequest llmGetContext.
     * @member {LLM_Get_Context_Request.$Properties|null|undefined} llmGetContext
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetContext = null;

    /**
     * GenAIRpcRequest llmSetContext.
     * @member {LLM_Set_Context_Request.$Properties|null|undefined} llmSetContext
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmSetContext = null;

    /**
     * GenAIRpcRequest llmClearContext.
     * @member {LLM_Clear_Context_Request.$Properties|null|undefined} llmClearContext
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmClearContext = null;

    /**
     * GenAIRpcRequest llmSetEndOfGenerationSequence.
     * @member {LLM_Set_End_Of_Generation_Sequence_Request.$Properties|null|undefined} llmSetEndOfGenerationSequence
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmSetEndOfGenerationSequence = null;

    /**
     * GenAIRpcRequest llmGetEndOfGenerationSequence.
     * @member {LLM_Get_End_Of_Generation_Sequence_Request.$Properties|null|undefined} llmGetEndOfGenerationSequence
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetEndOfGenerationSequence = null;

    /**
     * GenAIRpcRequest llmRelease.
     * @member {LLM_Release_Request.$Properties|null|undefined} llmRelease
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmRelease = null;

    /**
     * GenAIRpcRequest llmSetStopTokens.
     * @member {LLM_Set_Stop_Tokens_Request.$Properties|null|undefined} llmSetStopTokens
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmSetStopTokens = null;

    /**
     * GenAIRpcRequest llmGetStopTokens.
     * @member {LLM_Get_Stop_Tokens_Request.$Properties|null|undefined} llmGetStopTokens
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetStopTokens = null;

    /**
     * GenAIRpcRequest llmGetContextUsageSize.
     * @member {LLM_Get_Context_Usage_Size_Request.$Properties|null|undefined} llmGetContextUsageSize
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetContextUsageSize = null;

    /**
     * GenAIRpcRequest llmGetMaxContextCapacity.
     * @member {LLM_Get_Max_Context_Capacity_Request.$Properties|null|undefined} llmGetMaxContextCapacity
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.llmGetMaxContextCapacity = null;

    /**
     * GenAIRpcRequest vlmCreate.
     * @member {VLM_Create_Request.$Properties|null|undefined} vlmCreate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.vlmCreate = null;

    /**
     * GenAIRpcRequest vlmGeneratorGenerate.
     * @member {VLM_Generator_Generate_Request.$Properties|null|undefined} vlmGeneratorGenerate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.vlmGeneratorGenerate = null;

    /**
     * GenAIRpcRequest genaiCheckHefExists.
     * @member {GenAI_Check_Hef_Exists_Request.$Properties|null|undefined} genaiCheckHefExists
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.genaiCheckHefExists = null;

    /**
     * GenAIRpcRequest speech2textCreate.
     * @member {Speech2Text_Create_Request.$Properties|null|undefined} speech2textCreate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.speech2textCreate = null;

    /**
     * GenAIRpcRequest speech2textGenerate.
     * @member {Speech2Text_Generate_Request.$Properties|null|undefined} speech2textGenerate
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.speech2textGenerate = null;

    /**
     * GenAIRpcRequest speech2textRelease.
     * @member {Speech2Text_Release_Request.$Properties|null|undefined} speech2textRelease
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.speech2textRelease = null;

    /**
     * GenAIRpcRequest speech2textTokenize.
     * @member {Speech2Text_Tokenize_Request.$Properties|null|undefined} speech2textTokenize
     * @memberof GenAIRpcRequest
     * @instance
     */
    GenAIRpcRequest.prototype.speech2textTokenize = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GenAIRpcRequest request.
     * @member {"llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize"|undefined} request
     * @memberof GenAIRpcRequest
     * @instance
     */
    $Object.defineProperty(GenAIRpcRequest.prototype, "request", {
        get: $util.oneOfGetter($oneOfFields = ["llmCreate", "llmGetGeneratorParams", "llmGeneratorCreate", "llmGeneratorWrite", "llmGeneratorGenerate", "llmGeneratorRead", "llmGeneratorAbort", "llmGeneratorRelease", "llmTokenize", "llmGetContext", "llmSetContext", "llmClearContext", "llmSetEndOfGenerationSequence", "llmGetEndOfGenerationSequence", "llmRelease", "llmSetStopTokens", "llmGetStopTokens", "llmGetContextUsageSize", "llmGetMaxContextCapacity", "vlmCreate", "vlmGeneratorGenerate", "genaiCheckHefExists", "speech2textCreate", "speech2textGenerate", "speech2textRelease", "speech2textTokenize"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GenAIRpcRequest instance using the specified properties.
     * @function create
     * @memberof GenAIRpcRequest
     * @static
     * @param {GenAIRpcRequest.$Properties=} [properties] Properties to set
     * @returns {GenAIRpcRequest} GenAIRpcRequest instance
     * @type {{
     *   (properties: GenAIRpcRequest.$Shape): GenAIRpcRequest & GenAIRpcRequest.$Shape;
     *   (properties?: GenAIRpcRequest.$Properties): GenAIRpcRequest;
     * }}
     */
    GenAIRpcRequest.create = function(properties) {
        return new GenAIRpcRequest(properties);
    };

    /**
     * Encodes the specified GenAIRpcRequest message. Does not implicitly {@link GenAIRpcRequest.verify|verify} messages.
     * @function encode
     * @memberof GenAIRpcRequest
     * @static
     * @param {GenAIRpcRequest.$Properties} message GenAIRpcRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAIRpcRequest.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.llmCreate != null && $Object.hasOwnProperty.call(message, "llmCreate"))
            $root.LLM_Create_Request.encode(message.llmCreate, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
        if (message.llmGetGeneratorParams != null && $Object.hasOwnProperty.call(message, "llmGetGeneratorParams"))
            $root.LLM_Get_Generator_Params_Request.encode(message.llmGetGeneratorParams, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorCreate != null && $Object.hasOwnProperty.call(message, "llmGeneratorCreate"))
            $root.LLM_Generator_Create_Request.encode(message.llmGeneratorCreate, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorWrite != null && $Object.hasOwnProperty.call(message, "llmGeneratorWrite"))
            $root.LLM_Generator_Write_Request.encode(message.llmGeneratorWrite, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "llmGeneratorGenerate"))
            $root.LLM_Generator_Generate_Request.encode(message.llmGeneratorGenerate, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorRead != null && $Object.hasOwnProperty.call(message, "llmGeneratorRead"))
            $root.LLM_Generator_Read_Request.encode(message.llmGeneratorRead, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorAbort != null && $Object.hasOwnProperty.call(message, "llmGeneratorAbort"))
            $root.LLM_Generator_Abort_Request.encode(message.llmGeneratorAbort, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorRelease != null && $Object.hasOwnProperty.call(message, "llmGeneratorRelease"))
            $root.LLM_Generator_Release_Request.encode(message.llmGeneratorRelease, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
        if (message.llmTokenize != null && $Object.hasOwnProperty.call(message, "llmTokenize"))
            $root.LLM_Tokenize_Request.encode(message.llmTokenize, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
        if (message.llmGetContext != null && $Object.hasOwnProperty.call(message, "llmGetContext"))
            $root.LLM_Get_Context_Request.encode(message.llmGetContext, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
        if (message.llmSetContext != null && $Object.hasOwnProperty.call(message, "llmSetContext"))
            $root.LLM_Set_Context_Request.encode(message.llmSetContext, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
        if (message.llmClearContext != null && $Object.hasOwnProperty.call(message, "llmClearContext"))
            $root.LLM_Clear_Context_Request.encode(message.llmClearContext, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
        if (message.llmSetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmSetEndOfGenerationSequence"))
            $root.LLM_Set_End_Of_Generation_Sequence_Request.encode(message.llmSetEndOfGenerationSequence, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
        if (message.llmGetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmGetEndOfGenerationSequence"))
            $root.LLM_Get_End_Of_Generation_Sequence_Request.encode(message.llmGetEndOfGenerationSequence, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
        if (message.llmRelease != null && $Object.hasOwnProperty.call(message, "llmRelease"))
            $root.LLM_Release_Request.encode(message.llmRelease, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
        if (message.llmSetStopTokens != null && $Object.hasOwnProperty.call(message, "llmSetStopTokens"))
            $root.LLM_Set_Stop_Tokens_Request.encode(message.llmSetStopTokens, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
        if (message.llmGetStopTokens != null && $Object.hasOwnProperty.call(message, "llmGetStopTokens"))
            $root.LLM_Get_Stop_Tokens_Request.encode(message.llmGetStopTokens, writer.uint32(/* id 17, wireType 2 =*/138).fork(), _depth + 1).ldelim();
        if (message.llmGetContextUsageSize != null && $Object.hasOwnProperty.call(message, "llmGetContextUsageSize"))
            $root.LLM_Get_Context_Usage_Size_Request.encode(message.llmGetContextUsageSize, writer.uint32(/* id 18, wireType 2 =*/146).fork(), _depth + 1).ldelim();
        if (message.llmGetMaxContextCapacity != null && $Object.hasOwnProperty.call(message, "llmGetMaxContextCapacity"))
            $root.LLM_Get_Max_Context_Capacity_Request.encode(message.llmGetMaxContextCapacity, writer.uint32(/* id 19, wireType 2 =*/154).fork(), _depth + 1).ldelim();
        if (message.vlmCreate != null && $Object.hasOwnProperty.call(message, "vlmCreate"))
            $root.VLM_Create_Request.encode(message.vlmCreate, writer.uint32(/* id 20, wireType 2 =*/162).fork(), _depth + 1).ldelim();
        if (message.vlmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "vlmGeneratorGenerate"))
            $root.VLM_Generator_Generate_Request.encode(message.vlmGeneratorGenerate, writer.uint32(/* id 21, wireType 2 =*/170).fork(), _depth + 1).ldelim();
        if (message.genaiCheckHefExists != null && $Object.hasOwnProperty.call(message, "genaiCheckHefExists"))
            $root.GenAI_Check_Hef_Exists_Request.encode(message.genaiCheckHefExists, writer.uint32(/* id 22, wireType 2 =*/178).fork(), _depth + 1).ldelim();
        if (message.speech2textCreate != null && $Object.hasOwnProperty.call(message, "speech2textCreate"))
            $root.Speech2Text_Create_Request.encode(message.speech2textCreate, writer.uint32(/* id 23, wireType 2 =*/186).fork(), _depth + 1).ldelim();
        if (message.speech2textGenerate != null && $Object.hasOwnProperty.call(message, "speech2textGenerate"))
            $root.Speech2Text_Generate_Request.encode(message.speech2textGenerate, writer.uint32(/* id 24, wireType 2 =*/194).fork(), _depth + 1).ldelim();
        if (message.speech2textRelease != null && $Object.hasOwnProperty.call(message, "speech2textRelease"))
            $root.Speech2Text_Release_Request.encode(message.speech2textRelease, writer.uint32(/* id 25, wireType 2 =*/202).fork(), _depth + 1).ldelim();
        if (message.speech2textTokenize != null && $Object.hasOwnProperty.call(message, "speech2textTokenize"))
            $root.Speech2Text_Tokenize_Request.encode(message.speech2textTokenize, writer.uint32(/* id 26, wireType 2 =*/210).fork(), _depth + 1).ldelim();
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified GenAIRpcRequest message, length delimited. Does not implicitly {@link GenAIRpcRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenAIRpcRequest
     * @static
     * @param {GenAIRpcRequest.$Properties} message GenAIRpcRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAIRpcRequest.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a GenAIRpcRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GenAIRpcRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenAIRpcRequest & GenAIRpcRequest.$Shape} GenAIRpcRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAIRpcRequest.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GenAIRpcRequest();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    message.llmCreate = $root.LLM_Create_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmCreate);
                    message.request = "llmCreate";
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    message.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetGeneratorParams);
                    message.request = "llmGetGeneratorParams";
                    continue;
                }
            case 3: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorCreate = $root.LLM_Generator_Create_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorCreate);
                    message.request = "llmGeneratorCreate";
                    continue;
                }
            case 4: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorWrite = $root.LLM_Generator_Write_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorWrite);
                    message.request = "llmGeneratorWrite";
                    continue;
                }
            case 5: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorGenerate = $root.LLM_Generator_Generate_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorGenerate);
                    message.request = "llmGeneratorGenerate";
                    continue;
                }
            case 6: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorRead = $root.LLM_Generator_Read_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorRead);
                    message.request = "llmGeneratorRead";
                    continue;
                }
            case 7: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorAbort = $root.LLM_Generator_Abort_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorAbort);
                    message.request = "llmGeneratorAbort";
                    continue;
                }
            case 8: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorRelease = $root.LLM_Generator_Release_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorRelease);
                    message.request = "llmGeneratorRelease";
                    continue;
                }
            case 9: {
                    if (wireType !== 2)
                        break;
                    message.llmTokenize = $root.LLM_Tokenize_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmTokenize);
                    message.request = "llmTokenize";
                    continue;
                }
            case 10: {
                    if (wireType !== 2)
                        break;
                    message.llmGetContext = $root.LLM_Get_Context_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetContext);
                    message.request = "llmGetContext";
                    continue;
                }
            case 11: {
                    if (wireType !== 2)
                        break;
                    message.llmSetContext = $root.LLM_Set_Context_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmSetContext);
                    message.request = "llmSetContext";
                    continue;
                }
            case 12: {
                    if (wireType !== 2)
                        break;
                    message.llmClearContext = $root.LLM_Clear_Context_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmClearContext);
                    message.request = "llmClearContext";
                    continue;
                }
            case 13: {
                    if (wireType !== 2)
                        break;
                    message.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmSetEndOfGenerationSequence);
                    message.request = "llmSetEndOfGenerationSequence";
                    continue;
                }
            case 14: {
                    if (wireType !== 2)
                        break;
                    message.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetEndOfGenerationSequence);
                    message.request = "llmGetEndOfGenerationSequence";
                    continue;
                }
            case 15: {
                    if (wireType !== 2)
                        break;
                    message.llmRelease = $root.LLM_Release_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmRelease);
                    message.request = "llmRelease";
                    continue;
                }
            case 16: {
                    if (wireType !== 2)
                        break;
                    message.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmSetStopTokens);
                    message.request = "llmSetStopTokens";
                    continue;
                }
            case 17: {
                    if (wireType !== 2)
                        break;
                    message.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetStopTokens);
                    message.request = "llmGetStopTokens";
                    continue;
                }
            case 18: {
                    if (wireType !== 2)
                        break;
                    message.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetContextUsageSize);
                    message.request = "llmGetContextUsageSize";
                    continue;
                }
            case 19: {
                    if (wireType !== 2)
                        break;
                    message.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetMaxContextCapacity);
                    message.request = "llmGetMaxContextCapacity";
                    continue;
                }
            case 20: {
                    if (wireType !== 2)
                        break;
                    message.vlmCreate = $root.VLM_Create_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.vlmCreate);
                    message.request = "vlmCreate";
                    continue;
                }
            case 21: {
                    if (wireType !== 2)
                        break;
                    message.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.vlmGeneratorGenerate);
                    message.request = "vlmGeneratorGenerate";
                    continue;
                }
            case 22: {
                    if (wireType !== 2)
                        break;
                    message.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.genaiCheckHefExists);
                    message.request = "genaiCheckHefExists";
                    continue;
                }
            case 23: {
                    if (wireType !== 2)
                        break;
                    message.speech2textCreate = $root.Speech2Text_Create_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.speech2textCreate);
                    message.request = "speech2textCreate";
                    continue;
                }
            case 24: {
                    if (wireType !== 2)
                        break;
                    message.speech2textGenerate = $root.Speech2Text_Generate_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.speech2textGenerate);
                    message.request = "speech2textGenerate";
                    continue;
                }
            case 25: {
                    if (wireType !== 2)
                        break;
                    message.speech2textRelease = $root.Speech2Text_Release_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.speech2textRelease);
                    message.request = "speech2textRelease";
                    continue;
                }
            case 26: {
                    if (wireType !== 2)
                        break;
                    message.speech2textTokenize = $root.Speech2Text_Tokenize_Request.decode(reader, reader.uint32(), $undefined, _depth + 1, message.speech2textTokenize);
                    message.request = "speech2textTokenize";
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a GenAIRpcRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenAIRpcRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenAIRpcRequest & GenAIRpcRequest.$Shape} GenAIRpcRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAIRpcRequest.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenAIRpcRequest message.
     * @function verify
     * @memberof GenAIRpcRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenAIRpcRequest.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        var properties = {};
        if (message.llmCreate != null && $Object.hasOwnProperty.call(message, "llmCreate")) {
            properties.request = 1;
            {
                var error = $root.LLM_Create_Request.verify(message.llmCreate, _depth + 1);
                if (error)
                    return "llmCreate." + error;
            }
        }
        if (message.llmGetGeneratorParams != null && $Object.hasOwnProperty.call(message, "llmGetGeneratorParams")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Generator_Params_Request.verify(message.llmGetGeneratorParams, _depth + 1);
                if (error)
                    return "llmGetGeneratorParams." + error;
            }
        }
        if (message.llmGeneratorCreate != null && $Object.hasOwnProperty.call(message, "llmGeneratorCreate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Create_Request.verify(message.llmGeneratorCreate, _depth + 1);
                if (error)
                    return "llmGeneratorCreate." + error;
            }
        }
        if (message.llmGeneratorWrite != null && $Object.hasOwnProperty.call(message, "llmGeneratorWrite")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Write_Request.verify(message.llmGeneratorWrite, _depth + 1);
                if (error)
                    return "llmGeneratorWrite." + error;
            }
        }
        if (message.llmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "llmGeneratorGenerate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Generate_Request.verify(message.llmGeneratorGenerate, _depth + 1);
                if (error)
                    return "llmGeneratorGenerate." + error;
            }
        }
        if (message.llmGeneratorRead != null && $Object.hasOwnProperty.call(message, "llmGeneratorRead")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Read_Request.verify(message.llmGeneratorRead, _depth + 1);
                if (error)
                    return "llmGeneratorRead." + error;
            }
        }
        if (message.llmGeneratorAbort != null && $Object.hasOwnProperty.call(message, "llmGeneratorAbort")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Abort_Request.verify(message.llmGeneratorAbort, _depth + 1);
                if (error)
                    return "llmGeneratorAbort." + error;
            }
        }
        if (message.llmGeneratorRelease != null && $Object.hasOwnProperty.call(message, "llmGeneratorRelease")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Generator_Release_Request.verify(message.llmGeneratorRelease, _depth + 1);
                if (error)
                    return "llmGeneratorRelease." + error;
            }
        }
        if (message.llmTokenize != null && $Object.hasOwnProperty.call(message, "llmTokenize")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Tokenize_Request.verify(message.llmTokenize, _depth + 1);
                if (error)
                    return "llmTokenize." + error;
            }
        }
        if (message.llmGetContext != null && $Object.hasOwnProperty.call(message, "llmGetContext")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Context_Request.verify(message.llmGetContext, _depth + 1);
                if (error)
                    return "llmGetContext." + error;
            }
        }
        if (message.llmSetContext != null && $Object.hasOwnProperty.call(message, "llmSetContext")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Set_Context_Request.verify(message.llmSetContext, _depth + 1);
                if (error)
                    return "llmSetContext." + error;
            }
        }
        if (message.llmClearContext != null && $Object.hasOwnProperty.call(message, "llmClearContext")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Clear_Context_Request.verify(message.llmClearContext, _depth + 1);
                if (error)
                    return "llmClearContext." + error;
            }
        }
        if (message.llmSetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmSetEndOfGenerationSequence")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Set_End_Of_Generation_Sequence_Request.verify(message.llmSetEndOfGenerationSequence, _depth + 1);
                if (error)
                    return "llmSetEndOfGenerationSequence." + error;
            }
        }
        if (message.llmGetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmGetEndOfGenerationSequence")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_End_Of_Generation_Sequence_Request.verify(message.llmGetEndOfGenerationSequence, _depth + 1);
                if (error)
                    return "llmGetEndOfGenerationSequence." + error;
            }
        }
        if (message.llmRelease != null && $Object.hasOwnProperty.call(message, "llmRelease")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Release_Request.verify(message.llmRelease, _depth + 1);
                if (error)
                    return "llmRelease." + error;
            }
        }
        if (message.llmSetStopTokens != null && $Object.hasOwnProperty.call(message, "llmSetStopTokens")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Set_Stop_Tokens_Request.verify(message.llmSetStopTokens, _depth + 1);
                if (error)
                    return "llmSetStopTokens." + error;
            }
        }
        if (message.llmGetStopTokens != null && $Object.hasOwnProperty.call(message, "llmGetStopTokens")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Stop_Tokens_Request.verify(message.llmGetStopTokens, _depth + 1);
                if (error)
                    return "llmGetStopTokens." + error;
            }
        }
        if (message.llmGetContextUsageSize != null && $Object.hasOwnProperty.call(message, "llmGetContextUsageSize")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Context_Usage_Size_Request.verify(message.llmGetContextUsageSize, _depth + 1);
                if (error)
                    return "llmGetContextUsageSize." + error;
            }
        }
        if (message.llmGetMaxContextCapacity != null && $Object.hasOwnProperty.call(message, "llmGetMaxContextCapacity")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.LLM_Get_Max_Context_Capacity_Request.verify(message.llmGetMaxContextCapacity, _depth + 1);
                if (error)
                    return "llmGetMaxContextCapacity." + error;
            }
        }
        if (message.vlmCreate != null && $Object.hasOwnProperty.call(message, "vlmCreate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.VLM_Create_Request.verify(message.vlmCreate, _depth + 1);
                if (error)
                    return "vlmCreate." + error;
            }
        }
        if (message.vlmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "vlmGeneratorGenerate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.VLM_Generator_Generate_Request.verify(message.vlmGeneratorGenerate, _depth + 1);
                if (error)
                    return "vlmGeneratorGenerate." + error;
            }
        }
        if (message.genaiCheckHefExists != null && $Object.hasOwnProperty.call(message, "genaiCheckHefExists")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.GenAI_Check_Hef_Exists_Request.verify(message.genaiCheckHefExists, _depth + 1);
                if (error)
                    return "genaiCheckHefExists." + error;
            }
        }
        if (message.speech2textCreate != null && $Object.hasOwnProperty.call(message, "speech2textCreate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.Speech2Text_Create_Request.verify(message.speech2textCreate, _depth + 1);
                if (error)
                    return "speech2textCreate." + error;
            }
        }
        if (message.speech2textGenerate != null && $Object.hasOwnProperty.call(message, "speech2textGenerate")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.Speech2Text_Generate_Request.verify(message.speech2textGenerate, _depth + 1);
                if (error)
                    return "speech2textGenerate." + error;
            }
        }
        if (message.speech2textRelease != null && $Object.hasOwnProperty.call(message, "speech2textRelease")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.Speech2Text_Release_Request.verify(message.speech2textRelease, _depth + 1);
                if (error)
                    return "speech2textRelease." + error;
            }
        }
        if (message.speech2textTokenize != null && $Object.hasOwnProperty.call(message, "speech2textTokenize")) {
            if (properties.request === 1)
                return "request: multiple values";
            properties.request = 1;
            {
                var error = $root.Speech2Text_Tokenize_Request.verify(message.speech2textTokenize, _depth + 1);
                if (error)
                    return "speech2textTokenize." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GenAIRpcRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenAIRpcRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenAIRpcRequest} GenAIRpcRequest
     */
    GenAIRpcRequest.fromObject = function (object, _depth) {
        if (object instanceof $root.GenAIRpcRequest)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".GenAIRpcRequest: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.GenAIRpcRequest();
        if (object.llmCreate != null) {
            if (!$util.isObject(object.llmCreate))
                throw $TypeError(".GenAIRpcRequest.llmCreate: object expected");
            message.llmCreate = $root.LLM_Create_Request.fromObject(object.llmCreate, _depth + 1);
        }
        if (object.llmGetGeneratorParams != null) {
            if (!$util.isObject(object.llmGetGeneratorParams))
                throw $TypeError(".GenAIRpcRequest.llmGetGeneratorParams: object expected");
            message.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Request.fromObject(object.llmGetGeneratorParams, _depth + 1);
        }
        if (object.llmGeneratorCreate != null) {
            if (!$util.isObject(object.llmGeneratorCreate))
                throw $TypeError(".GenAIRpcRequest.llmGeneratorCreate: object expected");
            message.llmGeneratorCreate = $root.LLM_Generator_Create_Request.fromObject(object.llmGeneratorCreate, _depth + 1);
        }
        if (object.llmGeneratorWrite != null) {
            if (!$util.isObject(object.llmGeneratorWrite))
                throw $TypeError(".GenAIRpcRequest.llmGeneratorWrite: object expected");
            message.llmGeneratorWrite = $root.LLM_Generator_Write_Request.fromObject(object.llmGeneratorWrite, _depth + 1);
        }
        if (object.llmGeneratorGenerate != null) {
            if (!$util.isObject(object.llmGeneratorGenerate))
                throw $TypeError(".GenAIRpcRequest.llmGeneratorGenerate: object expected");
            message.llmGeneratorGenerate = $root.LLM_Generator_Generate_Request.fromObject(object.llmGeneratorGenerate, _depth + 1);
        }
        if (object.llmGeneratorRead != null) {
            if (!$util.isObject(object.llmGeneratorRead))
                throw $TypeError(".GenAIRpcRequest.llmGeneratorRead: object expected");
            message.llmGeneratorRead = $root.LLM_Generator_Read_Request.fromObject(object.llmGeneratorRead, _depth + 1);
        }
        if (object.llmGeneratorAbort != null) {
            if (!$util.isObject(object.llmGeneratorAbort))
                throw $TypeError(".GenAIRpcRequest.llmGeneratorAbort: object expected");
            message.llmGeneratorAbort = $root.LLM_Generator_Abort_Request.fromObject(object.llmGeneratorAbort, _depth + 1);
        }
        if (object.llmGeneratorRelease != null) {
            if (!$util.isObject(object.llmGeneratorRelease))
                throw $TypeError(".GenAIRpcRequest.llmGeneratorRelease: object expected");
            message.llmGeneratorRelease = $root.LLM_Generator_Release_Request.fromObject(object.llmGeneratorRelease, _depth + 1);
        }
        if (object.llmTokenize != null) {
            if (!$util.isObject(object.llmTokenize))
                throw $TypeError(".GenAIRpcRequest.llmTokenize: object expected");
            message.llmTokenize = $root.LLM_Tokenize_Request.fromObject(object.llmTokenize, _depth + 1);
        }
        if (object.llmGetContext != null) {
            if (!$util.isObject(object.llmGetContext))
                throw $TypeError(".GenAIRpcRequest.llmGetContext: object expected");
            message.llmGetContext = $root.LLM_Get_Context_Request.fromObject(object.llmGetContext, _depth + 1);
        }
        if (object.llmSetContext != null) {
            if (!$util.isObject(object.llmSetContext))
                throw $TypeError(".GenAIRpcRequest.llmSetContext: object expected");
            message.llmSetContext = $root.LLM_Set_Context_Request.fromObject(object.llmSetContext, _depth + 1);
        }
        if (object.llmClearContext != null) {
            if (!$util.isObject(object.llmClearContext))
                throw $TypeError(".GenAIRpcRequest.llmClearContext: object expected");
            message.llmClearContext = $root.LLM_Clear_Context_Request.fromObject(object.llmClearContext, _depth + 1);
        }
        if (object.llmSetEndOfGenerationSequence != null) {
            if (!$util.isObject(object.llmSetEndOfGenerationSequence))
                throw $TypeError(".GenAIRpcRequest.llmSetEndOfGenerationSequence: object expected");
            message.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Request.fromObject(object.llmSetEndOfGenerationSequence, _depth + 1);
        }
        if (object.llmGetEndOfGenerationSequence != null) {
            if (!$util.isObject(object.llmGetEndOfGenerationSequence))
                throw $TypeError(".GenAIRpcRequest.llmGetEndOfGenerationSequence: object expected");
            message.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Request.fromObject(object.llmGetEndOfGenerationSequence, _depth + 1);
        }
        if (object.llmRelease != null) {
            if (!$util.isObject(object.llmRelease))
                throw $TypeError(".GenAIRpcRequest.llmRelease: object expected");
            message.llmRelease = $root.LLM_Release_Request.fromObject(object.llmRelease, _depth + 1);
        }
        if (object.llmSetStopTokens != null) {
            if (!$util.isObject(object.llmSetStopTokens))
                throw $TypeError(".GenAIRpcRequest.llmSetStopTokens: object expected");
            message.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Request.fromObject(object.llmSetStopTokens, _depth + 1);
        }
        if (object.llmGetStopTokens != null) {
            if (!$util.isObject(object.llmGetStopTokens))
                throw $TypeError(".GenAIRpcRequest.llmGetStopTokens: object expected");
            message.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Request.fromObject(object.llmGetStopTokens, _depth + 1);
        }
        if (object.llmGetContextUsageSize != null) {
            if (!$util.isObject(object.llmGetContextUsageSize))
                throw $TypeError(".GenAIRpcRequest.llmGetContextUsageSize: object expected");
            message.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Request.fromObject(object.llmGetContextUsageSize, _depth + 1);
        }
        if (object.llmGetMaxContextCapacity != null) {
            if (!$util.isObject(object.llmGetMaxContextCapacity))
                throw $TypeError(".GenAIRpcRequest.llmGetMaxContextCapacity: object expected");
            message.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Request.fromObject(object.llmGetMaxContextCapacity, _depth + 1);
        }
        if (object.vlmCreate != null) {
            if (!$util.isObject(object.vlmCreate))
                throw $TypeError(".GenAIRpcRequest.vlmCreate: object expected");
            message.vlmCreate = $root.VLM_Create_Request.fromObject(object.vlmCreate, _depth + 1);
        }
        if (object.vlmGeneratorGenerate != null) {
            if (!$util.isObject(object.vlmGeneratorGenerate))
                throw $TypeError(".GenAIRpcRequest.vlmGeneratorGenerate: object expected");
            message.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Request.fromObject(object.vlmGeneratorGenerate, _depth + 1);
        }
        if (object.genaiCheckHefExists != null) {
            if (!$util.isObject(object.genaiCheckHefExists))
                throw $TypeError(".GenAIRpcRequest.genaiCheckHefExists: object expected");
            message.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Request.fromObject(object.genaiCheckHefExists, _depth + 1);
        }
        if (object.speech2textCreate != null) {
            if (!$util.isObject(object.speech2textCreate))
                throw $TypeError(".GenAIRpcRequest.speech2textCreate: object expected");
            message.speech2textCreate = $root.Speech2Text_Create_Request.fromObject(object.speech2textCreate, _depth + 1);
        }
        if (object.speech2textGenerate != null) {
            if (!$util.isObject(object.speech2textGenerate))
                throw $TypeError(".GenAIRpcRequest.speech2textGenerate: object expected");
            message.speech2textGenerate = $root.Speech2Text_Generate_Request.fromObject(object.speech2textGenerate, _depth + 1);
        }
        if (object.speech2textRelease != null) {
            if (!$util.isObject(object.speech2textRelease))
                throw $TypeError(".GenAIRpcRequest.speech2textRelease: object expected");
            message.speech2textRelease = $root.Speech2Text_Release_Request.fromObject(object.speech2textRelease, _depth + 1);
        }
        if (object.speech2textTokenize != null) {
            if (!$util.isObject(object.speech2textTokenize))
                throw $TypeError(".GenAIRpcRequest.speech2textTokenize: object expected");
            message.speech2textTokenize = $root.Speech2Text_Tokenize_Request.fromObject(object.speech2textTokenize, _depth + 1);
        }
        return message;
    };

    /**
     * Creates a plain object from a GenAIRpcRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenAIRpcRequest
     * @static
     * @param {GenAIRpcRequest} message GenAIRpcRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenAIRpcRequest.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (message.llmCreate != null && $Object.hasOwnProperty.call(message, "llmCreate")) {
            object.llmCreate = $root.LLM_Create_Request.toObject(message.llmCreate, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmCreate";
        }
        if (message.llmGetGeneratorParams != null && $Object.hasOwnProperty.call(message, "llmGetGeneratorParams")) {
            object.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Request.toObject(message.llmGetGeneratorParams, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGetGeneratorParams";
        }
        if (message.llmGeneratorCreate != null && $Object.hasOwnProperty.call(message, "llmGeneratorCreate")) {
            object.llmGeneratorCreate = $root.LLM_Generator_Create_Request.toObject(message.llmGeneratorCreate, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGeneratorCreate";
        }
        if (message.llmGeneratorWrite != null && $Object.hasOwnProperty.call(message, "llmGeneratorWrite")) {
            object.llmGeneratorWrite = $root.LLM_Generator_Write_Request.toObject(message.llmGeneratorWrite, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGeneratorWrite";
        }
        if (message.llmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "llmGeneratorGenerate")) {
            object.llmGeneratorGenerate = $root.LLM_Generator_Generate_Request.toObject(message.llmGeneratorGenerate, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGeneratorGenerate";
        }
        if (message.llmGeneratorRead != null && $Object.hasOwnProperty.call(message, "llmGeneratorRead")) {
            object.llmGeneratorRead = $root.LLM_Generator_Read_Request.toObject(message.llmGeneratorRead, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGeneratorRead";
        }
        if (message.llmGeneratorAbort != null && $Object.hasOwnProperty.call(message, "llmGeneratorAbort")) {
            object.llmGeneratorAbort = $root.LLM_Generator_Abort_Request.toObject(message.llmGeneratorAbort, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGeneratorAbort";
        }
        if (message.llmGeneratorRelease != null && $Object.hasOwnProperty.call(message, "llmGeneratorRelease")) {
            object.llmGeneratorRelease = $root.LLM_Generator_Release_Request.toObject(message.llmGeneratorRelease, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGeneratorRelease";
        }
        if (message.llmTokenize != null && $Object.hasOwnProperty.call(message, "llmTokenize")) {
            object.llmTokenize = $root.LLM_Tokenize_Request.toObject(message.llmTokenize, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmTokenize";
        }
        if (message.llmGetContext != null && $Object.hasOwnProperty.call(message, "llmGetContext")) {
            object.llmGetContext = $root.LLM_Get_Context_Request.toObject(message.llmGetContext, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGetContext";
        }
        if (message.llmSetContext != null && $Object.hasOwnProperty.call(message, "llmSetContext")) {
            object.llmSetContext = $root.LLM_Set_Context_Request.toObject(message.llmSetContext, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmSetContext";
        }
        if (message.llmClearContext != null && $Object.hasOwnProperty.call(message, "llmClearContext")) {
            object.llmClearContext = $root.LLM_Clear_Context_Request.toObject(message.llmClearContext, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmClearContext";
        }
        if (message.llmSetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmSetEndOfGenerationSequence")) {
            object.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Request.toObject(message.llmSetEndOfGenerationSequence, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmSetEndOfGenerationSequence";
        }
        if (message.llmGetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmGetEndOfGenerationSequence")) {
            object.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Request.toObject(message.llmGetEndOfGenerationSequence, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGetEndOfGenerationSequence";
        }
        if (message.llmRelease != null && $Object.hasOwnProperty.call(message, "llmRelease")) {
            object.llmRelease = $root.LLM_Release_Request.toObject(message.llmRelease, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmRelease";
        }
        if (message.llmSetStopTokens != null && $Object.hasOwnProperty.call(message, "llmSetStopTokens")) {
            object.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Request.toObject(message.llmSetStopTokens, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmSetStopTokens";
        }
        if (message.llmGetStopTokens != null && $Object.hasOwnProperty.call(message, "llmGetStopTokens")) {
            object.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Request.toObject(message.llmGetStopTokens, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGetStopTokens";
        }
        if (message.llmGetContextUsageSize != null && $Object.hasOwnProperty.call(message, "llmGetContextUsageSize")) {
            object.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Request.toObject(message.llmGetContextUsageSize, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGetContextUsageSize";
        }
        if (message.llmGetMaxContextCapacity != null && $Object.hasOwnProperty.call(message, "llmGetMaxContextCapacity")) {
            object.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Request.toObject(message.llmGetMaxContextCapacity, options, _depth + 1);
            if (options.oneofs)
                object.request = "llmGetMaxContextCapacity";
        }
        if (message.vlmCreate != null && $Object.hasOwnProperty.call(message, "vlmCreate")) {
            object.vlmCreate = $root.VLM_Create_Request.toObject(message.vlmCreate, options, _depth + 1);
            if (options.oneofs)
                object.request = "vlmCreate";
        }
        if (message.vlmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "vlmGeneratorGenerate")) {
            object.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Request.toObject(message.vlmGeneratorGenerate, options, _depth + 1);
            if (options.oneofs)
                object.request = "vlmGeneratorGenerate";
        }
        if (message.genaiCheckHefExists != null && $Object.hasOwnProperty.call(message, "genaiCheckHefExists")) {
            object.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Request.toObject(message.genaiCheckHefExists, options, _depth + 1);
            if (options.oneofs)
                object.request = "genaiCheckHefExists";
        }
        if (message.speech2textCreate != null && $Object.hasOwnProperty.call(message, "speech2textCreate")) {
            object.speech2textCreate = $root.Speech2Text_Create_Request.toObject(message.speech2textCreate, options, _depth + 1);
            if (options.oneofs)
                object.request = "speech2textCreate";
        }
        if (message.speech2textGenerate != null && $Object.hasOwnProperty.call(message, "speech2textGenerate")) {
            object.speech2textGenerate = $root.Speech2Text_Generate_Request.toObject(message.speech2textGenerate, options, _depth + 1);
            if (options.oneofs)
                object.request = "speech2textGenerate";
        }
        if (message.speech2textRelease != null && $Object.hasOwnProperty.call(message, "speech2textRelease")) {
            object.speech2textRelease = $root.Speech2Text_Release_Request.toObject(message.speech2textRelease, options, _depth + 1);
            if (options.oneofs)
                object.request = "speech2textRelease";
        }
        if (message.speech2textTokenize != null && $Object.hasOwnProperty.call(message, "speech2textTokenize")) {
            object.speech2textTokenize = $root.Speech2Text_Tokenize_Request.toObject(message.speech2textTokenize, options, _depth + 1);
            if (options.oneofs)
                object.request = "speech2textTokenize";
        }
        return object;
    };

    /**
     * Converts this GenAIRpcRequest to JSON.
     * @function toJSON
     * @memberof GenAIRpcRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenAIRpcRequest.prototype.toJSON = function() {
        return GenAIRpcRequest.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for GenAIRpcRequest
     * @function getTypeUrl
     * @memberof GenAIRpcRequest
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    GenAIRpcRequest.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/GenAIRpcRequest";
    };

    return GenAIRpcRequest;
})();

$root.GenAIRpcReply = (function() {

    /**
     * Properties of a GenAIRpcReply.
     * @typedef {Object} GenAIRpcReply.$Properties
     * @property {LLM_Create_Reply.$Properties|null} [llmCreate] GenAIRpcReply llmCreate
     * @property {LLM_Get_Generator_Params_Reply.$Properties|null} [llmGetGeneratorParams] GenAIRpcReply llmGetGeneratorParams
     * @property {LLM_Generator_Create_Reply.$Properties|null} [llmGeneratorCreate] GenAIRpcReply llmGeneratorCreate
     * @property {LLM_Generator_Write_Reply.$Properties|null} [llmGeneratorWrite] GenAIRpcReply llmGeneratorWrite
     * @property {LLM_Generator_Generate_Reply.$Properties|null} [llmGeneratorGenerate] GenAIRpcReply llmGeneratorGenerate
     * @property {LLM_Generator_Read_Reply.$Properties|null} [llmGeneratorRead] GenAIRpcReply llmGeneratorRead
     * @property {LLM_Generator_Abort_Reply.$Properties|null} [llmGeneratorAbort] GenAIRpcReply llmGeneratorAbort
     * @property {LLM_Generator_Release_Reply.$Properties|null} [llmGeneratorRelease] GenAIRpcReply llmGeneratorRelease
     * @property {LLM_Tokenize_Reply.$Properties|null} [llmTokenize] GenAIRpcReply llmTokenize
     * @property {LLM_Get_Context_Reply.$Properties|null} [llmGetContext] GenAIRpcReply llmGetContext
     * @property {LLM_Set_Context_Reply.$Properties|null} [llmSetContext] GenAIRpcReply llmSetContext
     * @property {LLM_Clear_Context_Reply.$Properties|null} [llmClearContext] GenAIRpcReply llmClearContext
     * @property {LLM_Set_End_Of_Generation_Sequence_Reply.$Properties|null} [llmSetEndOfGenerationSequence] GenAIRpcReply llmSetEndOfGenerationSequence
     * @property {LLM_Get_End_Of_Generation_Sequence_Reply.$Properties|null} [llmGetEndOfGenerationSequence] GenAIRpcReply llmGetEndOfGenerationSequence
     * @property {LLM_Release_Reply.$Properties|null} [llmRelease] GenAIRpcReply llmRelease
     * @property {LLM_Set_Stop_Tokens_Reply.$Properties|null} [llmSetStopTokens] GenAIRpcReply llmSetStopTokens
     * @property {LLM_Get_Stop_Tokens_Reply.$Properties|null} [llmGetStopTokens] GenAIRpcReply llmGetStopTokens
     * @property {LLM_Get_Context_Usage_Size_Reply.$Properties|null} [llmGetContextUsageSize] GenAIRpcReply llmGetContextUsageSize
     * @property {LLM_Get_Max_Context_Capacity_Reply.$Properties|null} [llmGetMaxContextCapacity] GenAIRpcReply llmGetMaxContextCapacity
     * @property {VLM_Create_Reply.$Properties|null} [vlmCreate] GenAIRpcReply vlmCreate
     * @property {VLM_Generator_Generate_Reply.$Properties|null} [vlmGeneratorGenerate] GenAIRpcReply vlmGeneratorGenerate
     * @property {GenAI_Check_Hef_Exists_Reply.$Properties|null} [genaiCheckHefExists] GenAIRpcReply genaiCheckHefExists
     * @property {Speech2Text_Create_Reply.$Properties|null} [speech2textCreate] GenAIRpcReply speech2textCreate
     * @property {Speech2Text_Generate_Reply.$Properties|null} [speech2textGenerate] GenAIRpcReply speech2textGenerate
     * @property {Speech2Text_Release_Reply.$Properties|null} [speech2textRelease] GenAIRpcReply speech2textRelease
     * @property {Speech2Text_Tokenize_Reply.$Properties|null} [speech2textTokenize] GenAIRpcReply speech2textTokenize
     * @property {"llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize"} [reply] GenAIRpcReply reply
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a GenAIRpcReply.
     * @exports IGenAIRpcReply
     * @interface IGenAIRpcReply
     * @augments GenAIRpcReply.$Properties
     * @deprecated Use GenAIRpcReply.$Properties instead.
     */

    /**
     * Narrowed shape of a GenAIRpcReply.
     * @typedef {{
     *   llmCreate?: LLM_Create_Reply.$Shape|null;
     *   llmGetGeneratorParams?: LLM_Get_Generator_Params_Reply.$Shape|null;
     *   llmGeneratorCreate?: LLM_Generator_Create_Reply.$Shape|null;
     *   llmGeneratorWrite?: LLM_Generator_Write_Reply.$Shape|null;
     *   llmGeneratorGenerate?: LLM_Generator_Generate_Reply.$Shape|null;
     *   llmGeneratorRead?: LLM_Generator_Read_Reply.$Shape|null;
     *   llmGeneratorAbort?: LLM_Generator_Abort_Reply.$Shape|null;
     *   llmGeneratorRelease?: LLM_Generator_Release_Reply.$Shape|null;
     *   llmTokenize?: LLM_Tokenize_Reply.$Shape|null;
     *   llmGetContext?: LLM_Get_Context_Reply.$Shape|null;
     *   llmSetContext?: LLM_Set_Context_Reply.$Shape|null;
     *   llmClearContext?: LLM_Clear_Context_Reply.$Shape|null;
     *   llmSetEndOfGenerationSequence?: LLM_Set_End_Of_Generation_Sequence_Reply.$Shape|null;
     *   llmGetEndOfGenerationSequence?: LLM_Get_End_Of_Generation_Sequence_Reply.$Shape|null;
     *   llmRelease?: LLM_Release_Reply.$Shape|null;
     *   llmSetStopTokens?: LLM_Set_Stop_Tokens_Reply.$Shape|null;
     *   llmGetStopTokens?: LLM_Get_Stop_Tokens_Reply.$Shape|null;
     *   llmGetContextUsageSize?: LLM_Get_Context_Usage_Size_Reply.$Shape|null;
     *   llmGetMaxContextCapacity?: LLM_Get_Max_Context_Capacity_Reply.$Shape|null;
     *   vlmCreate?: VLM_Create_Reply.$Shape|null;
     *   vlmGeneratorGenerate?: VLM_Generator_Generate_Reply.$Shape|null;
     *   genaiCheckHefExists?: GenAI_Check_Hef_Exists_Reply.$Shape|null;
     *   speech2textCreate?: Speech2Text_Create_Reply.$Shape|null;
     *   speech2textGenerate?: Speech2Text_Generate_Reply.$Shape|null;
     *   speech2textRelease?: Speech2Text_Release_Reply.$Shape|null;
     *   speech2textTokenize?: Speech2Text_Tokenize_Reply.$Shape|null;
     *   $unknowns?: Array.<Uint8Array>;
     * } & (
     *   ({ reply?: undefined; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmCreate"; llmCreate: LLM_Create_Reply.$Shape; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetGeneratorParams"; llmCreate?: null; llmGetGeneratorParams: LLM_Get_Generator_Params_Reply.$Shape; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate: LLM_Generator_Create_Reply.$Shape; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorWrite"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite: LLM_Generator_Write_Reply.$Shape; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate: LLM_Generator_Generate_Reply.$Shape; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorRead"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead: LLM_Generator_Read_Reply.$Shape; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorAbort"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort: LLM_Generator_Abort_Reply.$Shape; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGeneratorRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease: LLM_Generator_Release_Reply.$Shape; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmTokenize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize: LLM_Tokenize_Reply.$Shape; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext: LLM_Get_Context_Reply.$Shape; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmSetContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext: LLM_Set_Context_Reply.$Shape; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmClearContext"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext: LLM_Clear_Context_Reply.$Shape; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmSetEndOfGenerationSequence"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence: LLM_Set_End_Of_Generation_Sequence_Reply.$Shape; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetEndOfGenerationSequence"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence: LLM_Get_End_Of_Generation_Sequence_Reply.$Shape; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease: LLM_Release_Reply.$Shape; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmSetStopTokens"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens: LLM_Set_Stop_Tokens_Reply.$Shape; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetStopTokens"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens: LLM_Get_Stop_Tokens_Reply.$Shape; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetContextUsageSize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize: LLM_Get_Context_Usage_Size_Reply.$Shape; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "llmGetMaxContextCapacity"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity: LLM_Get_Max_Context_Capacity_Reply.$Shape; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "vlmCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate: VLM_Create_Reply.$Shape; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "vlmGeneratorGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate: VLM_Generator_Generate_Reply.$Shape; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "genaiCheckHefExists"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists: GenAI_Check_Hef_Exists_Reply.$Shape; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "speech2textCreate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate: Speech2Text_Create_Reply.$Shape; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "speech2textGenerate"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate: Speech2Text_Generate_Reply.$Shape; speech2textRelease?: null; speech2textTokenize?: null }|{ reply?: "speech2textRelease"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease: Speech2Text_Release_Reply.$Shape; speech2textTokenize?: null }|{ reply?: "speech2textTokenize"; llmCreate?: null; llmGetGeneratorParams?: null; llmGeneratorCreate?: null; llmGeneratorWrite?: null; llmGeneratorGenerate?: null; llmGeneratorRead?: null; llmGeneratorAbort?: null; llmGeneratorRelease?: null; llmTokenize?: null; llmGetContext?: null; llmSetContext?: null; llmClearContext?: null; llmSetEndOfGenerationSequence?: null; llmGetEndOfGenerationSequence?: null; llmRelease?: null; llmSetStopTokens?: null; llmGetStopTokens?: null; llmGetContextUsageSize?: null; llmGetMaxContextCapacity?: null; vlmCreate?: null; vlmGeneratorGenerate?: null; genaiCheckHefExists?: null; speech2textCreate?: null; speech2textGenerate?: null; speech2textRelease?: null; speech2textTokenize: Speech2Text_Tokenize_Reply.$Shape })
     * )} GenAIRpcReply.$Shape
     */

    /**
     * Constructs a new GenAIRpcReply.
     * @exports GenAIRpcReply
     * @classdesc Represents a GenAIRpcReply.
     * @constructor
     * @param {GenAIRpcReply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var GenAIRpcReply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * GenAIRpcReply llmCreate.
     * @member {LLM_Create_Reply.$Properties|null|undefined} llmCreate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmCreate = null;

    /**
     * GenAIRpcReply llmGetGeneratorParams.
     * @member {LLM_Get_Generator_Params_Reply.$Properties|null|undefined} llmGetGeneratorParams
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetGeneratorParams = null;

    /**
     * GenAIRpcReply llmGeneratorCreate.
     * @member {LLM_Generator_Create_Reply.$Properties|null|undefined} llmGeneratorCreate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorCreate = null;

    /**
     * GenAIRpcReply llmGeneratorWrite.
     * @member {LLM_Generator_Write_Reply.$Properties|null|undefined} llmGeneratorWrite
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorWrite = null;

    /**
     * GenAIRpcReply llmGeneratorGenerate.
     * @member {LLM_Generator_Generate_Reply.$Properties|null|undefined} llmGeneratorGenerate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorGenerate = null;

    /**
     * GenAIRpcReply llmGeneratorRead.
     * @member {LLM_Generator_Read_Reply.$Properties|null|undefined} llmGeneratorRead
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorRead = null;

    /**
     * GenAIRpcReply llmGeneratorAbort.
     * @member {LLM_Generator_Abort_Reply.$Properties|null|undefined} llmGeneratorAbort
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorAbort = null;

    /**
     * GenAIRpcReply llmGeneratorRelease.
     * @member {LLM_Generator_Release_Reply.$Properties|null|undefined} llmGeneratorRelease
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGeneratorRelease = null;

    /**
     * GenAIRpcReply llmTokenize.
     * @member {LLM_Tokenize_Reply.$Properties|null|undefined} llmTokenize
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmTokenize = null;

    /**
     * GenAIRpcReply llmGetContext.
     * @member {LLM_Get_Context_Reply.$Properties|null|undefined} llmGetContext
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetContext = null;

    /**
     * GenAIRpcReply llmSetContext.
     * @member {LLM_Set_Context_Reply.$Properties|null|undefined} llmSetContext
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmSetContext = null;

    /**
     * GenAIRpcReply llmClearContext.
     * @member {LLM_Clear_Context_Reply.$Properties|null|undefined} llmClearContext
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmClearContext = null;

    /**
     * GenAIRpcReply llmSetEndOfGenerationSequence.
     * @member {LLM_Set_End_Of_Generation_Sequence_Reply.$Properties|null|undefined} llmSetEndOfGenerationSequence
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmSetEndOfGenerationSequence = null;

    /**
     * GenAIRpcReply llmGetEndOfGenerationSequence.
     * @member {LLM_Get_End_Of_Generation_Sequence_Reply.$Properties|null|undefined} llmGetEndOfGenerationSequence
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetEndOfGenerationSequence = null;

    /**
     * GenAIRpcReply llmRelease.
     * @member {LLM_Release_Reply.$Properties|null|undefined} llmRelease
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmRelease = null;

    /**
     * GenAIRpcReply llmSetStopTokens.
     * @member {LLM_Set_Stop_Tokens_Reply.$Properties|null|undefined} llmSetStopTokens
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmSetStopTokens = null;

    /**
     * GenAIRpcReply llmGetStopTokens.
     * @member {LLM_Get_Stop_Tokens_Reply.$Properties|null|undefined} llmGetStopTokens
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetStopTokens = null;

    /**
     * GenAIRpcReply llmGetContextUsageSize.
     * @member {LLM_Get_Context_Usage_Size_Reply.$Properties|null|undefined} llmGetContextUsageSize
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetContextUsageSize = null;

    /**
     * GenAIRpcReply llmGetMaxContextCapacity.
     * @member {LLM_Get_Max_Context_Capacity_Reply.$Properties|null|undefined} llmGetMaxContextCapacity
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.llmGetMaxContextCapacity = null;

    /**
     * GenAIRpcReply vlmCreate.
     * @member {VLM_Create_Reply.$Properties|null|undefined} vlmCreate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.vlmCreate = null;

    /**
     * GenAIRpcReply vlmGeneratorGenerate.
     * @member {VLM_Generator_Generate_Reply.$Properties|null|undefined} vlmGeneratorGenerate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.vlmGeneratorGenerate = null;

    /**
     * GenAIRpcReply genaiCheckHefExists.
     * @member {GenAI_Check_Hef_Exists_Reply.$Properties|null|undefined} genaiCheckHefExists
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.genaiCheckHefExists = null;

    /**
     * GenAIRpcReply speech2textCreate.
     * @member {Speech2Text_Create_Reply.$Properties|null|undefined} speech2textCreate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.speech2textCreate = null;

    /**
     * GenAIRpcReply speech2textGenerate.
     * @member {Speech2Text_Generate_Reply.$Properties|null|undefined} speech2textGenerate
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.speech2textGenerate = null;

    /**
     * GenAIRpcReply speech2textRelease.
     * @member {Speech2Text_Release_Reply.$Properties|null|undefined} speech2textRelease
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.speech2textRelease = null;

    /**
     * GenAIRpcReply speech2textTokenize.
     * @member {Speech2Text_Tokenize_Reply.$Properties|null|undefined} speech2textTokenize
     * @memberof GenAIRpcReply
     * @instance
     */
    GenAIRpcReply.prototype.speech2textTokenize = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GenAIRpcReply reply.
     * @member {"llmCreate"|"llmGetGeneratorParams"|"llmGeneratorCreate"|"llmGeneratorWrite"|"llmGeneratorGenerate"|"llmGeneratorRead"|"llmGeneratorAbort"|"llmGeneratorRelease"|"llmTokenize"|"llmGetContext"|"llmSetContext"|"llmClearContext"|"llmSetEndOfGenerationSequence"|"llmGetEndOfGenerationSequence"|"llmRelease"|"llmSetStopTokens"|"llmGetStopTokens"|"llmGetContextUsageSize"|"llmGetMaxContextCapacity"|"vlmCreate"|"vlmGeneratorGenerate"|"genaiCheckHefExists"|"speech2textCreate"|"speech2textGenerate"|"speech2textRelease"|"speech2textTokenize"|undefined} reply
     * @memberof GenAIRpcReply
     * @instance
     */
    $Object.defineProperty(GenAIRpcReply.prototype, "reply", {
        get: $util.oneOfGetter($oneOfFields = ["llmCreate", "llmGetGeneratorParams", "llmGeneratorCreate", "llmGeneratorWrite", "llmGeneratorGenerate", "llmGeneratorRead", "llmGeneratorAbort", "llmGeneratorRelease", "llmTokenize", "llmGetContext", "llmSetContext", "llmClearContext", "llmSetEndOfGenerationSequence", "llmGetEndOfGenerationSequence", "llmRelease", "llmSetStopTokens", "llmGetStopTokens", "llmGetContextUsageSize", "llmGetMaxContextCapacity", "vlmCreate", "vlmGeneratorGenerate", "genaiCheckHefExists", "speech2textCreate", "speech2textGenerate", "speech2textRelease", "speech2textTokenize"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GenAIRpcReply instance using the specified properties.
     * @function create
     * @memberof GenAIRpcReply
     * @static
     * @param {GenAIRpcReply.$Properties=} [properties] Properties to set
     * @returns {GenAIRpcReply} GenAIRpcReply instance
     * @type {{
     *   (properties: GenAIRpcReply.$Shape): GenAIRpcReply & GenAIRpcReply.$Shape;
     *   (properties?: GenAIRpcReply.$Properties): GenAIRpcReply;
     * }}
     */
    GenAIRpcReply.create = function(properties) {
        return new GenAIRpcReply(properties);
    };

    /**
     * Encodes the specified GenAIRpcReply message. Does not implicitly {@link GenAIRpcReply.verify|verify} messages.
     * @function encode
     * @memberof GenAIRpcReply
     * @static
     * @param {GenAIRpcReply.$Properties} message GenAIRpcReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAIRpcReply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.llmCreate != null && $Object.hasOwnProperty.call(message, "llmCreate"))
            $root.LLM_Create_Reply.encode(message.llmCreate, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
        if (message.llmGetGeneratorParams != null && $Object.hasOwnProperty.call(message, "llmGetGeneratorParams"))
            $root.LLM_Get_Generator_Params_Reply.encode(message.llmGetGeneratorParams, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorCreate != null && $Object.hasOwnProperty.call(message, "llmGeneratorCreate"))
            $root.LLM_Generator_Create_Reply.encode(message.llmGeneratorCreate, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorWrite != null && $Object.hasOwnProperty.call(message, "llmGeneratorWrite"))
            $root.LLM_Generator_Write_Reply.encode(message.llmGeneratorWrite, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "llmGeneratorGenerate"))
            $root.LLM_Generator_Generate_Reply.encode(message.llmGeneratorGenerate, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorRead != null && $Object.hasOwnProperty.call(message, "llmGeneratorRead"))
            $root.LLM_Generator_Read_Reply.encode(message.llmGeneratorRead, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorAbort != null && $Object.hasOwnProperty.call(message, "llmGeneratorAbort"))
            $root.LLM_Generator_Abort_Reply.encode(message.llmGeneratorAbort, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
        if (message.llmGeneratorRelease != null && $Object.hasOwnProperty.call(message, "llmGeneratorRelease"))
            $root.LLM_Generator_Release_Reply.encode(message.llmGeneratorRelease, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
        if (message.llmTokenize != null && $Object.hasOwnProperty.call(message, "llmTokenize"))
            $root.LLM_Tokenize_Reply.encode(message.llmTokenize, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
        if (message.llmGetContext != null && $Object.hasOwnProperty.call(message, "llmGetContext"))
            $root.LLM_Get_Context_Reply.encode(message.llmGetContext, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
        if (message.llmSetContext != null && $Object.hasOwnProperty.call(message, "llmSetContext"))
            $root.LLM_Set_Context_Reply.encode(message.llmSetContext, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
        if (message.llmClearContext != null && $Object.hasOwnProperty.call(message, "llmClearContext"))
            $root.LLM_Clear_Context_Reply.encode(message.llmClearContext, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
        if (message.llmSetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmSetEndOfGenerationSequence"))
            $root.LLM_Set_End_Of_Generation_Sequence_Reply.encode(message.llmSetEndOfGenerationSequence, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
        if (message.llmGetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmGetEndOfGenerationSequence"))
            $root.LLM_Get_End_Of_Generation_Sequence_Reply.encode(message.llmGetEndOfGenerationSequence, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
        if (message.llmRelease != null && $Object.hasOwnProperty.call(message, "llmRelease"))
            $root.LLM_Release_Reply.encode(message.llmRelease, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
        if (message.llmSetStopTokens != null && $Object.hasOwnProperty.call(message, "llmSetStopTokens"))
            $root.LLM_Set_Stop_Tokens_Reply.encode(message.llmSetStopTokens, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
        if (message.llmGetStopTokens != null && $Object.hasOwnProperty.call(message, "llmGetStopTokens"))
            $root.LLM_Get_Stop_Tokens_Reply.encode(message.llmGetStopTokens, writer.uint32(/* id 17, wireType 2 =*/138).fork(), _depth + 1).ldelim();
        if (message.llmGetContextUsageSize != null && $Object.hasOwnProperty.call(message, "llmGetContextUsageSize"))
            $root.LLM_Get_Context_Usage_Size_Reply.encode(message.llmGetContextUsageSize, writer.uint32(/* id 18, wireType 2 =*/146).fork(), _depth + 1).ldelim();
        if (message.llmGetMaxContextCapacity != null && $Object.hasOwnProperty.call(message, "llmGetMaxContextCapacity"))
            $root.LLM_Get_Max_Context_Capacity_Reply.encode(message.llmGetMaxContextCapacity, writer.uint32(/* id 19, wireType 2 =*/154).fork(), _depth + 1).ldelim();
        if (message.vlmCreate != null && $Object.hasOwnProperty.call(message, "vlmCreate"))
            $root.VLM_Create_Reply.encode(message.vlmCreate, writer.uint32(/* id 20, wireType 2 =*/162).fork(), _depth + 1).ldelim();
        if (message.vlmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "vlmGeneratorGenerate"))
            $root.VLM_Generator_Generate_Reply.encode(message.vlmGeneratorGenerate, writer.uint32(/* id 21, wireType 2 =*/170).fork(), _depth + 1).ldelim();
        if (message.genaiCheckHefExists != null && $Object.hasOwnProperty.call(message, "genaiCheckHefExists"))
            $root.GenAI_Check_Hef_Exists_Reply.encode(message.genaiCheckHefExists, writer.uint32(/* id 22, wireType 2 =*/178).fork(), _depth + 1).ldelim();
        if (message.speech2textCreate != null && $Object.hasOwnProperty.call(message, "speech2textCreate"))
            $root.Speech2Text_Create_Reply.encode(message.speech2textCreate, writer.uint32(/* id 23, wireType 2 =*/186).fork(), _depth + 1).ldelim();
        if (message.speech2textGenerate != null && $Object.hasOwnProperty.call(message, "speech2textGenerate"))
            $root.Speech2Text_Generate_Reply.encode(message.speech2textGenerate, writer.uint32(/* id 24, wireType 2 =*/194).fork(), _depth + 1).ldelim();
        if (message.speech2textRelease != null && $Object.hasOwnProperty.call(message, "speech2textRelease"))
            $root.Speech2Text_Release_Reply.encode(message.speech2textRelease, writer.uint32(/* id 25, wireType 2 =*/202).fork(), _depth + 1).ldelim();
        if (message.speech2textTokenize != null && $Object.hasOwnProperty.call(message, "speech2textTokenize"))
            $root.Speech2Text_Tokenize_Reply.encode(message.speech2textTokenize, writer.uint32(/* id 26, wireType 2 =*/210).fork(), _depth + 1).ldelim();
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified GenAIRpcReply message, length delimited. Does not implicitly {@link GenAIRpcReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenAIRpcReply
     * @static
     * @param {GenAIRpcReply.$Properties} message GenAIRpcReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAIRpcReply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a GenAIRpcReply message from the specified reader or buffer.
     * @function decode
     * @memberof GenAIRpcReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenAIRpcReply & GenAIRpcReply.$Shape} GenAIRpcReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAIRpcReply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GenAIRpcReply();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    message.llmCreate = $root.LLM_Create_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmCreate);
                    message.reply = "llmCreate";
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    message.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetGeneratorParams);
                    message.reply = "llmGetGeneratorParams";
                    continue;
                }
            case 3: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorCreate = $root.LLM_Generator_Create_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorCreate);
                    message.reply = "llmGeneratorCreate";
                    continue;
                }
            case 4: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorWrite = $root.LLM_Generator_Write_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorWrite);
                    message.reply = "llmGeneratorWrite";
                    continue;
                }
            case 5: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorGenerate = $root.LLM_Generator_Generate_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorGenerate);
                    message.reply = "llmGeneratorGenerate";
                    continue;
                }
            case 6: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorRead = $root.LLM_Generator_Read_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorRead);
                    message.reply = "llmGeneratorRead";
                    continue;
                }
            case 7: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorAbort = $root.LLM_Generator_Abort_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorAbort);
                    message.reply = "llmGeneratorAbort";
                    continue;
                }
            case 8: {
                    if (wireType !== 2)
                        break;
                    message.llmGeneratorRelease = $root.LLM_Generator_Release_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGeneratorRelease);
                    message.reply = "llmGeneratorRelease";
                    continue;
                }
            case 9: {
                    if (wireType !== 2)
                        break;
                    message.llmTokenize = $root.LLM_Tokenize_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmTokenize);
                    message.reply = "llmTokenize";
                    continue;
                }
            case 10: {
                    if (wireType !== 2)
                        break;
                    message.llmGetContext = $root.LLM_Get_Context_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetContext);
                    message.reply = "llmGetContext";
                    continue;
                }
            case 11: {
                    if (wireType !== 2)
                        break;
                    message.llmSetContext = $root.LLM_Set_Context_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmSetContext);
                    message.reply = "llmSetContext";
                    continue;
                }
            case 12: {
                    if (wireType !== 2)
                        break;
                    message.llmClearContext = $root.LLM_Clear_Context_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmClearContext);
                    message.reply = "llmClearContext";
                    continue;
                }
            case 13: {
                    if (wireType !== 2)
                        break;
                    message.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmSetEndOfGenerationSequence);
                    message.reply = "llmSetEndOfGenerationSequence";
                    continue;
                }
            case 14: {
                    if (wireType !== 2)
                        break;
                    message.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetEndOfGenerationSequence);
                    message.reply = "llmGetEndOfGenerationSequence";
                    continue;
                }
            case 15: {
                    if (wireType !== 2)
                        break;
                    message.llmRelease = $root.LLM_Release_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmRelease);
                    message.reply = "llmRelease";
                    continue;
                }
            case 16: {
                    if (wireType !== 2)
                        break;
                    message.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmSetStopTokens);
                    message.reply = "llmSetStopTokens";
                    continue;
                }
            case 17: {
                    if (wireType !== 2)
                        break;
                    message.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetStopTokens);
                    message.reply = "llmGetStopTokens";
                    continue;
                }
            case 18: {
                    if (wireType !== 2)
                        break;
                    message.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetContextUsageSize);
                    message.reply = "llmGetContextUsageSize";
                    continue;
                }
            case 19: {
                    if (wireType !== 2)
                        break;
                    message.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.llmGetMaxContextCapacity);
                    message.reply = "llmGetMaxContextCapacity";
                    continue;
                }
            case 20: {
                    if (wireType !== 2)
                        break;
                    message.vlmCreate = $root.VLM_Create_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.vlmCreate);
                    message.reply = "vlmCreate";
                    continue;
                }
            case 21: {
                    if (wireType !== 2)
                        break;
                    message.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.vlmGeneratorGenerate);
                    message.reply = "vlmGeneratorGenerate";
                    continue;
                }
            case 22: {
                    if (wireType !== 2)
                        break;
                    message.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.genaiCheckHefExists);
                    message.reply = "genaiCheckHefExists";
                    continue;
                }
            case 23: {
                    if (wireType !== 2)
                        break;
                    message.speech2textCreate = $root.Speech2Text_Create_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.speech2textCreate);
                    message.reply = "speech2textCreate";
                    continue;
                }
            case 24: {
                    if (wireType !== 2)
                        break;
                    message.speech2textGenerate = $root.Speech2Text_Generate_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.speech2textGenerate);
                    message.reply = "speech2textGenerate";
                    continue;
                }
            case 25: {
                    if (wireType !== 2)
                        break;
                    message.speech2textRelease = $root.Speech2Text_Release_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.speech2textRelease);
                    message.reply = "speech2textRelease";
                    continue;
                }
            case 26: {
                    if (wireType !== 2)
                        break;
                    message.speech2textTokenize = $root.Speech2Text_Tokenize_Reply.decode(reader, reader.uint32(), $undefined, _depth + 1, message.speech2textTokenize);
                    message.reply = "speech2textTokenize";
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a GenAIRpcReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenAIRpcReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenAIRpcReply & GenAIRpcReply.$Shape} GenAIRpcReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAIRpcReply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenAIRpcReply message.
     * @function verify
     * @memberof GenAIRpcReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenAIRpcReply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        var properties = {};
        if (message.llmCreate != null && $Object.hasOwnProperty.call(message, "llmCreate")) {
            properties.reply = 1;
            {
                var error = $root.LLM_Create_Reply.verify(message.llmCreate, _depth + 1);
                if (error)
                    return "llmCreate." + error;
            }
        }
        if (message.llmGetGeneratorParams != null && $Object.hasOwnProperty.call(message, "llmGetGeneratorParams")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Generator_Params_Reply.verify(message.llmGetGeneratorParams, _depth + 1);
                if (error)
                    return "llmGetGeneratorParams." + error;
            }
        }
        if (message.llmGeneratorCreate != null && $Object.hasOwnProperty.call(message, "llmGeneratorCreate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Create_Reply.verify(message.llmGeneratorCreate, _depth + 1);
                if (error)
                    return "llmGeneratorCreate." + error;
            }
        }
        if (message.llmGeneratorWrite != null && $Object.hasOwnProperty.call(message, "llmGeneratorWrite")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Write_Reply.verify(message.llmGeneratorWrite, _depth + 1);
                if (error)
                    return "llmGeneratorWrite." + error;
            }
        }
        if (message.llmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "llmGeneratorGenerate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Generate_Reply.verify(message.llmGeneratorGenerate, _depth + 1);
                if (error)
                    return "llmGeneratorGenerate." + error;
            }
        }
        if (message.llmGeneratorRead != null && $Object.hasOwnProperty.call(message, "llmGeneratorRead")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Read_Reply.verify(message.llmGeneratorRead, _depth + 1);
                if (error)
                    return "llmGeneratorRead." + error;
            }
        }
        if (message.llmGeneratorAbort != null && $Object.hasOwnProperty.call(message, "llmGeneratorAbort")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Abort_Reply.verify(message.llmGeneratorAbort, _depth + 1);
                if (error)
                    return "llmGeneratorAbort." + error;
            }
        }
        if (message.llmGeneratorRelease != null && $Object.hasOwnProperty.call(message, "llmGeneratorRelease")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Generator_Release_Reply.verify(message.llmGeneratorRelease, _depth + 1);
                if (error)
                    return "llmGeneratorRelease." + error;
            }
        }
        if (message.llmTokenize != null && $Object.hasOwnProperty.call(message, "llmTokenize")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Tokenize_Reply.verify(message.llmTokenize, _depth + 1);
                if (error)
                    return "llmTokenize." + error;
            }
        }
        if (message.llmGetContext != null && $Object.hasOwnProperty.call(message, "llmGetContext")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Context_Reply.verify(message.llmGetContext, _depth + 1);
                if (error)
                    return "llmGetContext." + error;
            }
        }
        if (message.llmSetContext != null && $Object.hasOwnProperty.call(message, "llmSetContext")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Set_Context_Reply.verify(message.llmSetContext, _depth + 1);
                if (error)
                    return "llmSetContext." + error;
            }
        }
        if (message.llmClearContext != null && $Object.hasOwnProperty.call(message, "llmClearContext")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Clear_Context_Reply.verify(message.llmClearContext, _depth + 1);
                if (error)
                    return "llmClearContext." + error;
            }
        }
        if (message.llmSetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmSetEndOfGenerationSequence")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Set_End_Of_Generation_Sequence_Reply.verify(message.llmSetEndOfGenerationSequence, _depth + 1);
                if (error)
                    return "llmSetEndOfGenerationSequence." + error;
            }
        }
        if (message.llmGetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmGetEndOfGenerationSequence")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_End_Of_Generation_Sequence_Reply.verify(message.llmGetEndOfGenerationSequence, _depth + 1);
                if (error)
                    return "llmGetEndOfGenerationSequence." + error;
            }
        }
        if (message.llmRelease != null && $Object.hasOwnProperty.call(message, "llmRelease")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Release_Reply.verify(message.llmRelease, _depth + 1);
                if (error)
                    return "llmRelease." + error;
            }
        }
        if (message.llmSetStopTokens != null && $Object.hasOwnProperty.call(message, "llmSetStopTokens")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Set_Stop_Tokens_Reply.verify(message.llmSetStopTokens, _depth + 1);
                if (error)
                    return "llmSetStopTokens." + error;
            }
        }
        if (message.llmGetStopTokens != null && $Object.hasOwnProperty.call(message, "llmGetStopTokens")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Stop_Tokens_Reply.verify(message.llmGetStopTokens, _depth + 1);
                if (error)
                    return "llmGetStopTokens." + error;
            }
        }
        if (message.llmGetContextUsageSize != null && $Object.hasOwnProperty.call(message, "llmGetContextUsageSize")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Context_Usage_Size_Reply.verify(message.llmGetContextUsageSize, _depth + 1);
                if (error)
                    return "llmGetContextUsageSize." + error;
            }
        }
        if (message.llmGetMaxContextCapacity != null && $Object.hasOwnProperty.call(message, "llmGetMaxContextCapacity")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.LLM_Get_Max_Context_Capacity_Reply.verify(message.llmGetMaxContextCapacity, _depth + 1);
                if (error)
                    return "llmGetMaxContextCapacity." + error;
            }
        }
        if (message.vlmCreate != null && $Object.hasOwnProperty.call(message, "vlmCreate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.VLM_Create_Reply.verify(message.vlmCreate, _depth + 1);
                if (error)
                    return "vlmCreate." + error;
            }
        }
        if (message.vlmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "vlmGeneratorGenerate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.VLM_Generator_Generate_Reply.verify(message.vlmGeneratorGenerate, _depth + 1);
                if (error)
                    return "vlmGeneratorGenerate." + error;
            }
        }
        if (message.genaiCheckHefExists != null && $Object.hasOwnProperty.call(message, "genaiCheckHefExists")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.GenAI_Check_Hef_Exists_Reply.verify(message.genaiCheckHefExists, _depth + 1);
                if (error)
                    return "genaiCheckHefExists." + error;
            }
        }
        if (message.speech2textCreate != null && $Object.hasOwnProperty.call(message, "speech2textCreate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.Speech2Text_Create_Reply.verify(message.speech2textCreate, _depth + 1);
                if (error)
                    return "speech2textCreate." + error;
            }
        }
        if (message.speech2textGenerate != null && $Object.hasOwnProperty.call(message, "speech2textGenerate")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.Speech2Text_Generate_Reply.verify(message.speech2textGenerate, _depth + 1);
                if (error)
                    return "speech2textGenerate." + error;
            }
        }
        if (message.speech2textRelease != null && $Object.hasOwnProperty.call(message, "speech2textRelease")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.Speech2Text_Release_Reply.verify(message.speech2textRelease, _depth + 1);
                if (error)
                    return "speech2textRelease." + error;
            }
        }
        if (message.speech2textTokenize != null && $Object.hasOwnProperty.call(message, "speech2textTokenize")) {
            if (properties.reply === 1)
                return "reply: multiple values";
            properties.reply = 1;
            {
                var error = $root.Speech2Text_Tokenize_Reply.verify(message.speech2textTokenize, _depth + 1);
                if (error)
                    return "speech2textTokenize." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GenAIRpcReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenAIRpcReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenAIRpcReply} GenAIRpcReply
     */
    GenAIRpcReply.fromObject = function (object, _depth) {
        if (object instanceof $root.GenAIRpcReply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".GenAIRpcReply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.GenAIRpcReply();
        if (object.llmCreate != null) {
            if (!$util.isObject(object.llmCreate))
                throw $TypeError(".GenAIRpcReply.llmCreate: object expected");
            message.llmCreate = $root.LLM_Create_Reply.fromObject(object.llmCreate, _depth + 1);
        }
        if (object.llmGetGeneratorParams != null) {
            if (!$util.isObject(object.llmGetGeneratorParams))
                throw $TypeError(".GenAIRpcReply.llmGetGeneratorParams: object expected");
            message.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Reply.fromObject(object.llmGetGeneratorParams, _depth + 1);
        }
        if (object.llmGeneratorCreate != null) {
            if (!$util.isObject(object.llmGeneratorCreate))
                throw $TypeError(".GenAIRpcReply.llmGeneratorCreate: object expected");
            message.llmGeneratorCreate = $root.LLM_Generator_Create_Reply.fromObject(object.llmGeneratorCreate, _depth + 1);
        }
        if (object.llmGeneratorWrite != null) {
            if (!$util.isObject(object.llmGeneratorWrite))
                throw $TypeError(".GenAIRpcReply.llmGeneratorWrite: object expected");
            message.llmGeneratorWrite = $root.LLM_Generator_Write_Reply.fromObject(object.llmGeneratorWrite, _depth + 1);
        }
        if (object.llmGeneratorGenerate != null) {
            if (!$util.isObject(object.llmGeneratorGenerate))
                throw $TypeError(".GenAIRpcReply.llmGeneratorGenerate: object expected");
            message.llmGeneratorGenerate = $root.LLM_Generator_Generate_Reply.fromObject(object.llmGeneratorGenerate, _depth + 1);
        }
        if (object.llmGeneratorRead != null) {
            if (!$util.isObject(object.llmGeneratorRead))
                throw $TypeError(".GenAIRpcReply.llmGeneratorRead: object expected");
            message.llmGeneratorRead = $root.LLM_Generator_Read_Reply.fromObject(object.llmGeneratorRead, _depth + 1);
        }
        if (object.llmGeneratorAbort != null) {
            if (!$util.isObject(object.llmGeneratorAbort))
                throw $TypeError(".GenAIRpcReply.llmGeneratorAbort: object expected");
            message.llmGeneratorAbort = $root.LLM_Generator_Abort_Reply.fromObject(object.llmGeneratorAbort, _depth + 1);
        }
        if (object.llmGeneratorRelease != null) {
            if (!$util.isObject(object.llmGeneratorRelease))
                throw $TypeError(".GenAIRpcReply.llmGeneratorRelease: object expected");
            message.llmGeneratorRelease = $root.LLM_Generator_Release_Reply.fromObject(object.llmGeneratorRelease, _depth + 1);
        }
        if (object.llmTokenize != null) {
            if (!$util.isObject(object.llmTokenize))
                throw $TypeError(".GenAIRpcReply.llmTokenize: object expected");
            message.llmTokenize = $root.LLM_Tokenize_Reply.fromObject(object.llmTokenize, _depth + 1);
        }
        if (object.llmGetContext != null) {
            if (!$util.isObject(object.llmGetContext))
                throw $TypeError(".GenAIRpcReply.llmGetContext: object expected");
            message.llmGetContext = $root.LLM_Get_Context_Reply.fromObject(object.llmGetContext, _depth + 1);
        }
        if (object.llmSetContext != null) {
            if (!$util.isObject(object.llmSetContext))
                throw $TypeError(".GenAIRpcReply.llmSetContext: object expected");
            message.llmSetContext = $root.LLM_Set_Context_Reply.fromObject(object.llmSetContext, _depth + 1);
        }
        if (object.llmClearContext != null) {
            if (!$util.isObject(object.llmClearContext))
                throw $TypeError(".GenAIRpcReply.llmClearContext: object expected");
            message.llmClearContext = $root.LLM_Clear_Context_Reply.fromObject(object.llmClearContext, _depth + 1);
        }
        if (object.llmSetEndOfGenerationSequence != null) {
            if (!$util.isObject(object.llmSetEndOfGenerationSequence))
                throw $TypeError(".GenAIRpcReply.llmSetEndOfGenerationSequence: object expected");
            message.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Reply.fromObject(object.llmSetEndOfGenerationSequence, _depth + 1);
        }
        if (object.llmGetEndOfGenerationSequence != null) {
            if (!$util.isObject(object.llmGetEndOfGenerationSequence))
                throw $TypeError(".GenAIRpcReply.llmGetEndOfGenerationSequence: object expected");
            message.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Reply.fromObject(object.llmGetEndOfGenerationSequence, _depth + 1);
        }
        if (object.llmRelease != null) {
            if (!$util.isObject(object.llmRelease))
                throw $TypeError(".GenAIRpcReply.llmRelease: object expected");
            message.llmRelease = $root.LLM_Release_Reply.fromObject(object.llmRelease, _depth + 1);
        }
        if (object.llmSetStopTokens != null) {
            if (!$util.isObject(object.llmSetStopTokens))
                throw $TypeError(".GenAIRpcReply.llmSetStopTokens: object expected");
            message.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Reply.fromObject(object.llmSetStopTokens, _depth + 1);
        }
        if (object.llmGetStopTokens != null) {
            if (!$util.isObject(object.llmGetStopTokens))
                throw $TypeError(".GenAIRpcReply.llmGetStopTokens: object expected");
            message.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Reply.fromObject(object.llmGetStopTokens, _depth + 1);
        }
        if (object.llmGetContextUsageSize != null) {
            if (!$util.isObject(object.llmGetContextUsageSize))
                throw $TypeError(".GenAIRpcReply.llmGetContextUsageSize: object expected");
            message.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Reply.fromObject(object.llmGetContextUsageSize, _depth + 1);
        }
        if (object.llmGetMaxContextCapacity != null) {
            if (!$util.isObject(object.llmGetMaxContextCapacity))
                throw $TypeError(".GenAIRpcReply.llmGetMaxContextCapacity: object expected");
            message.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Reply.fromObject(object.llmGetMaxContextCapacity, _depth + 1);
        }
        if (object.vlmCreate != null) {
            if (!$util.isObject(object.vlmCreate))
                throw $TypeError(".GenAIRpcReply.vlmCreate: object expected");
            message.vlmCreate = $root.VLM_Create_Reply.fromObject(object.vlmCreate, _depth + 1);
        }
        if (object.vlmGeneratorGenerate != null) {
            if (!$util.isObject(object.vlmGeneratorGenerate))
                throw $TypeError(".GenAIRpcReply.vlmGeneratorGenerate: object expected");
            message.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Reply.fromObject(object.vlmGeneratorGenerate, _depth + 1);
        }
        if (object.genaiCheckHefExists != null) {
            if (!$util.isObject(object.genaiCheckHefExists))
                throw $TypeError(".GenAIRpcReply.genaiCheckHefExists: object expected");
            message.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Reply.fromObject(object.genaiCheckHefExists, _depth + 1);
        }
        if (object.speech2textCreate != null) {
            if (!$util.isObject(object.speech2textCreate))
                throw $TypeError(".GenAIRpcReply.speech2textCreate: object expected");
            message.speech2textCreate = $root.Speech2Text_Create_Reply.fromObject(object.speech2textCreate, _depth + 1);
        }
        if (object.speech2textGenerate != null) {
            if (!$util.isObject(object.speech2textGenerate))
                throw $TypeError(".GenAIRpcReply.speech2textGenerate: object expected");
            message.speech2textGenerate = $root.Speech2Text_Generate_Reply.fromObject(object.speech2textGenerate, _depth + 1);
        }
        if (object.speech2textRelease != null) {
            if (!$util.isObject(object.speech2textRelease))
                throw $TypeError(".GenAIRpcReply.speech2textRelease: object expected");
            message.speech2textRelease = $root.Speech2Text_Release_Reply.fromObject(object.speech2textRelease, _depth + 1);
        }
        if (object.speech2textTokenize != null) {
            if (!$util.isObject(object.speech2textTokenize))
                throw $TypeError(".GenAIRpcReply.speech2textTokenize: object expected");
            message.speech2textTokenize = $root.Speech2Text_Tokenize_Reply.fromObject(object.speech2textTokenize, _depth + 1);
        }
        return message;
    };

    /**
     * Creates a plain object from a GenAIRpcReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenAIRpcReply
     * @static
     * @param {GenAIRpcReply} message GenAIRpcReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenAIRpcReply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (message.llmCreate != null && $Object.hasOwnProperty.call(message, "llmCreate")) {
            object.llmCreate = $root.LLM_Create_Reply.toObject(message.llmCreate, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmCreate";
        }
        if (message.llmGetGeneratorParams != null && $Object.hasOwnProperty.call(message, "llmGetGeneratorParams")) {
            object.llmGetGeneratorParams = $root.LLM_Get_Generator_Params_Reply.toObject(message.llmGetGeneratorParams, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGetGeneratorParams";
        }
        if (message.llmGeneratorCreate != null && $Object.hasOwnProperty.call(message, "llmGeneratorCreate")) {
            object.llmGeneratorCreate = $root.LLM_Generator_Create_Reply.toObject(message.llmGeneratorCreate, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGeneratorCreate";
        }
        if (message.llmGeneratorWrite != null && $Object.hasOwnProperty.call(message, "llmGeneratorWrite")) {
            object.llmGeneratorWrite = $root.LLM_Generator_Write_Reply.toObject(message.llmGeneratorWrite, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGeneratorWrite";
        }
        if (message.llmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "llmGeneratorGenerate")) {
            object.llmGeneratorGenerate = $root.LLM_Generator_Generate_Reply.toObject(message.llmGeneratorGenerate, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGeneratorGenerate";
        }
        if (message.llmGeneratorRead != null && $Object.hasOwnProperty.call(message, "llmGeneratorRead")) {
            object.llmGeneratorRead = $root.LLM_Generator_Read_Reply.toObject(message.llmGeneratorRead, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGeneratorRead";
        }
        if (message.llmGeneratorAbort != null && $Object.hasOwnProperty.call(message, "llmGeneratorAbort")) {
            object.llmGeneratorAbort = $root.LLM_Generator_Abort_Reply.toObject(message.llmGeneratorAbort, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGeneratorAbort";
        }
        if (message.llmGeneratorRelease != null && $Object.hasOwnProperty.call(message, "llmGeneratorRelease")) {
            object.llmGeneratorRelease = $root.LLM_Generator_Release_Reply.toObject(message.llmGeneratorRelease, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGeneratorRelease";
        }
        if (message.llmTokenize != null && $Object.hasOwnProperty.call(message, "llmTokenize")) {
            object.llmTokenize = $root.LLM_Tokenize_Reply.toObject(message.llmTokenize, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmTokenize";
        }
        if (message.llmGetContext != null && $Object.hasOwnProperty.call(message, "llmGetContext")) {
            object.llmGetContext = $root.LLM_Get_Context_Reply.toObject(message.llmGetContext, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGetContext";
        }
        if (message.llmSetContext != null && $Object.hasOwnProperty.call(message, "llmSetContext")) {
            object.llmSetContext = $root.LLM_Set_Context_Reply.toObject(message.llmSetContext, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmSetContext";
        }
        if (message.llmClearContext != null && $Object.hasOwnProperty.call(message, "llmClearContext")) {
            object.llmClearContext = $root.LLM_Clear_Context_Reply.toObject(message.llmClearContext, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmClearContext";
        }
        if (message.llmSetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmSetEndOfGenerationSequence")) {
            object.llmSetEndOfGenerationSequence = $root.LLM_Set_End_Of_Generation_Sequence_Reply.toObject(message.llmSetEndOfGenerationSequence, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmSetEndOfGenerationSequence";
        }
        if (message.llmGetEndOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "llmGetEndOfGenerationSequence")) {
            object.llmGetEndOfGenerationSequence = $root.LLM_Get_End_Of_Generation_Sequence_Reply.toObject(message.llmGetEndOfGenerationSequence, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGetEndOfGenerationSequence";
        }
        if (message.llmRelease != null && $Object.hasOwnProperty.call(message, "llmRelease")) {
            object.llmRelease = $root.LLM_Release_Reply.toObject(message.llmRelease, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmRelease";
        }
        if (message.llmSetStopTokens != null && $Object.hasOwnProperty.call(message, "llmSetStopTokens")) {
            object.llmSetStopTokens = $root.LLM_Set_Stop_Tokens_Reply.toObject(message.llmSetStopTokens, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmSetStopTokens";
        }
        if (message.llmGetStopTokens != null && $Object.hasOwnProperty.call(message, "llmGetStopTokens")) {
            object.llmGetStopTokens = $root.LLM_Get_Stop_Tokens_Reply.toObject(message.llmGetStopTokens, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGetStopTokens";
        }
        if (message.llmGetContextUsageSize != null && $Object.hasOwnProperty.call(message, "llmGetContextUsageSize")) {
            object.llmGetContextUsageSize = $root.LLM_Get_Context_Usage_Size_Reply.toObject(message.llmGetContextUsageSize, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGetContextUsageSize";
        }
        if (message.llmGetMaxContextCapacity != null && $Object.hasOwnProperty.call(message, "llmGetMaxContextCapacity")) {
            object.llmGetMaxContextCapacity = $root.LLM_Get_Max_Context_Capacity_Reply.toObject(message.llmGetMaxContextCapacity, options, _depth + 1);
            if (options.oneofs)
                object.reply = "llmGetMaxContextCapacity";
        }
        if (message.vlmCreate != null && $Object.hasOwnProperty.call(message, "vlmCreate")) {
            object.vlmCreate = $root.VLM_Create_Reply.toObject(message.vlmCreate, options, _depth + 1);
            if (options.oneofs)
                object.reply = "vlmCreate";
        }
        if (message.vlmGeneratorGenerate != null && $Object.hasOwnProperty.call(message, "vlmGeneratorGenerate")) {
            object.vlmGeneratorGenerate = $root.VLM_Generator_Generate_Reply.toObject(message.vlmGeneratorGenerate, options, _depth + 1);
            if (options.oneofs)
                object.reply = "vlmGeneratorGenerate";
        }
        if (message.genaiCheckHefExists != null && $Object.hasOwnProperty.call(message, "genaiCheckHefExists")) {
            object.genaiCheckHefExists = $root.GenAI_Check_Hef_Exists_Reply.toObject(message.genaiCheckHefExists, options, _depth + 1);
            if (options.oneofs)
                object.reply = "genaiCheckHefExists";
        }
        if (message.speech2textCreate != null && $Object.hasOwnProperty.call(message, "speech2textCreate")) {
            object.speech2textCreate = $root.Speech2Text_Create_Reply.toObject(message.speech2textCreate, options, _depth + 1);
            if (options.oneofs)
                object.reply = "speech2textCreate";
        }
        if (message.speech2textGenerate != null && $Object.hasOwnProperty.call(message, "speech2textGenerate")) {
            object.speech2textGenerate = $root.Speech2Text_Generate_Reply.toObject(message.speech2textGenerate, options, _depth + 1);
            if (options.oneofs)
                object.reply = "speech2textGenerate";
        }
        if (message.speech2textRelease != null && $Object.hasOwnProperty.call(message, "speech2textRelease")) {
            object.speech2textRelease = $root.Speech2Text_Release_Reply.toObject(message.speech2textRelease, options, _depth + 1);
            if (options.oneofs)
                object.reply = "speech2textRelease";
        }
        if (message.speech2textTokenize != null && $Object.hasOwnProperty.call(message, "speech2textTokenize")) {
            object.speech2textTokenize = $root.Speech2Text_Tokenize_Reply.toObject(message.speech2textTokenize, options, _depth + 1);
            if (options.oneofs)
                object.reply = "speech2textTokenize";
        }
        return object;
    };

    /**
     * Converts this GenAIRpcReply to JSON.
     * @function toJSON
     * @memberof GenAIRpcReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenAIRpcReply.prototype.toJSON = function() {
        return GenAIRpcReply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for GenAIRpcReply
     * @function getTypeUrl
     * @memberof GenAIRpcReply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    GenAIRpcReply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/GenAIRpcReply";
    };

    return GenAIRpcReply;
})();

$root.HefChunkInfo = (function() {

    /**
     * Properties of a HefChunkInfo.
     * @typedef {Object} HefChunkInfo.$Properties
     * @property {string|null} [name] HefChunkInfo name
     * @property {number|Long|null} [size] HefChunkInfo size
     * @property {number|Long|null} [offset] HefChunkInfo offset
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a HefChunkInfo.
     * @exports IHefChunkInfo
     * @interface IHefChunkInfo
     * @augments HefChunkInfo.$Properties
     * @deprecated Use HefChunkInfo.$Properties instead.
     */

    /**
     * Shape of a HefChunkInfo.
     * @typedef {HefChunkInfo.$Properties} HefChunkInfo.$Shape
     */

    /**
     * Constructs a new HefChunkInfo.
     * @exports HefChunkInfo
     * @classdesc Represents a HefChunkInfo.
     * @constructor
     * @param {HefChunkInfo.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var HefChunkInfo = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * HefChunkInfo name.
     * @member {string} name
     * @memberof HefChunkInfo
     * @instance
     */
    HefChunkInfo.prototype.name = "";

    /**
     * HefChunkInfo size.
     * @member {number|Long} size
     * @memberof HefChunkInfo
     * @instance
     */
    HefChunkInfo.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * HefChunkInfo offset.
     * @member {number|Long} offset
     * @memberof HefChunkInfo
     * @instance
     */
    HefChunkInfo.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new HefChunkInfo instance using the specified properties.
     * @function create
     * @memberof HefChunkInfo
     * @static
     * @param {HefChunkInfo.$Properties=} [properties] Properties to set
     * @returns {HefChunkInfo} HefChunkInfo instance
     * @type {{
     *   (properties: HefChunkInfo.$Shape): HefChunkInfo & HefChunkInfo.$Shape;
     *   (properties?: HefChunkInfo.$Properties): HefChunkInfo;
     * }}
     */
    HefChunkInfo.create = function(properties) {
        return new HefChunkInfo(properties);
    };

    /**
     * Encodes the specified HefChunkInfo message. Does not implicitly {@link HefChunkInfo.verify|verify} messages.
     * @function encode
     * @memberof HefChunkInfo
     * @static
     * @param {HefChunkInfo.$Properties} message HefChunkInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HefChunkInfo.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.size != null && $Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.size);
        if (message.offset != null && $Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.offset);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified HefChunkInfo message, length delimited. Does not implicitly {@link HefChunkInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HefChunkInfo
     * @static
     * @param {HefChunkInfo.$Properties} message HefChunkInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HefChunkInfo.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a HefChunkInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HefChunkInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HefChunkInfo & HefChunkInfo.$Shape} HefChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HefChunkInfo.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.HefChunkInfo(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.name = value;
                    else
                        delete message.name;
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                        message.size = value;
                    else
                        delete message.size;
                    continue;
                }
            case 3: {
                    if (wireType !== 0)
                        break;
                    if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                        message.offset = value;
                    else
                        delete message.offset;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a HefChunkInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HefChunkInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HefChunkInfo & HefChunkInfo.$Shape} HefChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HefChunkInfo.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HefChunkInfo message.
     * @function verify
     * @memberof HefChunkInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HefChunkInfo.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.size != null && $Object.hasOwnProperty.call(message, "size"))
            if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                return "size: integer|Long expected";
        if (message.offset != null && $Object.hasOwnProperty.call(message, "offset"))
            if (!$util.isInteger(message.offset) && !(message.offset && $util.isInteger(message.offset.low) && $util.isInteger(message.offset.high)))
                return "offset: integer|Long expected";
        return null;
    };

    /**
     * Creates a HefChunkInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HefChunkInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HefChunkInfo} HefChunkInfo
     */
    HefChunkInfo.fromObject = function (object, _depth) {
        if (object instanceof $root.HefChunkInfo)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".HefChunkInfo: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.HefChunkInfo();
        if (object.name != null)
            if (typeof object.name !== "string" || object.name.length)
                message.name = $String(object.name);
        if (object.size != null)
            if (typeof object.size === "object" ? object.size.low || object.size.high : $Number(object.size) !== 0)
                if ($util.Long)
                    message.size = $util.Long.fromValue(object.size, true);
                else if (typeof object.size === "string")
                    message.size = $parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
        if (object.offset != null)
            if (typeof object.offset === "object" ? object.offset.low || object.offset.high : $Number(object.offset) !== 0)
                if ($util.Long)
                    message.offset = $util.Long.fromValue(object.offset, true);
                else if (typeof object.offset === "string")
                    message.offset = $parseInt(object.offset, 10);
                else if (typeof object.offset === "number")
                    message.offset = object.offset;
                else if (typeof object.offset === "object")
                    message.offset = new $util.LongBits(object.offset.low >>> 0, object.offset.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a HefChunkInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HefChunkInfo
     * @static
     * @param {HefChunkInfo} message HefChunkInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HefChunkInfo.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.name = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.size = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
            } else
                object.size = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.offset = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
            } else
                object.offset = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
        }
        if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
            object.name = message.name;
        if (message.size != null && $Object.hasOwnProperty.call(message, "size"))
            if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                object.size = typeof message.size === "number" ? $BigInt(message.size) : $util.Long.fromBits(message.size.low >>> 0, message.size.high >>> 0, true).toBigInt();
            else if (typeof message.size === "number")
                object.size = options.longs === $String ? $String(message.size) : message.size;
            else
                object.size = options.longs === $String ? $util.Long.prototype.toString.call(message.size) : options.longs === $Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
        if (message.offset != null && $Object.hasOwnProperty.call(message, "offset"))
            if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                object.offset = typeof message.offset === "number" ? $BigInt(message.offset) : $util.Long.fromBits(message.offset.low >>> 0, message.offset.high >>> 0, true).toBigInt();
            else if (typeof message.offset === "number")
                object.offset = options.longs === $String ? $String(message.offset) : message.offset;
            else
                object.offset = options.longs === $String ? $util.Long.prototype.toString.call(message.offset) : options.longs === $Number ? new $util.LongBits(message.offset.low >>> 0, message.offset.high >>> 0).toNumber(true) : message.offset;
        return object;
    };

    /**
     * Converts this HefChunkInfo to JSON.
     * @function toJSON
     * @memberof HefChunkInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HefChunkInfo.prototype.toJSON = function() {
        return HefChunkInfo.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for HefChunkInfo
     * @function getTypeUrl
     * @memberof HefChunkInfo
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    HefChunkInfo.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/HefChunkInfo";
    };

    return HefChunkInfo;
})();

$root.LLM_Create_Request = (function() {

    /**
     * Properties of a LLM_Create_Request.
     * @typedef {Object} LLM_Create_Request.$Properties
     * @property {string|null} [loraName] LLM_Create_Request loraName
     * @property {string|null} [hefPath] LLM_Create_Request hefPath
     * @property {string|null} [groupId] LLM_Create_Request groupId
     * @property {Array.<HefChunkInfo.$Properties>|null} [chunksToTransfer] LLM_Create_Request chunksToTransfer
     * @property {boolean|null} [tokenizerOnHost] LLM_Create_Request tokenizerOnHost
     * @property {number|Long|null} [totalHefSize] LLM_Create_Request totalHefSize
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Create_Request.
     * @exports ILLM_Create_Request
     * @interface ILLM_Create_Request
     * @augments LLM_Create_Request.$Properties
     * @deprecated Use LLM_Create_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Create_Request.
     * @typedef {LLM_Create_Request.$Properties} LLM_Create_Request.$Shape
     */

    /**
     * Constructs a new LLM_Create_Request.
     * @exports LLM_Create_Request
     * @classdesc Represents a LLM_Create_Request.
     * @constructor
     * @param {LLM_Create_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Create_Request = function (properties) {
        this.chunksToTransfer = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Create_Request loraName.
     * @member {string} loraName
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.loraName = "";

    /**
     * LLM_Create_Request hefPath.
     * @member {string} hefPath
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.hefPath = "";

    /**
     * LLM_Create_Request groupId.
     * @member {string} groupId
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.groupId = "";

    /**
     * LLM_Create_Request chunksToTransfer.
     * @member {Array.<HefChunkInfo.$Properties>} chunksToTransfer
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.chunksToTransfer = $util.emptyArray;

    /**
     * LLM_Create_Request tokenizerOnHost.
     * @member {boolean} tokenizerOnHost
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.tokenizerOnHost = false;

    /**
     * LLM_Create_Request totalHefSize.
     * @member {number|Long} totalHefSize
     * @memberof LLM_Create_Request
     * @instance
     */
    LLM_Create_Request.prototype.totalHefSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new LLM_Create_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Create_Request
     * @static
     * @param {LLM_Create_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Create_Request} LLM_Create_Request instance
     * @type {{
     *   (properties: LLM_Create_Request.$Shape): LLM_Create_Request & LLM_Create_Request.$Shape;
     *   (properties?: LLM_Create_Request.$Properties): LLM_Create_Request;
     * }}
     */
    LLM_Create_Request.create = function(properties) {
        return new LLM_Create_Request(properties);
    };

    /**
     * Encodes the specified LLM_Create_Request message. Does not implicitly {@link LLM_Create_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Create_Request
     * @static
     * @param {LLM_Create_Request.$Properties} message LLM_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Create_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.loraName != null && $Object.hasOwnProperty.call(message, "loraName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.loraName);
        if (message.hefPath != null && $Object.hasOwnProperty.call(message, "hefPath"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.hefPath);
        if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.groupId);
        if (message.chunksToTransfer != null && message.chunksToTransfer.length)
            for (var i = 0; i < message.chunksToTransfer.length; ++i)
                $root.HefChunkInfo.encode(message.chunksToTransfer[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
        if (message.tokenizerOnHost != null && $Object.hasOwnProperty.call(message, "tokenizerOnHost"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.tokenizerOnHost);
        if (message.totalHefSize != null && $Object.hasOwnProperty.call(message, "totalHefSize"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.totalHefSize);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Create_Request message, length delimited. Does not implicitly {@link LLM_Create_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Create_Request
     * @static
     * @param {LLM_Create_Request.$Properties} message LLM_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Create_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Create_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Create_Request & LLM_Create_Request.$Shape} LLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Create_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Create_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.loraName = value;
                    else
                        delete message.loraName;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.hefPath = value;
                    else
                        delete message.hefPath;
                    continue;
                }
            case 3: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.groupId = value;
                    else
                        delete message.groupId;
                    continue;
                }
            case 4: {
                    if (wireType !== 2)
                        break;
                    if (!(message.chunksToTransfer && message.chunksToTransfer.length))
                        message.chunksToTransfer = [];
                    message.chunksToTransfer.push($root.HefChunkInfo.decode(reader, reader.uint32(), $undefined, _depth + 1));
                    continue;
                }
            case 5: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.bool())
                        message.tokenizerOnHost = value;
                    else
                        delete message.tokenizerOnHost;
                    continue;
                }
            case 6: {
                    if (wireType !== 0)
                        break;
                    if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                        message.totalHefSize = value;
                    else
                        delete message.totalHefSize;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Create_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Create_Request & LLM_Create_Request.$Shape} LLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Create_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Create_Request message.
     * @function verify
     * @memberof LLM_Create_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Create_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.loraName != null && $Object.hasOwnProperty.call(message, "loraName"))
            if (!$util.isString(message.loraName))
                return "loraName: string expected";
        if (message.hefPath != null && $Object.hasOwnProperty.call(message, "hefPath"))
            if (!$util.isString(message.hefPath))
                return "hefPath: string expected";
        if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            if (!$util.isString(message.groupId))
                return "groupId: string expected";
        if (message.chunksToTransfer != null && $Object.hasOwnProperty.call(message, "chunksToTransfer")) {
            if (!$Array.isArray(message.chunksToTransfer))
                return "chunksToTransfer: array expected";
            for (var i = 0; i < message.chunksToTransfer.length; ++i) {
                var error = $root.HefChunkInfo.verify(message.chunksToTransfer[i], _depth + 1);
                if (error)
                    return "chunksToTransfer." + error;
            }
        }
        if (message.tokenizerOnHost != null && $Object.hasOwnProperty.call(message, "tokenizerOnHost"))
            if (typeof message.tokenizerOnHost !== "boolean")
                return "tokenizerOnHost: boolean expected";
        if (message.totalHefSize != null && $Object.hasOwnProperty.call(message, "totalHefSize"))
            if (!$util.isInteger(message.totalHefSize) && !(message.totalHefSize && $util.isInteger(message.totalHefSize.low) && $util.isInteger(message.totalHefSize.high)))
                return "totalHefSize: integer|Long expected";
        return null;
    };

    /**
     * Creates a LLM_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Create_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Create_Request} LLM_Create_Request
     */
    LLM_Create_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Create_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Create_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Create_Request();
        if (object.loraName != null)
            if (typeof object.loraName !== "string" || object.loraName.length)
                message.loraName = $String(object.loraName);
        if (object.hefPath != null)
            if (typeof object.hefPath !== "string" || object.hefPath.length)
                message.hefPath = $String(object.hefPath);
        if (object.groupId != null)
            if (typeof object.groupId !== "string" || object.groupId.length)
                message.groupId = $String(object.groupId);
        if (object.chunksToTransfer) {
            if (!$Array.isArray(object.chunksToTransfer))
                throw $TypeError(".LLM_Create_Request.chunksToTransfer: array expected");
            message.chunksToTransfer = $Array(object.chunksToTransfer.length);
            for (var i = 0; i < object.chunksToTransfer.length; ++i) {
                if (!$util.isObject(object.chunksToTransfer[i]))
                    throw $TypeError(".LLM_Create_Request.chunksToTransfer: object expected");
                message.chunksToTransfer[i] = $root.HefChunkInfo.fromObject(object.chunksToTransfer[i], _depth + 1);
            }
        }
        if (object.tokenizerOnHost != null)
            if (object.tokenizerOnHost)
                message.tokenizerOnHost = $Boolean(object.tokenizerOnHost);
        if (object.totalHefSize != null)
            if (typeof object.totalHefSize === "object" ? object.totalHefSize.low || object.totalHefSize.high : $Number(object.totalHefSize) !== 0)
                if ($util.Long)
                    message.totalHefSize = $util.Long.fromValue(object.totalHefSize, true);
                else if (typeof object.totalHefSize === "string")
                    message.totalHefSize = $parseInt(object.totalHefSize, 10);
                else if (typeof object.totalHefSize === "number")
                    message.totalHefSize = object.totalHefSize;
                else if (typeof object.totalHefSize === "object")
                    message.totalHefSize = new $util.LongBits(object.totalHefSize.low >>> 0, object.totalHefSize.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a LLM_Create_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Create_Request
     * @static
     * @param {LLM_Create_Request} message LLM_Create_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Create_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.chunksToTransfer = [];
        if (options.defaults) {
            object.loraName = "";
            object.hefPath = "";
            object.groupId = "";
            object.tokenizerOnHost = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.totalHefSize = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
            } else
                object.totalHefSize = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
        }
        if (message.loraName != null && $Object.hasOwnProperty.call(message, "loraName"))
            object.loraName = message.loraName;
        if (message.hefPath != null && $Object.hasOwnProperty.call(message, "hefPath"))
            object.hefPath = message.hefPath;
        if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            object.groupId = message.groupId;
        if (message.chunksToTransfer && message.chunksToTransfer.length) {
            object.chunksToTransfer = $Array(message.chunksToTransfer.length);
            for (var j = 0; j < message.chunksToTransfer.length; ++j)
                object.chunksToTransfer[j] = $root.HefChunkInfo.toObject(message.chunksToTransfer[j], options, _depth + 1);
        }
        if (message.tokenizerOnHost != null && $Object.hasOwnProperty.call(message, "tokenizerOnHost"))
            object.tokenizerOnHost = message.tokenizerOnHost;
        if (message.totalHefSize != null && $Object.hasOwnProperty.call(message, "totalHefSize"))
            if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                object.totalHefSize = typeof message.totalHefSize === "number" ? $BigInt(message.totalHefSize) : $util.Long.fromBits(message.totalHefSize.low >>> 0, message.totalHefSize.high >>> 0, true).toBigInt();
            else if (typeof message.totalHefSize === "number")
                object.totalHefSize = options.longs === $String ? $String(message.totalHefSize) : message.totalHefSize;
            else
                object.totalHefSize = options.longs === $String ? $util.Long.prototype.toString.call(message.totalHefSize) : options.longs === $Number ? new $util.LongBits(message.totalHefSize.low >>> 0, message.totalHefSize.high >>> 0).toNumber(true) : message.totalHefSize;
        return object;
    };

    /**
     * Converts this LLM_Create_Request to JSON.
     * @function toJSON
     * @memberof LLM_Create_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Create_Request.prototype.toJSON = function() {
        return LLM_Create_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Create_Request
     * @function getTypeUrl
     * @memberof LLM_Create_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Create_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Create_Request";
    };

    return LLM_Create_Request;
})();

$root.LLM_Create_Reply = (function() {

    /**
     * Properties of a LLM_Create_Reply.
     * @typedef {Object} LLM_Create_Reply.$Properties
     * @property {number|null} [status] LLM_Create_Reply status
     * @property {string|null} [promptTemplate] LLM_Create_Reply promptTemplate
     * @property {number|null} [embeddingFeatures] LLM_Create_Reply embeddingFeatures
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Create_Reply.
     * @exports ILLM_Create_Reply
     * @interface ILLM_Create_Reply
     * @augments LLM_Create_Reply.$Properties
     * @deprecated Use LLM_Create_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Create_Reply.
     * @typedef {LLM_Create_Reply.$Properties} LLM_Create_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Create_Reply.
     * @exports LLM_Create_Reply
     * @classdesc Represents a LLM_Create_Reply.
     * @constructor
     * @param {LLM_Create_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Create_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Create_Reply status.
     * @member {number} status
     * @memberof LLM_Create_Reply
     * @instance
     */
    LLM_Create_Reply.prototype.status = 0;

    /**
     * LLM_Create_Reply promptTemplate.
     * @member {string} promptTemplate
     * @memberof LLM_Create_Reply
     * @instance
     */
    LLM_Create_Reply.prototype.promptTemplate = "";

    /**
     * LLM_Create_Reply embeddingFeatures.
     * @member {number} embeddingFeatures
     * @memberof LLM_Create_Reply
     * @instance
     */
    LLM_Create_Reply.prototype.embeddingFeatures = 0;

    /**
     * Creates a new LLM_Create_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Create_Reply
     * @static
     * @param {LLM_Create_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Create_Reply} LLM_Create_Reply instance
     * @type {{
     *   (properties: LLM_Create_Reply.$Shape): LLM_Create_Reply & LLM_Create_Reply.$Shape;
     *   (properties?: LLM_Create_Reply.$Properties): LLM_Create_Reply;
     * }}
     */
    LLM_Create_Reply.create = function(properties) {
        return new LLM_Create_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Create_Reply message. Does not implicitly {@link LLM_Create_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Create_Reply
     * @static
     * @param {LLM_Create_Reply.$Properties} message LLM_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Create_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.promptTemplate != null && $Object.hasOwnProperty.call(message, "promptTemplate"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.promptTemplate);
        if (message.embeddingFeatures != null && $Object.hasOwnProperty.call(message, "embeddingFeatures"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.embeddingFeatures);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Create_Reply message, length delimited. Does not implicitly {@link LLM_Create_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Create_Reply
     * @static
     * @param {LLM_Create_Reply.$Properties} message LLM_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Create_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Create_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Create_Reply & LLM_Create_Reply.$Shape} LLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Create_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Create_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.promptTemplate = value;
                    else
                        delete message.promptTemplate;
                    continue;
                }
            case 3: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.embeddingFeatures = value;
                    else
                        delete message.embeddingFeatures;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Create_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Create_Reply & LLM_Create_Reply.$Shape} LLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Create_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Create_Reply message.
     * @function verify
     * @memberof LLM_Create_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Create_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.promptTemplate != null && $Object.hasOwnProperty.call(message, "promptTemplate"))
            if (!$util.isString(message.promptTemplate))
                return "promptTemplate: string expected";
        if (message.embeddingFeatures != null && $Object.hasOwnProperty.call(message, "embeddingFeatures"))
            if (!$util.isInteger(message.embeddingFeatures))
                return "embeddingFeatures: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Create_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Create_Reply} LLM_Create_Reply
     */
    LLM_Create_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Create_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Create_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Create_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        if (object.promptTemplate != null)
            if (typeof object.promptTemplate !== "string" || object.promptTemplate.length)
                message.promptTemplate = $String(object.promptTemplate);
        if (object.embeddingFeatures != null)
            if ($Number(object.embeddingFeatures) !== 0)
                message.embeddingFeatures = object.embeddingFeatures >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Create_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Create_Reply
     * @static
     * @param {LLM_Create_Reply} message LLM_Create_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Create_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.promptTemplate = "";
            object.embeddingFeatures = 0;
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        if (message.promptTemplate != null && $Object.hasOwnProperty.call(message, "promptTemplate"))
            object.promptTemplate = message.promptTemplate;
        if (message.embeddingFeatures != null && $Object.hasOwnProperty.call(message, "embeddingFeatures"))
            object.embeddingFeatures = message.embeddingFeatures;
        return object;
    };

    /**
     * Converts this LLM_Create_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Create_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Create_Reply.prototype.toJSON = function() {
        return LLM_Create_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Create_Reply
     * @function getTypeUrl
     * @memberof LLM_Create_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Create_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Create_Reply";
    };

    return LLM_Create_Reply;
})();

$root.LLM_Get_Generator_Params_Request = (function() {

    /**
     * Properties of a LLM_Get_Generator_Params_Request.
     * @typedef {Object} LLM_Get_Generator_Params_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Generator_Params_Request.
     * @exports ILLM_Get_Generator_Params_Request
     * @interface ILLM_Get_Generator_Params_Request
     * @augments LLM_Get_Generator_Params_Request.$Properties
     * @deprecated Use LLM_Get_Generator_Params_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Generator_Params_Request.
     * @typedef {LLM_Get_Generator_Params_Request.$Properties} LLM_Get_Generator_Params_Request.$Shape
     */

    /**
     * Constructs a new LLM_Get_Generator_Params_Request.
     * @exports LLM_Get_Generator_Params_Request
     * @classdesc Represents a LLM_Get_Generator_Params_Request.
     * @constructor
     * @param {LLM_Get_Generator_Params_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Generator_Params_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Get_Generator_Params_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {LLM_Get_Generator_Params_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Generator_Params_Request} LLM_Get_Generator_Params_Request instance
     * @type {{
     *   (properties: LLM_Get_Generator_Params_Request.$Shape): LLM_Get_Generator_Params_Request & LLM_Get_Generator_Params_Request.$Shape;
     *   (properties?: LLM_Get_Generator_Params_Request.$Properties): LLM_Get_Generator_Params_Request;
     * }}
     */
    LLM_Get_Generator_Params_Request.create = function(properties) {
        return new LLM_Get_Generator_Params_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Generator_Params_Request message. Does not implicitly {@link LLM_Get_Generator_Params_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {LLM_Get_Generator_Params_Request.$Properties} message LLM_Get_Generator_Params_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Generator_Params_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Generator_Params_Request message, length delimited. Does not implicitly {@link LLM_Get_Generator_Params_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {LLM_Get_Generator_Params_Request.$Properties} message LLM_Get_Generator_Params_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Generator_Params_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Generator_Params_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Generator_Params_Request & LLM_Get_Generator_Params_Request.$Shape} LLM_Get_Generator_Params_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Generator_Params_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Generator_Params_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Generator_Params_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Generator_Params_Request & LLM_Get_Generator_Params_Request.$Shape} LLM_Get_Generator_Params_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Generator_Params_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Generator_Params_Request message.
     * @function verify
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Generator_Params_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Get_Generator_Params_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Generator_Params_Request} LLM_Get_Generator_Params_Request
     */
    LLM_Get_Generator_Params_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Generator_Params_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Generator_Params_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Get_Generator_Params_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Generator_Params_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {LLM_Get_Generator_Params_Request} message LLM_Get_Generator_Params_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Generator_Params_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Get_Generator_Params_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Generator_Params_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Generator_Params_Request.prototype.toJSON = function() {
        return LLM_Get_Generator_Params_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Generator_Params_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Generator_Params_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Generator_Params_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Generator_Params_Request";
    };

    return LLM_Get_Generator_Params_Request;
})();

$root.LLMGeneratorParams = (function() {

    /**
     * Properties of a LLMGeneratorParams.
     * @typedef {Object} LLMGeneratorParams.$Properties
     * @property {number|null} [temperature] LLMGeneratorParams temperature
     * @property {number|null} [topP] LLMGeneratorParams topP
     * @property {number|null} [topK] LLMGeneratorParams topK
     * @property {number|null} [frequencyPenalty] LLMGeneratorParams frequencyPenalty
     * @property {number|null} [maxGeneratedTokens] LLMGeneratorParams maxGeneratedTokens
     * @property {boolean|null} [doSample] LLMGeneratorParams doSample
     * @property {number|null} [seed] LLMGeneratorParams seed
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLMGeneratorParams.
     * @exports ILLMGeneratorParams
     * @interface ILLMGeneratorParams
     * @augments LLMGeneratorParams.$Properties
     * @deprecated Use LLMGeneratorParams.$Properties instead.
     */

    /**
     * Shape of a LLMGeneratorParams.
     * @typedef {LLMGeneratorParams.$Properties} LLMGeneratorParams.$Shape
     */

    /**
     * Constructs a new LLMGeneratorParams.
     * @exports LLMGeneratorParams
     * @classdesc Represents a LLMGeneratorParams.
     * @constructor
     * @param {LLMGeneratorParams.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLMGeneratorParams = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLMGeneratorParams temperature.
     * @member {number} temperature
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.temperature = 0;

    /**
     * LLMGeneratorParams topP.
     * @member {number} topP
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.topP = 0;

    /**
     * LLMGeneratorParams topK.
     * @member {number} topK
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.topK = 0;

    /**
     * LLMGeneratorParams frequencyPenalty.
     * @member {number} frequencyPenalty
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.frequencyPenalty = 0;

    /**
     * LLMGeneratorParams maxGeneratedTokens.
     * @member {number} maxGeneratedTokens
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.maxGeneratedTokens = 0;

    /**
     * LLMGeneratorParams doSample.
     * @member {boolean} doSample
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.doSample = false;

    /**
     * LLMGeneratorParams seed.
     * @member {number} seed
     * @memberof LLMGeneratorParams
     * @instance
     */
    LLMGeneratorParams.prototype.seed = 0;

    /**
     * Creates a new LLMGeneratorParams instance using the specified properties.
     * @function create
     * @memberof LLMGeneratorParams
     * @static
     * @param {LLMGeneratorParams.$Properties=} [properties] Properties to set
     * @returns {LLMGeneratorParams} LLMGeneratorParams instance
     * @type {{
     *   (properties: LLMGeneratorParams.$Shape): LLMGeneratorParams & LLMGeneratorParams.$Shape;
     *   (properties?: LLMGeneratorParams.$Properties): LLMGeneratorParams;
     * }}
     */
    LLMGeneratorParams.create = function(properties) {
        return new LLMGeneratorParams(properties);
    };

    /**
     * Encodes the specified LLMGeneratorParams message. Does not implicitly {@link LLMGeneratorParams.verify|verify} messages.
     * @function encode
     * @memberof LLMGeneratorParams
     * @static
     * @param {LLMGeneratorParams.$Properties} message LLMGeneratorParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLMGeneratorParams.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.temperature != null && $Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.temperature);
        if (message.topP != null && $Object.hasOwnProperty.call(message, "topP"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.topP);
        if (message.topK != null && $Object.hasOwnProperty.call(message, "topK"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.topK);
        if (message.frequencyPenalty != null && $Object.hasOwnProperty.call(message, "frequencyPenalty"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.frequencyPenalty);
        if (message.maxGeneratedTokens != null && $Object.hasOwnProperty.call(message, "maxGeneratedTokens"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.maxGeneratedTokens);
        if (message.doSample != null && $Object.hasOwnProperty.call(message, "doSample"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.doSample);
        if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.seed);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLMGeneratorParams message, length delimited. Does not implicitly {@link LLMGeneratorParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLMGeneratorParams
     * @static
     * @param {LLMGeneratorParams.$Properties} message LLMGeneratorParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLMGeneratorParams.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLMGeneratorParams message from the specified reader or buffer.
     * @function decode
     * @memberof LLMGeneratorParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLMGeneratorParams & LLMGeneratorParams.$Shape} LLMGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLMGeneratorParams.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLMGeneratorParams(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 5)
                        break;
                    if ((value = reader.float()) !== 0)
                        message.temperature = value;
                    else
                        delete message.temperature;
                    continue;
                }
            case 2: {
                    if (wireType !== 5)
                        break;
                    if ((value = reader.float()) !== 0)
                        message.topP = value;
                    else
                        delete message.topP;
                    continue;
                }
            case 3: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.topK = value;
                    else
                        delete message.topK;
                    continue;
                }
            case 4: {
                    if (wireType !== 5)
                        break;
                    if ((value = reader.float()) !== 0)
                        message.frequencyPenalty = value;
                    else
                        delete message.frequencyPenalty;
                    continue;
                }
            case 5: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.maxGeneratedTokens = value;
                    else
                        delete message.maxGeneratedTokens;
                    continue;
                }
            case 6: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.bool())
                        message.doSample = value;
                    else
                        delete message.doSample;
                    continue;
                }
            case 7: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.seed = value;
                    else
                        delete message.seed;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLMGeneratorParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLMGeneratorParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLMGeneratorParams & LLMGeneratorParams.$Shape} LLMGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLMGeneratorParams.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLMGeneratorParams message.
     * @function verify
     * @memberof LLMGeneratorParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLMGeneratorParams.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.temperature != null && $Object.hasOwnProperty.call(message, "temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        if (message.topP != null && $Object.hasOwnProperty.call(message, "topP"))
            if (typeof message.topP !== "number")
                return "topP: number expected";
        if (message.topK != null && $Object.hasOwnProperty.call(message, "topK"))
            if (!$util.isInteger(message.topK))
                return "topK: integer expected";
        if (message.frequencyPenalty != null && $Object.hasOwnProperty.call(message, "frequencyPenalty"))
            if (typeof message.frequencyPenalty !== "number")
                return "frequencyPenalty: number expected";
        if (message.maxGeneratedTokens != null && $Object.hasOwnProperty.call(message, "maxGeneratedTokens"))
            if (!$util.isInteger(message.maxGeneratedTokens))
                return "maxGeneratedTokens: integer expected";
        if (message.doSample != null && $Object.hasOwnProperty.call(message, "doSample"))
            if (typeof message.doSample !== "boolean")
                return "doSample: boolean expected";
        if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
            if (!$util.isInteger(message.seed))
                return "seed: integer expected";
        return null;
    };

    /**
     * Creates a LLMGeneratorParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLMGeneratorParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLMGeneratorParams} LLMGeneratorParams
     */
    LLMGeneratorParams.fromObject = function (object, _depth) {
        if (object instanceof $root.LLMGeneratorParams)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLMGeneratorParams: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLMGeneratorParams();
        if (object.temperature != null)
            if ($Number(object.temperature) !== 0)
                message.temperature = $Number(object.temperature);
        if (object.topP != null)
            if ($Number(object.topP) !== 0)
                message.topP = $Number(object.topP);
        if (object.topK != null)
            if ($Number(object.topK) !== 0)
                message.topK = object.topK >>> 0;
        if (object.frequencyPenalty != null)
            if ($Number(object.frequencyPenalty) !== 0)
                message.frequencyPenalty = $Number(object.frequencyPenalty);
        if (object.maxGeneratedTokens != null)
            if ($Number(object.maxGeneratedTokens) !== 0)
                message.maxGeneratedTokens = object.maxGeneratedTokens >>> 0;
        if (object.doSample != null)
            if (object.doSample)
                message.doSample = $Boolean(object.doSample);
        if (object.seed != null)
            if ($Number(object.seed) !== 0)
                message.seed = object.seed >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLMGeneratorParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLMGeneratorParams
     * @static
     * @param {LLMGeneratorParams} message LLMGeneratorParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLMGeneratorParams.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.temperature = 0;
            object.topP = 0;
            object.topK = 0;
            object.frequencyPenalty = 0;
            object.maxGeneratedTokens = 0;
            object.doSample = false;
            object.seed = 0;
        }
        if (message.temperature != null && $Object.hasOwnProperty.call(message, "temperature"))
            object.temperature = options.json && !$isFinite(message.temperature) ? $String(message.temperature) : message.temperature;
        if (message.topP != null && $Object.hasOwnProperty.call(message, "topP"))
            object.topP = options.json && !$isFinite(message.topP) ? $String(message.topP) : message.topP;
        if (message.topK != null && $Object.hasOwnProperty.call(message, "topK"))
            object.topK = message.topK;
        if (message.frequencyPenalty != null && $Object.hasOwnProperty.call(message, "frequencyPenalty"))
            object.frequencyPenalty = options.json && !$isFinite(message.frequencyPenalty) ? $String(message.frequencyPenalty) : message.frequencyPenalty;
        if (message.maxGeneratedTokens != null && $Object.hasOwnProperty.call(message, "maxGeneratedTokens"))
            object.maxGeneratedTokens = message.maxGeneratedTokens;
        if (message.doSample != null && $Object.hasOwnProperty.call(message, "doSample"))
            object.doSample = message.doSample;
        if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
            object.seed = message.seed;
        return object;
    };

    /**
     * Converts this LLMGeneratorParams to JSON.
     * @function toJSON
     * @memberof LLMGeneratorParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLMGeneratorParams.prototype.toJSON = function() {
        return LLMGeneratorParams.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLMGeneratorParams
     * @function getTypeUrl
     * @memberof LLMGeneratorParams
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLMGeneratorParams.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLMGeneratorParams";
    };

    return LLMGeneratorParams;
})();

$root.LLM_Get_Generator_Params_Reply = (function() {

    /**
     * Properties of a LLM_Get_Generator_Params_Reply.
     * @typedef {Object} LLM_Get_Generator_Params_Reply.$Properties
     * @property {LLMGeneratorParams.$Properties|null} [generatorParams] LLM_Get_Generator_Params_Reply generatorParams
     * @property {number|null} [status] LLM_Get_Generator_Params_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Generator_Params_Reply.
     * @exports ILLM_Get_Generator_Params_Reply
     * @interface ILLM_Get_Generator_Params_Reply
     * @augments LLM_Get_Generator_Params_Reply.$Properties
     * @deprecated Use LLM_Get_Generator_Params_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Generator_Params_Reply.
     * @typedef {LLM_Get_Generator_Params_Reply.$Properties} LLM_Get_Generator_Params_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Get_Generator_Params_Reply.
     * @exports LLM_Get_Generator_Params_Reply
     * @classdesc Represents a LLM_Get_Generator_Params_Reply.
     * @constructor
     * @param {LLM_Get_Generator_Params_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Generator_Params_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Get_Generator_Params_Reply generatorParams.
     * @member {LLMGeneratorParams.$Properties|null|undefined} generatorParams
     * @memberof LLM_Get_Generator_Params_Reply
     * @instance
     */
    LLM_Get_Generator_Params_Reply.prototype.generatorParams = null;

    /**
     * LLM_Get_Generator_Params_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Generator_Params_Reply
     * @instance
     */
    LLM_Get_Generator_Params_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Get_Generator_Params_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {LLM_Get_Generator_Params_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Generator_Params_Reply} LLM_Get_Generator_Params_Reply instance
     * @type {{
     *   (properties: LLM_Get_Generator_Params_Reply.$Shape): LLM_Get_Generator_Params_Reply & LLM_Get_Generator_Params_Reply.$Shape;
     *   (properties?: LLM_Get_Generator_Params_Reply.$Properties): LLM_Get_Generator_Params_Reply;
     * }}
     */
    LLM_Get_Generator_Params_Reply.create = function(properties) {
        return new LLM_Get_Generator_Params_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Generator_Params_Reply message. Does not implicitly {@link LLM_Get_Generator_Params_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {LLM_Get_Generator_Params_Reply.$Properties} message LLM_Get_Generator_Params_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Generator_Params_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams"))
            $root.LLMGeneratorParams.encode(message.generatorParams, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Generator_Params_Reply message, length delimited. Does not implicitly {@link LLM_Get_Generator_Params_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {LLM_Get_Generator_Params_Reply.$Properties} message LLM_Get_Generator_Params_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Generator_Params_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Generator_Params_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Generator_Params_Reply & LLM_Get_Generator_Params_Reply.$Shape} LLM_Get_Generator_Params_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Generator_Params_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Generator_Params_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    message.generatorParams = $root.LLMGeneratorParams.decode(reader, reader.uint32(), $undefined, _depth + 1, message.generatorParams);
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Generator_Params_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Generator_Params_Reply & LLM_Get_Generator_Params_Reply.$Shape} LLM_Get_Generator_Params_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Generator_Params_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Generator_Params_Reply message.
     * @function verify
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Generator_Params_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams")) {
            var error = $root.LLMGeneratorParams.verify(message.generatorParams, _depth + 1);
            if (error)
                return "generatorParams." + error;
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Generator_Params_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Generator_Params_Reply} LLM_Get_Generator_Params_Reply
     */
    LLM_Get_Generator_Params_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Generator_Params_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Generator_Params_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Get_Generator_Params_Reply();
        if (object.generatorParams != null) {
            if (!$util.isObject(object.generatorParams))
                throw $TypeError(".LLM_Get_Generator_Params_Reply.generatorParams: object expected");
            message.generatorParams = $root.LLMGeneratorParams.fromObject(object.generatorParams, _depth + 1);
        }
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Generator_Params_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {LLM_Get_Generator_Params_Reply} message LLM_Get_Generator_Params_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Generator_Params_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.generatorParams = null;
            object.status = 0;
        }
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams"))
            object.generatorParams = $root.LLMGeneratorParams.toObject(message.generatorParams, options, _depth + 1);
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Get_Generator_Params_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Generator_Params_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Generator_Params_Reply.prototype.toJSON = function() {
        return LLM_Get_Generator_Params_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Generator_Params_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Generator_Params_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Generator_Params_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Generator_Params_Reply";
    };

    return LLM_Get_Generator_Params_Reply;
})();

$root.LLM_Generator_Create_Request = (function() {

    /**
     * Properties of a LLM_Generator_Create_Request.
     * @typedef {Object} LLM_Generator_Create_Request.$Properties
     * @property {LLMGeneratorParams.$Properties|null} [generatorParams] LLM_Generator_Create_Request generatorParams
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Create_Request.
     * @exports ILLM_Generator_Create_Request
     * @interface ILLM_Generator_Create_Request
     * @augments LLM_Generator_Create_Request.$Properties
     * @deprecated Use LLM_Generator_Create_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Create_Request.
     * @typedef {LLM_Generator_Create_Request.$Properties} LLM_Generator_Create_Request.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Create_Request.
     * @exports LLM_Generator_Create_Request
     * @classdesc Represents a LLM_Generator_Create_Request.
     * @constructor
     * @param {LLM_Generator_Create_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Create_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Generator_Create_Request generatorParams.
     * @member {LLMGeneratorParams.$Properties|null|undefined} generatorParams
     * @memberof LLM_Generator_Create_Request
     * @instance
     */
    LLM_Generator_Create_Request.prototype.generatorParams = null;

    /**
     * Creates a new LLM_Generator_Create_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {LLM_Generator_Create_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Create_Request} LLM_Generator_Create_Request instance
     * @type {{
     *   (properties: LLM_Generator_Create_Request.$Shape): LLM_Generator_Create_Request & LLM_Generator_Create_Request.$Shape;
     *   (properties?: LLM_Generator_Create_Request.$Properties): LLM_Generator_Create_Request;
     * }}
     */
    LLM_Generator_Create_Request.create = function(properties) {
        return new LLM_Generator_Create_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Create_Request message. Does not implicitly {@link LLM_Generator_Create_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {LLM_Generator_Create_Request.$Properties} message LLM_Generator_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Create_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams"))
            $root.LLMGeneratorParams.encode(message.generatorParams, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Create_Request message, length delimited. Does not implicitly {@link LLM_Generator_Create_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {LLM_Generator_Create_Request.$Properties} message LLM_Generator_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Create_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Create_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Create_Request & LLM_Generator_Create_Request.$Shape} LLM_Generator_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Create_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Create_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    message.generatorParams = $root.LLMGeneratorParams.decode(reader, reader.uint32(), $undefined, _depth + 1, message.generatorParams);
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Create_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Create_Request & LLM_Generator_Create_Request.$Shape} LLM_Generator_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Create_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Create_Request message.
     * @function verify
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Create_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams")) {
            var error = $root.LLMGeneratorParams.verify(message.generatorParams, _depth + 1);
            if (error)
                return "generatorParams." + error;
        }
        return null;
    };

    /**
     * Creates a LLM_Generator_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Create_Request} LLM_Generator_Create_Request
     */
    LLM_Generator_Create_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Create_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Create_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Generator_Create_Request();
        if (object.generatorParams != null) {
            if (!$util.isObject(object.generatorParams))
                throw $TypeError(".LLM_Generator_Create_Request.generatorParams: object expected");
            message.generatorParams = $root.LLMGeneratorParams.fromObject(object.generatorParams, _depth + 1);
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Create_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {LLM_Generator_Create_Request} message LLM_Generator_Create_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Create_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.generatorParams = null;
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams"))
            object.generatorParams = $root.LLMGeneratorParams.toObject(message.generatorParams, options, _depth + 1);
        return object;
    };

    /**
     * Converts this LLM_Generator_Create_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Create_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Create_Request.prototype.toJSON = function() {
        return LLM_Generator_Create_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Create_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Create_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Create_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Create_Request";
    };

    return LLM_Generator_Create_Request;
})();

$root.LLM_Generator_Create_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Create_Reply.
     * @typedef {Object} LLM_Generator_Create_Reply.$Properties
     * @property {number|null} [status] LLM_Generator_Create_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Create_Reply.
     * @exports ILLM_Generator_Create_Reply
     * @interface ILLM_Generator_Create_Reply
     * @augments LLM_Generator_Create_Reply.$Properties
     * @deprecated Use LLM_Generator_Create_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Create_Reply.
     * @typedef {LLM_Generator_Create_Reply.$Properties} LLM_Generator_Create_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Create_Reply.
     * @exports LLM_Generator_Create_Reply
     * @classdesc Represents a LLM_Generator_Create_Reply.
     * @constructor
     * @param {LLM_Generator_Create_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Create_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Generator_Create_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Create_Reply
     * @instance
     */
    LLM_Generator_Create_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Generator_Create_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {LLM_Generator_Create_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Create_Reply} LLM_Generator_Create_Reply instance
     * @type {{
     *   (properties: LLM_Generator_Create_Reply.$Shape): LLM_Generator_Create_Reply & LLM_Generator_Create_Reply.$Shape;
     *   (properties?: LLM_Generator_Create_Reply.$Properties): LLM_Generator_Create_Reply;
     * }}
     */
    LLM_Generator_Create_Reply.create = function(properties) {
        return new LLM_Generator_Create_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Create_Reply message. Does not implicitly {@link LLM_Generator_Create_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {LLM_Generator_Create_Reply.$Properties} message LLM_Generator_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Create_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Create_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Create_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {LLM_Generator_Create_Reply.$Properties} message LLM_Generator_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Create_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Create_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Create_Reply & LLM_Generator_Create_Reply.$Shape} LLM_Generator_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Create_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Create_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Create_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Create_Reply & LLM_Generator_Create_Reply.$Shape} LLM_Generator_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Create_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Create_Reply message.
     * @function verify
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Create_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Create_Reply} LLM_Generator_Create_Reply
     */
    LLM_Generator_Create_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Create_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Create_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Generator_Create_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Create_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {LLM_Generator_Create_Reply} message LLM_Generator_Create_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Create_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Generator_Create_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Create_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Create_Reply.prototype.toJSON = function() {
        return LLM_Generator_Create_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Create_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Create_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Create_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Create_Reply";
    };

    return LLM_Generator_Create_Reply;
})();

$root.LLM_Generator_Write_Request = (function() {

    /**
     * Properties of a LLM_Generator_Write_Request.
     * @typedef {Object} LLM_Generator_Write_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Write_Request.
     * @exports ILLM_Generator_Write_Request
     * @interface ILLM_Generator_Write_Request
     * @augments LLM_Generator_Write_Request.$Properties
     * @deprecated Use LLM_Generator_Write_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Write_Request.
     * @typedef {LLM_Generator_Write_Request.$Properties} LLM_Generator_Write_Request.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Write_Request.
     * @exports LLM_Generator_Write_Request
     * @classdesc Represents a LLM_Generator_Write_Request.
     * @constructor
     * @param {LLM_Generator_Write_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Write_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Generator_Write_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {LLM_Generator_Write_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Write_Request} LLM_Generator_Write_Request instance
     * @type {{
     *   (properties: LLM_Generator_Write_Request.$Shape): LLM_Generator_Write_Request & LLM_Generator_Write_Request.$Shape;
     *   (properties?: LLM_Generator_Write_Request.$Properties): LLM_Generator_Write_Request;
     * }}
     */
    LLM_Generator_Write_Request.create = function(properties) {
        return new LLM_Generator_Write_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Write_Request message. Does not implicitly {@link LLM_Generator_Write_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {LLM_Generator_Write_Request.$Properties} message LLM_Generator_Write_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Write_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Write_Request message, length delimited. Does not implicitly {@link LLM_Generator_Write_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {LLM_Generator_Write_Request.$Properties} message LLM_Generator_Write_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Write_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Write_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Write_Request & LLM_Generator_Write_Request.$Shape} LLM_Generator_Write_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Write_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Write_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Write_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Write_Request & LLM_Generator_Write_Request.$Shape} LLM_Generator_Write_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Write_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Write_Request message.
     * @function verify
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Write_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Generator_Write_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Write_Request} LLM_Generator_Write_Request
     */
    LLM_Generator_Write_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Write_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Write_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Generator_Write_Request();
    };

    /**
     * Creates a plain object from a LLM_Generator_Write_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {LLM_Generator_Write_Request} message LLM_Generator_Write_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Write_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Generator_Write_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Write_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Write_Request.prototype.toJSON = function() {
        return LLM_Generator_Write_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Write_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Write_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Write_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Write_Request";
    };

    return LLM_Generator_Write_Request;
})();

$root.LLM_Generator_Write_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Write_Reply.
     * @typedef {Object} LLM_Generator_Write_Reply.$Properties
     * @property {number|null} [status] LLM_Generator_Write_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Write_Reply.
     * @exports ILLM_Generator_Write_Reply
     * @interface ILLM_Generator_Write_Reply
     * @augments LLM_Generator_Write_Reply.$Properties
     * @deprecated Use LLM_Generator_Write_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Write_Reply.
     * @typedef {LLM_Generator_Write_Reply.$Properties} LLM_Generator_Write_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Write_Reply.
     * @exports LLM_Generator_Write_Reply
     * @classdesc Represents a LLM_Generator_Write_Reply.
     * @constructor
     * @param {LLM_Generator_Write_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Write_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Generator_Write_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Write_Reply
     * @instance
     */
    LLM_Generator_Write_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Generator_Write_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {LLM_Generator_Write_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Write_Reply} LLM_Generator_Write_Reply instance
     * @type {{
     *   (properties: LLM_Generator_Write_Reply.$Shape): LLM_Generator_Write_Reply & LLM_Generator_Write_Reply.$Shape;
     *   (properties?: LLM_Generator_Write_Reply.$Properties): LLM_Generator_Write_Reply;
     * }}
     */
    LLM_Generator_Write_Reply.create = function(properties) {
        return new LLM_Generator_Write_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Write_Reply message. Does not implicitly {@link LLM_Generator_Write_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {LLM_Generator_Write_Reply.$Properties} message LLM_Generator_Write_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Write_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Write_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Write_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {LLM_Generator_Write_Reply.$Properties} message LLM_Generator_Write_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Write_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Write_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Write_Reply & LLM_Generator_Write_Reply.$Shape} LLM_Generator_Write_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Write_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Write_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Write_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Write_Reply & LLM_Generator_Write_Reply.$Shape} LLM_Generator_Write_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Write_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Write_Reply message.
     * @function verify
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Write_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Write_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Write_Reply} LLM_Generator_Write_Reply
     */
    LLM_Generator_Write_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Write_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Write_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Generator_Write_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Write_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {LLM_Generator_Write_Reply} message LLM_Generator_Write_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Write_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Generator_Write_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Write_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Write_Reply.prototype.toJSON = function() {
        return LLM_Generator_Write_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Write_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Write_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Write_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Write_Reply";
    };

    return LLM_Generator_Write_Reply;
})();

$root.LLM_Generator_Generate_Request = (function() {

    /**
     * Properties of a LLM_Generator_Generate_Request.
     * @typedef {Object} LLM_Generator_Generate_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Generate_Request.
     * @exports ILLM_Generator_Generate_Request
     * @interface ILLM_Generator_Generate_Request
     * @augments LLM_Generator_Generate_Request.$Properties
     * @deprecated Use LLM_Generator_Generate_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Generate_Request.
     * @typedef {LLM_Generator_Generate_Request.$Properties} LLM_Generator_Generate_Request.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Generate_Request.
     * @exports LLM_Generator_Generate_Request
     * @classdesc Represents a LLM_Generator_Generate_Request.
     * @constructor
     * @param {LLM_Generator_Generate_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Generate_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Generator_Generate_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {LLM_Generator_Generate_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Generate_Request} LLM_Generator_Generate_Request instance
     * @type {{
     *   (properties: LLM_Generator_Generate_Request.$Shape): LLM_Generator_Generate_Request & LLM_Generator_Generate_Request.$Shape;
     *   (properties?: LLM_Generator_Generate_Request.$Properties): LLM_Generator_Generate_Request;
     * }}
     */
    LLM_Generator_Generate_Request.create = function(properties) {
        return new LLM_Generator_Generate_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Generate_Request message. Does not implicitly {@link LLM_Generator_Generate_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {LLM_Generator_Generate_Request.$Properties} message LLM_Generator_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Generate_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Generate_Request message, length delimited. Does not implicitly {@link LLM_Generator_Generate_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {LLM_Generator_Generate_Request.$Properties} message LLM_Generator_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Generate_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Generate_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Generate_Request & LLM_Generator_Generate_Request.$Shape} LLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Generate_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Generate_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Generate_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Generate_Request & LLM_Generator_Generate_Request.$Shape} LLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Generate_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Generate_Request message.
     * @function verify
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Generate_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Generator_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Generate_Request} LLM_Generator_Generate_Request
     */
    LLM_Generator_Generate_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Generate_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Generate_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Generator_Generate_Request();
    };

    /**
     * Creates a plain object from a LLM_Generator_Generate_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {LLM_Generator_Generate_Request} message LLM_Generator_Generate_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Generate_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Generator_Generate_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Generate_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Generate_Request.prototype.toJSON = function() {
        return LLM_Generator_Generate_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Generate_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Generate_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Generate_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Generate_Request";
    };

    return LLM_Generator_Generate_Request;
})();

$root.LLM_Generator_Generate_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Generate_Reply.
     * @typedef {Object} LLM_Generator_Generate_Reply.$Properties
     * @property {number|null} [status] LLM_Generator_Generate_Reply status
     * @property {Array.<number>|null} [initialPrefixTokens] LLM_Generator_Generate_Reply initialPrefixTokens
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Generate_Reply.
     * @exports ILLM_Generator_Generate_Reply
     * @interface ILLM_Generator_Generate_Reply
     * @augments LLM_Generator_Generate_Reply.$Properties
     * @deprecated Use LLM_Generator_Generate_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Generate_Reply.
     * @typedef {LLM_Generator_Generate_Reply.$Properties} LLM_Generator_Generate_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Generate_Reply.
     * @exports LLM_Generator_Generate_Reply
     * @classdesc Represents a LLM_Generator_Generate_Reply.
     * @constructor
     * @param {LLM_Generator_Generate_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Generate_Reply = function (properties) {
        this.initialPrefixTokens = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Generator_Generate_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Generate_Reply
     * @instance
     */
    LLM_Generator_Generate_Reply.prototype.status = 0;

    /**
     * LLM_Generator_Generate_Reply initialPrefixTokens.
     * @member {Array.<number>} initialPrefixTokens
     * @memberof LLM_Generator_Generate_Reply
     * @instance
     */
    LLM_Generator_Generate_Reply.prototype.initialPrefixTokens = $util.emptyArray;

    /**
     * Creates a new LLM_Generator_Generate_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {LLM_Generator_Generate_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Generate_Reply} LLM_Generator_Generate_Reply instance
     * @type {{
     *   (properties: LLM_Generator_Generate_Reply.$Shape): LLM_Generator_Generate_Reply & LLM_Generator_Generate_Reply.$Shape;
     *   (properties?: LLM_Generator_Generate_Reply.$Properties): LLM_Generator_Generate_Reply;
     * }}
     */
    LLM_Generator_Generate_Reply.create = function(properties) {
        return new LLM_Generator_Generate_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Generate_Reply message. Does not implicitly {@link LLM_Generator_Generate_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {LLM_Generator_Generate_Reply.$Properties} message LLM_Generator_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Generate_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.initialPrefixTokens != null && message.initialPrefixTokens.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.initialPrefixTokens.length; ++i)
                writer.uint32(message.initialPrefixTokens[i]);
            writer.ldelim();
        }
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Generate_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Generate_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {LLM_Generator_Generate_Reply.$Properties} message LLM_Generator_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Generate_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Generate_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Generate_Reply & LLM_Generator_Generate_Reply.$Shape} LLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Generate_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Generate_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            case 2: {
                    if (wireType === 2) {
                        if (!(message.initialPrefixTokens && message.initialPrefixTokens.length))
                            message.initialPrefixTokens = [];
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.initialPrefixTokens.push(reader.uint32());
                        continue;
                    }
                    if (wireType !== 0)
                        break;
                    if (!(message.initialPrefixTokens && message.initialPrefixTokens.length))
                        message.initialPrefixTokens = [];
                    message.initialPrefixTokens.push(reader.uint32());
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Generate_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Generate_Reply & LLM_Generator_Generate_Reply.$Shape} LLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Generate_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Generate_Reply message.
     * @function verify
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Generate_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.initialPrefixTokens != null && $Object.hasOwnProperty.call(message, "initialPrefixTokens")) {
            if (!$Array.isArray(message.initialPrefixTokens))
                return "initialPrefixTokens: array expected";
            for (var i = 0; i < message.initialPrefixTokens.length; ++i)
                if (!$util.isInteger(message.initialPrefixTokens[i]))
                    return "initialPrefixTokens: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a LLM_Generator_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Generate_Reply} LLM_Generator_Generate_Reply
     */
    LLM_Generator_Generate_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Generate_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Generate_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Generator_Generate_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        if (object.initialPrefixTokens) {
            if (!$Array.isArray(object.initialPrefixTokens))
                throw $TypeError(".LLM_Generator_Generate_Reply.initialPrefixTokens: array expected");
            message.initialPrefixTokens = $Array(object.initialPrefixTokens.length);
            for (var i = 0; i < object.initialPrefixTokens.length; ++i)
                message.initialPrefixTokens[i] = object.initialPrefixTokens[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Generate_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {LLM_Generator_Generate_Reply} message LLM_Generator_Generate_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Generate_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.initialPrefixTokens = [];
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        if (message.initialPrefixTokens && message.initialPrefixTokens.length) {
            object.initialPrefixTokens = $Array(message.initialPrefixTokens.length);
            for (var j = 0; j < message.initialPrefixTokens.length; ++j)
                object.initialPrefixTokens[j] = message.initialPrefixTokens[j];
        }
        return object;
    };

    /**
     * Converts this LLM_Generator_Generate_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Generate_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Generate_Reply.prototype.toJSON = function() {
        return LLM_Generator_Generate_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Generate_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Generate_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Generate_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Generate_Reply";
    };

    return LLM_Generator_Generate_Reply;
})();

$root.Embedding = (function() {

    /**
     * Properties of an Embedding.
     * @typedef {Object} Embedding.$Properties
     * @property {number|null} [type] Embedding type
     * @property {Uint8Array|null} [data] Embedding data
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of an Embedding.
     * @exports IEmbedding
     * @interface IEmbedding
     * @augments Embedding.$Properties
     * @deprecated Use Embedding.$Properties instead.
     */

    /**
     * Shape of an Embedding.
     * @typedef {Embedding.$Properties} Embedding.$Shape
     */

    /**
     * Constructs a new Embedding.
     * @exports Embedding
     * @classdesc Represents an Embedding.
     * @constructor
     * @param {Embedding.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Embedding = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Embedding type.
     * @member {number} type
     * @memberof Embedding
     * @instance
     */
    Embedding.prototype.type = 0;

    /**
     * Embedding data.
     * @member {Uint8Array} data
     * @memberof Embedding
     * @instance
     */
    Embedding.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new Embedding instance using the specified properties.
     * @function create
     * @memberof Embedding
     * @static
     * @param {Embedding.$Properties=} [properties] Properties to set
     * @returns {Embedding} Embedding instance
     * @type {{
     *   (properties: Embedding.$Shape): Embedding & Embedding.$Shape;
     *   (properties?: Embedding.$Properties): Embedding;
     * }}
     */
    Embedding.create = function(properties) {
        return new Embedding(properties);
    };

    /**
     * Encodes the specified Embedding message. Does not implicitly {@link Embedding.verify|verify} messages.
     * @function encode
     * @memberof Embedding
     * @static
     * @param {Embedding.$Properties} message Embedding message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Embedding.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.type);
        if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Embedding message, length delimited. Does not implicitly {@link Embedding.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Embedding
     * @static
     * @param {Embedding.$Properties} message Embedding message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Embedding.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes an Embedding message from the specified reader or buffer.
     * @function decode
     * @memberof Embedding
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Embedding & Embedding.$Shape} Embedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Embedding.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Embedding(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.type = value;
                    else
                        delete message.type;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.bytes()).length)
                        message.data = value;
                    else
                        delete message.data;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes an Embedding message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Embedding
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Embedding & Embedding.$Shape} Embedding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Embedding.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Embedding message.
     * @function verify
     * @memberof Embedding
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Embedding.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates an Embedding message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Embedding
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Embedding} Embedding
     */
    Embedding.fromObject = function (object, _depth) {
        if (object instanceof $root.Embedding)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Embedding: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.Embedding();
        if (object.type != null)
            if ($Number(object.type) !== 0)
                message.type = object.type >>> 0;
        if (object.data != null)
            if (object.data.length)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from an Embedding message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Embedding
     * @static
     * @param {Embedding} message Embedding
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Embedding.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.type = 0;
            if (options.bytes === $String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== $Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
            object.type = message.type;
        if (message.data != null && $Object.hasOwnProperty.call(message, "data"))
            object.data = options.bytes === $String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this Embedding to JSON.
     * @function toJSON
     * @memberof Embedding
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Embedding.prototype.toJSON = function() {
        return Embedding.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Embedding
     * @function getTypeUrl
     * @memberof Embedding
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Embedding.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Embedding";
    };

    return Embedding;
})();

$root.TextGenerationInput = (function() {

    /**
     * Properties of a TextGenerationInput.
     * @typedef {Object} TextGenerationInput.$Properties
     * @property {string|null} [initialPrompt] TextGenerationInput initialPrompt
     * @property {Array.<number>|null} [tokens] TextGenerationInput tokens
     * @property {Array.<Embedding.$Properties>|null} [embeddings] TextGenerationInput embeddings
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a TextGenerationInput.
     * @exports ITextGenerationInput
     * @interface ITextGenerationInput
     * @augments TextGenerationInput.$Properties
     * @deprecated Use TextGenerationInput.$Properties instead.
     */

    /**
     * Shape of a TextGenerationInput.
     * @typedef {TextGenerationInput.$Properties} TextGenerationInput.$Shape
     */

    /**
     * Constructs a new TextGenerationInput.
     * @exports TextGenerationInput
     * @classdesc Represents a TextGenerationInput.
     * @constructor
     * @param {TextGenerationInput.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var TextGenerationInput = function (properties) {
        this.tokens = [];
        this.embeddings = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * TextGenerationInput initialPrompt.
     * @member {string} initialPrompt
     * @memberof TextGenerationInput
     * @instance
     */
    TextGenerationInput.prototype.initialPrompt = "";

    /**
     * TextGenerationInput tokens.
     * @member {Array.<number>} tokens
     * @memberof TextGenerationInput
     * @instance
     */
    TextGenerationInput.prototype.tokens = $util.emptyArray;

    /**
     * TextGenerationInput embeddings.
     * @member {Array.<Embedding.$Properties>} embeddings
     * @memberof TextGenerationInput
     * @instance
     */
    TextGenerationInput.prototype.embeddings = $util.emptyArray;

    /**
     * Creates a new TextGenerationInput instance using the specified properties.
     * @function create
     * @memberof TextGenerationInput
     * @static
     * @param {TextGenerationInput.$Properties=} [properties] Properties to set
     * @returns {TextGenerationInput} TextGenerationInput instance
     * @type {{
     *   (properties: TextGenerationInput.$Shape): TextGenerationInput & TextGenerationInput.$Shape;
     *   (properties?: TextGenerationInput.$Properties): TextGenerationInput;
     * }}
     */
    TextGenerationInput.create = function(properties) {
        return new TextGenerationInput(properties);
    };

    /**
     * Encodes the specified TextGenerationInput message. Does not implicitly {@link TextGenerationInput.verify|verify} messages.
     * @function encode
     * @memberof TextGenerationInput
     * @static
     * @param {TextGenerationInput.$Properties} message TextGenerationInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextGenerationInput.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.initialPrompt != null && $Object.hasOwnProperty.call(message, "initialPrompt"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.initialPrompt);
        if (message.tokens != null && message.tokens.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.tokens.length; ++i)
                writer.uint32(message.tokens[i]);
            writer.ldelim();
        }
        if (message.embeddings != null && message.embeddings.length)
            for (var i = 0; i < message.embeddings.length; ++i)
                $root.Embedding.encode(message.embeddings[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified TextGenerationInput message, length delimited. Does not implicitly {@link TextGenerationInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextGenerationInput
     * @static
     * @param {TextGenerationInput.$Properties} message TextGenerationInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextGenerationInput.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a TextGenerationInput message from the specified reader or buffer.
     * @function decode
     * @memberof TextGenerationInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextGenerationInput & TextGenerationInput.$Shape} TextGenerationInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextGenerationInput.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.TextGenerationInput(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.initialPrompt = value;
                    else
                        delete message.initialPrompt;
                    continue;
                }
            case 2: {
                    if (wireType === 2) {
                        if (!(message.tokens && message.tokens.length))
                            message.tokens = [];
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tokens.push(reader.uint32());
                        continue;
                    }
                    if (wireType !== 0)
                        break;
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    message.tokens.push(reader.uint32());
                    continue;
                }
            case 3: {
                    if (wireType !== 2)
                        break;
                    if (!(message.embeddings && message.embeddings.length))
                        message.embeddings = [];
                    message.embeddings.push($root.Embedding.decode(reader, reader.uint32(), $undefined, _depth + 1));
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a TextGenerationInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextGenerationInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextGenerationInput & TextGenerationInput.$Shape} TextGenerationInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextGenerationInput.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextGenerationInput message.
     * @function verify
     * @memberof TextGenerationInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextGenerationInput.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.initialPrompt != null && $Object.hasOwnProperty.call(message, "initialPrompt"))
            if (!$util.isString(message.initialPrompt))
                return "initialPrompt: string expected";
        if (message.tokens != null && $Object.hasOwnProperty.call(message, "tokens")) {
            if (!$Array.isArray(message.tokens))
                return "tokens: array expected";
            for (var i = 0; i < message.tokens.length; ++i)
                if (!$util.isInteger(message.tokens[i]))
                    return "tokens: integer[] expected";
        }
        if (message.embeddings != null && $Object.hasOwnProperty.call(message, "embeddings")) {
            if (!$Array.isArray(message.embeddings))
                return "embeddings: array expected";
            for (var i = 0; i < message.embeddings.length; ++i) {
                var error = $root.Embedding.verify(message.embeddings[i], _depth + 1);
                if (error)
                    return "embeddings." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TextGenerationInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextGenerationInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextGenerationInput} TextGenerationInput
     */
    TextGenerationInput.fromObject = function (object, _depth) {
        if (object instanceof $root.TextGenerationInput)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".TextGenerationInput: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.TextGenerationInput();
        if (object.initialPrompt != null)
            if (typeof object.initialPrompt !== "string" || object.initialPrompt.length)
                message.initialPrompt = $String(object.initialPrompt);
        if (object.tokens) {
            if (!$Array.isArray(object.tokens))
                throw $TypeError(".TextGenerationInput.tokens: array expected");
            message.tokens = $Array(object.tokens.length);
            for (var i = 0; i < object.tokens.length; ++i)
                message.tokens[i] = object.tokens[i] >>> 0;
        }
        if (object.embeddings) {
            if (!$Array.isArray(object.embeddings))
                throw $TypeError(".TextGenerationInput.embeddings: array expected");
            message.embeddings = $Array(object.embeddings.length);
            for (var i = 0; i < object.embeddings.length; ++i) {
                if (!$util.isObject(object.embeddings[i]))
                    throw $TypeError(".TextGenerationInput.embeddings: object expected");
                message.embeddings[i] = $root.Embedding.fromObject(object.embeddings[i], _depth + 1);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TextGenerationInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextGenerationInput
     * @static
     * @param {TextGenerationInput} message TextGenerationInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextGenerationInput.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults) {
            object.tokens = [];
            object.embeddings = [];
        }
        if (options.defaults)
            object.initialPrompt = "";
        if (message.initialPrompt != null && $Object.hasOwnProperty.call(message, "initialPrompt"))
            object.initialPrompt = message.initialPrompt;
        if (message.tokens && message.tokens.length) {
            object.tokens = $Array(message.tokens.length);
            for (var j = 0; j < message.tokens.length; ++j)
                object.tokens[j] = message.tokens[j];
        }
        if (message.embeddings && message.embeddings.length) {
            object.embeddings = $Array(message.embeddings.length);
            for (var j = 0; j < message.embeddings.length; ++j)
                object.embeddings[j] = $root.Embedding.toObject(message.embeddings[j], options, _depth + 1);
        }
        return object;
    };

    /**
     * Converts this TextGenerationInput to JSON.
     * @function toJSON
     * @memberof TextGenerationInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextGenerationInput.prototype.toJSON = function() {
        return TextGenerationInput.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for TextGenerationInput
     * @function getTypeUrl
     * @memberof TextGenerationInput
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    TextGenerationInput.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/TextGenerationInput";
    };

    return TextGenerationInput;
})();

$root.TextGenerationOutput = (function() {

    /**
     * Properties of a TextGenerationOutput.
     * @typedef {Object} TextGenerationOutput.$Properties
     * @property {string|null} [outputTokenStr] TextGenerationOutput outputTokenStr
     * @property {number|null} [outputTokenId] TextGenerationOutput outputTokenId
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a TextGenerationOutput.
     * @exports ITextGenerationOutput
     * @interface ITextGenerationOutput
     * @augments TextGenerationOutput.$Properties
     * @deprecated Use TextGenerationOutput.$Properties instead.
     */

    /**
     * Shape of a TextGenerationOutput.
     * @typedef {TextGenerationOutput.$Properties} TextGenerationOutput.$Shape
     */

    /**
     * Constructs a new TextGenerationOutput.
     * @exports TextGenerationOutput
     * @classdesc Represents a TextGenerationOutput.
     * @constructor
     * @param {TextGenerationOutput.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var TextGenerationOutput = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * TextGenerationOutput outputTokenStr.
     * @member {string} outputTokenStr
     * @memberof TextGenerationOutput
     * @instance
     */
    TextGenerationOutput.prototype.outputTokenStr = "";

    /**
     * TextGenerationOutput outputTokenId.
     * @member {number} outputTokenId
     * @memberof TextGenerationOutput
     * @instance
     */
    TextGenerationOutput.prototype.outputTokenId = 0;

    /**
     * Creates a new TextGenerationOutput instance using the specified properties.
     * @function create
     * @memberof TextGenerationOutput
     * @static
     * @param {TextGenerationOutput.$Properties=} [properties] Properties to set
     * @returns {TextGenerationOutput} TextGenerationOutput instance
     * @type {{
     *   (properties: TextGenerationOutput.$Shape): TextGenerationOutput & TextGenerationOutput.$Shape;
     *   (properties?: TextGenerationOutput.$Properties): TextGenerationOutput;
     * }}
     */
    TextGenerationOutput.create = function(properties) {
        return new TextGenerationOutput(properties);
    };

    /**
     * Encodes the specified TextGenerationOutput message. Does not implicitly {@link TextGenerationOutput.verify|verify} messages.
     * @function encode
     * @memberof TextGenerationOutput
     * @static
     * @param {TextGenerationOutput.$Properties} message TextGenerationOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextGenerationOutput.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.outputTokenStr != null && $Object.hasOwnProperty.call(message, "outputTokenStr"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.outputTokenStr);
        if (message.outputTokenId != null && $Object.hasOwnProperty.call(message, "outputTokenId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.outputTokenId);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified TextGenerationOutput message, length delimited. Does not implicitly {@link TextGenerationOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextGenerationOutput
     * @static
     * @param {TextGenerationOutput.$Properties} message TextGenerationOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextGenerationOutput.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a TextGenerationOutput message from the specified reader or buffer.
     * @function decode
     * @memberof TextGenerationOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextGenerationOutput & TextGenerationOutput.$Shape} TextGenerationOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextGenerationOutput.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.TextGenerationOutput(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.outputTokenStr = value;
                    else
                        delete message.outputTokenStr;
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.outputTokenId = value;
                    else
                        delete message.outputTokenId;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a TextGenerationOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextGenerationOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextGenerationOutput & TextGenerationOutput.$Shape} TextGenerationOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextGenerationOutput.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextGenerationOutput message.
     * @function verify
     * @memberof TextGenerationOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextGenerationOutput.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.outputTokenStr != null && $Object.hasOwnProperty.call(message, "outputTokenStr"))
            if (!$util.isString(message.outputTokenStr))
                return "outputTokenStr: string expected";
        if (message.outputTokenId != null && $Object.hasOwnProperty.call(message, "outputTokenId"))
            if (!$util.isInteger(message.outputTokenId))
                return "outputTokenId: integer expected";
        return null;
    };

    /**
     * Creates a TextGenerationOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextGenerationOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextGenerationOutput} TextGenerationOutput
     */
    TextGenerationOutput.fromObject = function (object, _depth) {
        if (object instanceof $root.TextGenerationOutput)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".TextGenerationOutput: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.TextGenerationOutput();
        if (object.outputTokenStr != null)
            if (typeof object.outputTokenStr !== "string" || object.outputTokenStr.length)
                message.outputTokenStr = $String(object.outputTokenStr);
        if (object.outputTokenId != null)
            if ($Number(object.outputTokenId) !== 0)
                message.outputTokenId = object.outputTokenId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a TextGenerationOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextGenerationOutput
     * @static
     * @param {TextGenerationOutput} message TextGenerationOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextGenerationOutput.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.outputTokenStr = "";
            object.outputTokenId = 0;
        }
        if (message.outputTokenStr != null && $Object.hasOwnProperty.call(message, "outputTokenStr"))
            object.outputTokenStr = message.outputTokenStr;
        if (message.outputTokenId != null && $Object.hasOwnProperty.call(message, "outputTokenId"))
            object.outputTokenId = message.outputTokenId;
        return object;
    };

    /**
     * Converts this TextGenerationOutput to JSON.
     * @function toJSON
     * @memberof TextGenerationOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextGenerationOutput.prototype.toJSON = function() {
        return TextGenerationOutput.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for TextGenerationOutput
     * @function getTypeUrl
     * @memberof TextGenerationOutput
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    TextGenerationOutput.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/TextGenerationOutput";
    };

    return TextGenerationOutput;
})();

$root.LLM_Generator_Read_Request = (function() {

    /**
     * Properties of a LLM_Generator_Read_Request.
     * @typedef {Object} LLM_Generator_Read_Request.$Properties
     * @property {number|null} [timeoutMs] LLM_Generator_Read_Request timeoutMs
     * @property {TextGenerationInput.$Properties|null} [generationInput] LLM_Generator_Read_Request generationInput
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Read_Request.
     * @exports ILLM_Generator_Read_Request
     * @interface ILLM_Generator_Read_Request
     * @augments LLM_Generator_Read_Request.$Properties
     * @deprecated Use LLM_Generator_Read_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Read_Request.
     * @typedef {LLM_Generator_Read_Request.$Properties} LLM_Generator_Read_Request.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Read_Request.
     * @exports LLM_Generator_Read_Request
     * @classdesc Represents a LLM_Generator_Read_Request.
     * @constructor
     * @param {LLM_Generator_Read_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Read_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Generator_Read_Request timeoutMs.
     * @member {number} timeoutMs
     * @memberof LLM_Generator_Read_Request
     * @instance
     */
    LLM_Generator_Read_Request.prototype.timeoutMs = 0;

    /**
     * LLM_Generator_Read_Request generationInput.
     * @member {TextGenerationInput.$Properties|null|undefined} generationInput
     * @memberof LLM_Generator_Read_Request
     * @instance
     */
    LLM_Generator_Read_Request.prototype.generationInput = null;

    /**
     * Creates a new LLM_Generator_Read_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {LLM_Generator_Read_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Read_Request} LLM_Generator_Read_Request instance
     * @type {{
     *   (properties: LLM_Generator_Read_Request.$Shape): LLM_Generator_Read_Request & LLM_Generator_Read_Request.$Shape;
     *   (properties?: LLM_Generator_Read_Request.$Properties): LLM_Generator_Read_Request;
     * }}
     */
    LLM_Generator_Read_Request.create = function(properties) {
        return new LLM_Generator_Read_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Read_Request message. Does not implicitly {@link LLM_Generator_Read_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {LLM_Generator_Read_Request.$Properties} message LLM_Generator_Read_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Read_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.timeoutMs != null && $Object.hasOwnProperty.call(message, "timeoutMs"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timeoutMs);
        if (message.generationInput != null && $Object.hasOwnProperty.call(message, "generationInput"))
            $root.TextGenerationInput.encode(message.generationInput, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Read_Request message, length delimited. Does not implicitly {@link LLM_Generator_Read_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {LLM_Generator_Read_Request.$Properties} message LLM_Generator_Read_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Read_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Read_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Read_Request & LLM_Generator_Read_Request.$Shape} LLM_Generator_Read_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Read_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Read_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.timeoutMs = value;
                    else
                        delete message.timeoutMs;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    message.generationInput = $root.TextGenerationInput.decode(reader, reader.uint32(), $undefined, _depth + 1, message.generationInput);
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Read_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Read_Request & LLM_Generator_Read_Request.$Shape} LLM_Generator_Read_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Read_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Read_Request message.
     * @function verify
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Read_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.timeoutMs != null && $Object.hasOwnProperty.call(message, "timeoutMs"))
            if (!$util.isInteger(message.timeoutMs))
                return "timeoutMs: integer expected";
        if (message.generationInput != null && $Object.hasOwnProperty.call(message, "generationInput")) {
            var error = $root.TextGenerationInput.verify(message.generationInput, _depth + 1);
            if (error)
                return "generationInput." + error;
        }
        return null;
    };

    /**
     * Creates a LLM_Generator_Read_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Read_Request} LLM_Generator_Read_Request
     */
    LLM_Generator_Read_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Read_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Read_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Generator_Read_Request();
        if (object.timeoutMs != null)
            if ($Number(object.timeoutMs) !== 0)
                message.timeoutMs = object.timeoutMs >>> 0;
        if (object.generationInput != null) {
            if (!$util.isObject(object.generationInput))
                throw $TypeError(".LLM_Generator_Read_Request.generationInput: object expected");
            message.generationInput = $root.TextGenerationInput.fromObject(object.generationInput, _depth + 1);
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Read_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {LLM_Generator_Read_Request} message LLM_Generator_Read_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Read_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.timeoutMs = 0;
            object.generationInput = null;
        }
        if (message.timeoutMs != null && $Object.hasOwnProperty.call(message, "timeoutMs"))
            object.timeoutMs = message.timeoutMs;
        if (message.generationInput != null && $Object.hasOwnProperty.call(message, "generationInput"))
            object.generationInput = $root.TextGenerationInput.toObject(message.generationInput, options, _depth + 1);
        return object;
    };

    /**
     * Converts this LLM_Generator_Read_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Read_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Read_Request.prototype.toJSON = function() {
        return LLM_Generator_Read_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Read_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Read_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Read_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Read_Request";
    };

    return LLM_Generator_Read_Request;
})();

$root.LLM_Generator_Read_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Read_Reply.
     * @typedef {Object} LLM_Generator_Read_Reply.$Properties
     * @property {TextGenerationOutput.$Properties|null} [generationOutput] LLM_Generator_Read_Reply generationOutput
     * @property {number|null} [generationStatus] LLM_Generator_Read_Reply generationStatus
     * @property {number|null} [status] LLM_Generator_Read_Reply status
     * @property {boolean|null} [isContextFull] LLM_Generator_Read_Reply isContextFull
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Read_Reply.
     * @exports ILLM_Generator_Read_Reply
     * @interface ILLM_Generator_Read_Reply
     * @augments LLM_Generator_Read_Reply.$Properties
     * @deprecated Use LLM_Generator_Read_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Read_Reply.
     * @typedef {LLM_Generator_Read_Reply.$Properties} LLM_Generator_Read_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Read_Reply.
     * @exports LLM_Generator_Read_Reply
     * @classdesc Represents a LLM_Generator_Read_Reply.
     * @constructor
     * @param {LLM_Generator_Read_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Read_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Generator_Read_Reply generationOutput.
     * @member {TextGenerationOutput.$Properties|null|undefined} generationOutput
     * @memberof LLM_Generator_Read_Reply
     * @instance
     */
    LLM_Generator_Read_Reply.prototype.generationOutput = null;

    /**
     * LLM_Generator_Read_Reply generationStatus.
     * @member {number} generationStatus
     * @memberof LLM_Generator_Read_Reply
     * @instance
     */
    LLM_Generator_Read_Reply.prototype.generationStatus = 0;

    /**
     * LLM_Generator_Read_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Read_Reply
     * @instance
     */
    LLM_Generator_Read_Reply.prototype.status = 0;

    /**
     * LLM_Generator_Read_Reply isContextFull.
     * @member {boolean} isContextFull
     * @memberof LLM_Generator_Read_Reply
     * @instance
     */
    LLM_Generator_Read_Reply.prototype.isContextFull = false;

    /**
     * Creates a new LLM_Generator_Read_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {LLM_Generator_Read_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Read_Reply} LLM_Generator_Read_Reply instance
     * @type {{
     *   (properties: LLM_Generator_Read_Reply.$Shape): LLM_Generator_Read_Reply & LLM_Generator_Read_Reply.$Shape;
     *   (properties?: LLM_Generator_Read_Reply.$Properties): LLM_Generator_Read_Reply;
     * }}
     */
    LLM_Generator_Read_Reply.create = function(properties) {
        return new LLM_Generator_Read_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Read_Reply message. Does not implicitly {@link LLM_Generator_Read_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {LLM_Generator_Read_Reply.$Properties} message LLM_Generator_Read_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Read_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.generationOutput != null && $Object.hasOwnProperty.call(message, "generationOutput"))
            $root.TextGenerationOutput.encode(message.generationOutput, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
        if (message.generationStatus != null && $Object.hasOwnProperty.call(message, "generationStatus"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.generationStatus);
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
        if (message.isContextFull != null && $Object.hasOwnProperty.call(message, "isContextFull"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isContextFull);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Read_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Read_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {LLM_Generator_Read_Reply.$Properties} message LLM_Generator_Read_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Read_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Read_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Read_Reply & LLM_Generator_Read_Reply.$Shape} LLM_Generator_Read_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Read_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Read_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    message.generationOutput = $root.TextGenerationOutput.decode(reader, reader.uint32(), $undefined, _depth + 1, message.generationOutput);
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.generationStatus = value;
                    else
                        delete message.generationStatus;
                    continue;
                }
            case 3: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            case 4: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.bool())
                        message.isContextFull = value;
                    else
                        delete message.isContextFull;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Read_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Read_Reply & LLM_Generator_Read_Reply.$Shape} LLM_Generator_Read_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Read_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Read_Reply message.
     * @function verify
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Read_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.generationOutput != null && $Object.hasOwnProperty.call(message, "generationOutput")) {
            var error = $root.TextGenerationOutput.verify(message.generationOutput, _depth + 1);
            if (error)
                return "generationOutput." + error;
        }
        if (message.generationStatus != null && $Object.hasOwnProperty.call(message, "generationStatus"))
            if (!$util.isInteger(message.generationStatus))
                return "generationStatus: integer expected";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.isContextFull != null && $Object.hasOwnProperty.call(message, "isContextFull"))
            if (typeof message.isContextFull !== "boolean")
                return "isContextFull: boolean expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Read_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Read_Reply} LLM_Generator_Read_Reply
     */
    LLM_Generator_Read_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Read_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Read_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Generator_Read_Reply();
        if (object.generationOutput != null) {
            if (!$util.isObject(object.generationOutput))
                throw $TypeError(".LLM_Generator_Read_Reply.generationOutput: object expected");
            message.generationOutput = $root.TextGenerationOutput.fromObject(object.generationOutput, _depth + 1);
        }
        if (object.generationStatus != null)
            if ($Number(object.generationStatus) !== 0)
                message.generationStatus = object.generationStatus >>> 0;
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        if (object.isContextFull != null)
            if (object.isContextFull)
                message.isContextFull = $Boolean(object.isContextFull);
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Read_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {LLM_Generator_Read_Reply} message LLM_Generator_Read_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Read_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.generationOutput = null;
            object.generationStatus = 0;
            object.status = 0;
            object.isContextFull = false;
        }
        if (message.generationOutput != null && $Object.hasOwnProperty.call(message, "generationOutput"))
            object.generationOutput = $root.TextGenerationOutput.toObject(message.generationOutput, options, _depth + 1);
        if (message.generationStatus != null && $Object.hasOwnProperty.call(message, "generationStatus"))
            object.generationStatus = message.generationStatus;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        if (message.isContextFull != null && $Object.hasOwnProperty.call(message, "isContextFull"))
            object.isContextFull = message.isContextFull;
        return object;
    };

    /**
     * Converts this LLM_Generator_Read_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Read_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Read_Reply.prototype.toJSON = function() {
        return LLM_Generator_Read_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Read_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Read_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Read_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Read_Reply";
    };

    return LLM_Generator_Read_Reply;
})();

$root.LLM_Tokenize_Request = (function() {

    /**
     * Properties of a LLM_Tokenize_Request.
     * @typedef {Object} LLM_Tokenize_Request.$Properties
     * @property {string|null} [prompt] LLM_Tokenize_Request prompt
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Tokenize_Request.
     * @exports ILLM_Tokenize_Request
     * @interface ILLM_Tokenize_Request
     * @augments LLM_Tokenize_Request.$Properties
     * @deprecated Use LLM_Tokenize_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Tokenize_Request.
     * @typedef {LLM_Tokenize_Request.$Properties} LLM_Tokenize_Request.$Shape
     */

    /**
     * Constructs a new LLM_Tokenize_Request.
     * @exports LLM_Tokenize_Request
     * @classdesc Represents a LLM_Tokenize_Request.
     * @constructor
     * @param {LLM_Tokenize_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Tokenize_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Tokenize_Request prompt.
     * @member {string} prompt
     * @memberof LLM_Tokenize_Request
     * @instance
     */
    LLM_Tokenize_Request.prototype.prompt = "";

    /**
     * Creates a new LLM_Tokenize_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {LLM_Tokenize_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Tokenize_Request} LLM_Tokenize_Request instance
     * @type {{
     *   (properties: LLM_Tokenize_Request.$Shape): LLM_Tokenize_Request & LLM_Tokenize_Request.$Shape;
     *   (properties?: LLM_Tokenize_Request.$Properties): LLM_Tokenize_Request;
     * }}
     */
    LLM_Tokenize_Request.create = function(properties) {
        return new LLM_Tokenize_Request(properties);
    };

    /**
     * Encodes the specified LLM_Tokenize_Request message. Does not implicitly {@link LLM_Tokenize_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {LLM_Tokenize_Request.$Properties} message LLM_Tokenize_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Tokenize_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.prompt != null && $Object.hasOwnProperty.call(message, "prompt"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.prompt);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Tokenize_Request message, length delimited. Does not implicitly {@link LLM_Tokenize_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {LLM_Tokenize_Request.$Properties} message LLM_Tokenize_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Tokenize_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Tokenize_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Tokenize_Request & LLM_Tokenize_Request.$Shape} LLM_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Tokenize_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Tokenize_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.prompt = value;
                    else
                        delete message.prompt;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Tokenize_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Tokenize_Request & LLM_Tokenize_Request.$Shape} LLM_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Tokenize_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Tokenize_Request message.
     * @function verify
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Tokenize_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.prompt != null && $Object.hasOwnProperty.call(message, "prompt"))
            if (!$util.isString(message.prompt))
                return "prompt: string expected";
        return null;
    };

    /**
     * Creates a LLM_Tokenize_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Tokenize_Request} LLM_Tokenize_Request
     */
    LLM_Tokenize_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Tokenize_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Tokenize_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Tokenize_Request();
        if (object.prompt != null)
            if (typeof object.prompt !== "string" || object.prompt.length)
                message.prompt = $String(object.prompt);
        return message;
    };

    /**
     * Creates a plain object from a LLM_Tokenize_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {LLM_Tokenize_Request} message LLM_Tokenize_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Tokenize_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.prompt = "";
        if (message.prompt != null && $Object.hasOwnProperty.call(message, "prompt"))
            object.prompt = message.prompt;
        return object;
    };

    /**
     * Converts this LLM_Tokenize_Request to JSON.
     * @function toJSON
     * @memberof LLM_Tokenize_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Tokenize_Request.prototype.toJSON = function() {
        return LLM_Tokenize_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Tokenize_Request
     * @function getTypeUrl
     * @memberof LLM_Tokenize_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Tokenize_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Tokenize_Request";
    };

    return LLM_Tokenize_Request;
})();

$root.LLM_Tokenize_Reply = (function() {

    /**
     * Properties of a LLM_Tokenize_Reply.
     * @typedef {Object} LLM_Tokenize_Reply.$Properties
     * @property {Array.<number>|null} [tokens] LLM_Tokenize_Reply tokens
     * @property {number|null} [status] LLM_Tokenize_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Tokenize_Reply.
     * @exports ILLM_Tokenize_Reply
     * @interface ILLM_Tokenize_Reply
     * @augments LLM_Tokenize_Reply.$Properties
     * @deprecated Use LLM_Tokenize_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Tokenize_Reply.
     * @typedef {LLM_Tokenize_Reply.$Properties} LLM_Tokenize_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Tokenize_Reply.
     * @exports LLM_Tokenize_Reply
     * @classdesc Represents a LLM_Tokenize_Reply.
     * @constructor
     * @param {LLM_Tokenize_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Tokenize_Reply = function (properties) {
        this.tokens = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Tokenize_Reply tokens.
     * @member {Array.<number>} tokens
     * @memberof LLM_Tokenize_Reply
     * @instance
     */
    LLM_Tokenize_Reply.prototype.tokens = $util.emptyArray;

    /**
     * LLM_Tokenize_Reply status.
     * @member {number} status
     * @memberof LLM_Tokenize_Reply
     * @instance
     */
    LLM_Tokenize_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Tokenize_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {LLM_Tokenize_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Tokenize_Reply} LLM_Tokenize_Reply instance
     * @type {{
     *   (properties: LLM_Tokenize_Reply.$Shape): LLM_Tokenize_Reply & LLM_Tokenize_Reply.$Shape;
     *   (properties?: LLM_Tokenize_Reply.$Properties): LLM_Tokenize_Reply;
     * }}
     */
    LLM_Tokenize_Reply.create = function(properties) {
        return new LLM_Tokenize_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Tokenize_Reply message. Does not implicitly {@link LLM_Tokenize_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {LLM_Tokenize_Reply.$Properties} message LLM_Tokenize_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Tokenize_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.tokens != null && message.tokens.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.tokens.length; ++i)
                writer.uint32(message.tokens[i]);
            writer.ldelim();
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Tokenize_Reply message, length delimited. Does not implicitly {@link LLM_Tokenize_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {LLM_Tokenize_Reply.$Properties} message LLM_Tokenize_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Tokenize_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Tokenize_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Tokenize_Reply & LLM_Tokenize_Reply.$Shape} LLM_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Tokenize_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Tokenize_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType === 2) {
                        if (!(message.tokens && message.tokens.length))
                            message.tokens = [];
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tokens.push(reader.uint32());
                        continue;
                    }
                    if (wireType !== 0)
                        break;
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    message.tokens.push(reader.uint32());
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Tokenize_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Tokenize_Reply & LLM_Tokenize_Reply.$Shape} LLM_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Tokenize_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Tokenize_Reply message.
     * @function verify
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Tokenize_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.tokens != null && $Object.hasOwnProperty.call(message, "tokens")) {
            if (!$Array.isArray(message.tokens))
                return "tokens: array expected";
            for (var i = 0; i < message.tokens.length; ++i)
                if (!$util.isInteger(message.tokens[i]))
                    return "tokens: integer[] expected";
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Tokenize_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Tokenize_Reply} LLM_Tokenize_Reply
     */
    LLM_Tokenize_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Tokenize_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Tokenize_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Tokenize_Reply();
        if (object.tokens) {
            if (!$Array.isArray(object.tokens))
                throw $TypeError(".LLM_Tokenize_Reply.tokens: array expected");
            message.tokens = $Array(object.tokens.length);
            for (var i = 0; i < object.tokens.length; ++i)
                message.tokens[i] = object.tokens[i] >>> 0;
        }
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Tokenize_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {LLM_Tokenize_Reply} message LLM_Tokenize_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Tokenize_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.tokens = [];
        if (options.defaults)
            object.status = 0;
        if (message.tokens && message.tokens.length) {
            object.tokens = $Array(message.tokens.length);
            for (var j = 0; j < message.tokens.length; ++j)
                object.tokens[j] = message.tokens[j];
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Tokenize_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Tokenize_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Tokenize_Reply.prototype.toJSON = function() {
        return LLM_Tokenize_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Tokenize_Reply
     * @function getTypeUrl
     * @memberof LLM_Tokenize_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Tokenize_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Tokenize_Reply";
    };

    return LLM_Tokenize_Reply;
})();

$root.LLM_Get_Context_Request = (function() {

    /**
     * Properties of a LLM_Get_Context_Request.
     * @typedef {Object} LLM_Get_Context_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Context_Request.
     * @exports ILLM_Get_Context_Request
     * @interface ILLM_Get_Context_Request
     * @augments LLM_Get_Context_Request.$Properties
     * @deprecated Use LLM_Get_Context_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Context_Request.
     * @typedef {LLM_Get_Context_Request.$Properties} LLM_Get_Context_Request.$Shape
     */

    /**
     * Constructs a new LLM_Get_Context_Request.
     * @exports LLM_Get_Context_Request
     * @classdesc Represents a LLM_Get_Context_Request.
     * @constructor
     * @param {LLM_Get_Context_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Context_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Get_Context_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {LLM_Get_Context_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Context_Request} LLM_Get_Context_Request instance
     * @type {{
     *   (properties: LLM_Get_Context_Request.$Shape): LLM_Get_Context_Request & LLM_Get_Context_Request.$Shape;
     *   (properties?: LLM_Get_Context_Request.$Properties): LLM_Get_Context_Request;
     * }}
     */
    LLM_Get_Context_Request.create = function(properties) {
        return new LLM_Get_Context_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Context_Request message. Does not implicitly {@link LLM_Get_Context_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {LLM_Get_Context_Request.$Properties} message LLM_Get_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Context_Request message, length delimited. Does not implicitly {@link LLM_Get_Context_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {LLM_Get_Context_Request.$Properties} message LLM_Get_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Context_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Request & LLM_Get_Context_Request.$Shape} LLM_Get_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Context_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Context_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Request & LLM_Get_Context_Request.$Shape} LLM_Get_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Context_Request message.
     * @function verify
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Context_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Get_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Context_Request} LLM_Get_Context_Request
     */
    LLM_Get_Context_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Context_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Context_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Get_Context_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Context_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {LLM_Get_Context_Request} message LLM_Get_Context_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Context_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Get_Context_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Context_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Context_Request.prototype.toJSON = function() {
        return LLM_Get_Context_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Context_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Context_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Context_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Context_Request";
    };

    return LLM_Get_Context_Request;
})();

$root.LLM_Get_Context_Reply = (function() {

    /**
     * Properties of a LLM_Get_Context_Reply.
     * @typedef {Object} LLM_Get_Context_Reply.$Properties
     * @property {number|null} [status] LLM_Get_Context_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Context_Reply.
     * @exports ILLM_Get_Context_Reply
     * @interface ILLM_Get_Context_Reply
     * @augments LLM_Get_Context_Reply.$Properties
     * @deprecated Use LLM_Get_Context_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Context_Reply.
     * @typedef {LLM_Get_Context_Reply.$Properties} LLM_Get_Context_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Get_Context_Reply.
     * @exports LLM_Get_Context_Reply
     * @classdesc Represents a LLM_Get_Context_Reply.
     * @constructor
     * @param {LLM_Get_Context_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Context_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Get_Context_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Context_Reply
     * @instance
     */
    LLM_Get_Context_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Get_Context_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {LLM_Get_Context_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Context_Reply} LLM_Get_Context_Reply instance
     * @type {{
     *   (properties: LLM_Get_Context_Reply.$Shape): LLM_Get_Context_Reply & LLM_Get_Context_Reply.$Shape;
     *   (properties?: LLM_Get_Context_Reply.$Properties): LLM_Get_Context_Reply;
     * }}
     */
    LLM_Get_Context_Reply.create = function(properties) {
        return new LLM_Get_Context_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Context_Reply message. Does not implicitly {@link LLM_Get_Context_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {LLM_Get_Context_Reply.$Properties} message LLM_Get_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Context_Reply message, length delimited. Does not implicitly {@link LLM_Get_Context_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {LLM_Get_Context_Reply.$Properties} message LLM_Get_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Context_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Reply & LLM_Get_Context_Reply.$Shape} LLM_Get_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Context_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Context_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Reply & LLM_Get_Context_Reply.$Shape} LLM_Get_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Context_Reply message.
     * @function verify
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Context_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Context_Reply} LLM_Get_Context_Reply
     */
    LLM_Get_Context_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Context_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Context_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Get_Context_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Context_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {LLM_Get_Context_Reply} message LLM_Get_Context_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Context_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Get_Context_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Context_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Context_Reply.prototype.toJSON = function() {
        return LLM_Get_Context_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Context_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Context_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Context_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Context_Reply";
    };

    return LLM_Get_Context_Reply;
})();

$root.LLM_Set_Context_Request = (function() {

    /**
     * Properties of a LLM_Set_Context_Request.
     * @typedef {Object} LLM_Set_Context_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Set_Context_Request.
     * @exports ILLM_Set_Context_Request
     * @interface ILLM_Set_Context_Request
     * @augments LLM_Set_Context_Request.$Properties
     * @deprecated Use LLM_Set_Context_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Set_Context_Request.
     * @typedef {LLM_Set_Context_Request.$Properties} LLM_Set_Context_Request.$Shape
     */

    /**
     * Constructs a new LLM_Set_Context_Request.
     * @exports LLM_Set_Context_Request
     * @classdesc Represents a LLM_Set_Context_Request.
     * @constructor
     * @param {LLM_Set_Context_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Set_Context_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Set_Context_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {LLM_Set_Context_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Set_Context_Request} LLM_Set_Context_Request instance
     * @type {{
     *   (properties: LLM_Set_Context_Request.$Shape): LLM_Set_Context_Request & LLM_Set_Context_Request.$Shape;
     *   (properties?: LLM_Set_Context_Request.$Properties): LLM_Set_Context_Request;
     * }}
     */
    LLM_Set_Context_Request.create = function(properties) {
        return new LLM_Set_Context_Request(properties);
    };

    /**
     * Encodes the specified LLM_Set_Context_Request message. Does not implicitly {@link LLM_Set_Context_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {LLM_Set_Context_Request.$Properties} message LLM_Set_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Context_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_Context_Request message, length delimited. Does not implicitly {@link LLM_Set_Context_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {LLM_Set_Context_Request.$Properties} message LLM_Set_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Context_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_Context_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_Context_Request & LLM_Set_Context_Request.$Shape} LLM_Set_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Context_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Set_Context_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Set_Context_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_Context_Request & LLM_Set_Context_Request.$Shape} LLM_Set_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Context_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_Context_Request message.
     * @function verify
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_Context_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Set_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_Context_Request} LLM_Set_Context_Request
     */
    LLM_Set_Context_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Set_Context_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Set_Context_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Set_Context_Request();
    };

    /**
     * Creates a plain object from a LLM_Set_Context_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {LLM_Set_Context_Request} message LLM_Set_Context_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_Context_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Set_Context_Request to JSON.
     * @function toJSON
     * @memberof LLM_Set_Context_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_Context_Request.prototype.toJSON = function() {
        return LLM_Set_Context_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Set_Context_Request
     * @function getTypeUrl
     * @memberof LLM_Set_Context_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Set_Context_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Set_Context_Request";
    };

    return LLM_Set_Context_Request;
})();

$root.LLM_Set_Context_Reply = (function() {

    /**
     * Properties of a LLM_Set_Context_Reply.
     * @typedef {Object} LLM_Set_Context_Reply.$Properties
     * @property {number|null} [status] LLM_Set_Context_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Set_Context_Reply.
     * @exports ILLM_Set_Context_Reply
     * @interface ILLM_Set_Context_Reply
     * @augments LLM_Set_Context_Reply.$Properties
     * @deprecated Use LLM_Set_Context_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Set_Context_Reply.
     * @typedef {LLM_Set_Context_Reply.$Properties} LLM_Set_Context_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Set_Context_Reply.
     * @exports LLM_Set_Context_Reply
     * @classdesc Represents a LLM_Set_Context_Reply.
     * @constructor
     * @param {LLM_Set_Context_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Set_Context_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Set_Context_Reply status.
     * @member {number} status
     * @memberof LLM_Set_Context_Reply
     * @instance
     */
    LLM_Set_Context_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Set_Context_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {LLM_Set_Context_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Set_Context_Reply} LLM_Set_Context_Reply instance
     * @type {{
     *   (properties: LLM_Set_Context_Reply.$Shape): LLM_Set_Context_Reply & LLM_Set_Context_Reply.$Shape;
     *   (properties?: LLM_Set_Context_Reply.$Properties): LLM_Set_Context_Reply;
     * }}
     */
    LLM_Set_Context_Reply.create = function(properties) {
        return new LLM_Set_Context_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Set_Context_Reply message. Does not implicitly {@link LLM_Set_Context_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {LLM_Set_Context_Reply.$Properties} message LLM_Set_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Context_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_Context_Reply message, length delimited. Does not implicitly {@link LLM_Set_Context_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {LLM_Set_Context_Reply.$Properties} message LLM_Set_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Context_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_Context_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_Context_Reply & LLM_Set_Context_Reply.$Shape} LLM_Set_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Context_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Set_Context_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Set_Context_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_Context_Reply & LLM_Set_Context_Reply.$Shape} LLM_Set_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Context_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_Context_Reply message.
     * @function verify
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_Context_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Set_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_Context_Reply} LLM_Set_Context_Reply
     */
    LLM_Set_Context_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Set_Context_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Set_Context_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Set_Context_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_Context_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {LLM_Set_Context_Reply} message LLM_Set_Context_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_Context_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Set_Context_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Set_Context_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_Context_Reply.prototype.toJSON = function() {
        return LLM_Set_Context_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Set_Context_Reply
     * @function getTypeUrl
     * @memberof LLM_Set_Context_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Set_Context_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Set_Context_Reply";
    };

    return LLM_Set_Context_Reply;
})();

$root.LLM_Clear_Context_Request = (function() {

    /**
     * Properties of a LLM_Clear_Context_Request.
     * @typedef {Object} LLM_Clear_Context_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Clear_Context_Request.
     * @exports ILLM_Clear_Context_Request
     * @interface ILLM_Clear_Context_Request
     * @augments LLM_Clear_Context_Request.$Properties
     * @deprecated Use LLM_Clear_Context_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Clear_Context_Request.
     * @typedef {LLM_Clear_Context_Request.$Properties} LLM_Clear_Context_Request.$Shape
     */

    /**
     * Constructs a new LLM_Clear_Context_Request.
     * @exports LLM_Clear_Context_Request
     * @classdesc Represents a LLM_Clear_Context_Request.
     * @constructor
     * @param {LLM_Clear_Context_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Clear_Context_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Clear_Context_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {LLM_Clear_Context_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Clear_Context_Request} LLM_Clear_Context_Request instance
     * @type {{
     *   (properties: LLM_Clear_Context_Request.$Shape): LLM_Clear_Context_Request & LLM_Clear_Context_Request.$Shape;
     *   (properties?: LLM_Clear_Context_Request.$Properties): LLM_Clear_Context_Request;
     * }}
     */
    LLM_Clear_Context_Request.create = function(properties) {
        return new LLM_Clear_Context_Request(properties);
    };

    /**
     * Encodes the specified LLM_Clear_Context_Request message. Does not implicitly {@link LLM_Clear_Context_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {LLM_Clear_Context_Request.$Properties} message LLM_Clear_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Clear_Context_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Clear_Context_Request message, length delimited. Does not implicitly {@link LLM_Clear_Context_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {LLM_Clear_Context_Request.$Properties} message LLM_Clear_Context_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Clear_Context_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Clear_Context_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Clear_Context_Request & LLM_Clear_Context_Request.$Shape} LLM_Clear_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Clear_Context_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Clear_Context_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Clear_Context_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Clear_Context_Request & LLM_Clear_Context_Request.$Shape} LLM_Clear_Context_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Clear_Context_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Clear_Context_Request message.
     * @function verify
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Clear_Context_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Clear_Context_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Clear_Context_Request} LLM_Clear_Context_Request
     */
    LLM_Clear_Context_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Clear_Context_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Clear_Context_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Clear_Context_Request();
    };

    /**
     * Creates a plain object from a LLM_Clear_Context_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {LLM_Clear_Context_Request} message LLM_Clear_Context_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Clear_Context_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Clear_Context_Request to JSON.
     * @function toJSON
     * @memberof LLM_Clear_Context_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Clear_Context_Request.prototype.toJSON = function() {
        return LLM_Clear_Context_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Clear_Context_Request
     * @function getTypeUrl
     * @memberof LLM_Clear_Context_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Clear_Context_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Clear_Context_Request";
    };

    return LLM_Clear_Context_Request;
})();

$root.LLM_Clear_Context_Reply = (function() {

    /**
     * Properties of a LLM_Clear_Context_Reply.
     * @typedef {Object} LLM_Clear_Context_Reply.$Properties
     * @property {number|null} [status] LLM_Clear_Context_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Clear_Context_Reply.
     * @exports ILLM_Clear_Context_Reply
     * @interface ILLM_Clear_Context_Reply
     * @augments LLM_Clear_Context_Reply.$Properties
     * @deprecated Use LLM_Clear_Context_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Clear_Context_Reply.
     * @typedef {LLM_Clear_Context_Reply.$Properties} LLM_Clear_Context_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Clear_Context_Reply.
     * @exports LLM_Clear_Context_Reply
     * @classdesc Represents a LLM_Clear_Context_Reply.
     * @constructor
     * @param {LLM_Clear_Context_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Clear_Context_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Clear_Context_Reply status.
     * @member {number} status
     * @memberof LLM_Clear_Context_Reply
     * @instance
     */
    LLM_Clear_Context_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Clear_Context_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {LLM_Clear_Context_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Clear_Context_Reply} LLM_Clear_Context_Reply instance
     * @type {{
     *   (properties: LLM_Clear_Context_Reply.$Shape): LLM_Clear_Context_Reply & LLM_Clear_Context_Reply.$Shape;
     *   (properties?: LLM_Clear_Context_Reply.$Properties): LLM_Clear_Context_Reply;
     * }}
     */
    LLM_Clear_Context_Reply.create = function(properties) {
        return new LLM_Clear_Context_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Clear_Context_Reply message. Does not implicitly {@link LLM_Clear_Context_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {LLM_Clear_Context_Reply.$Properties} message LLM_Clear_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Clear_Context_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Clear_Context_Reply message, length delimited. Does not implicitly {@link LLM_Clear_Context_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {LLM_Clear_Context_Reply.$Properties} message LLM_Clear_Context_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Clear_Context_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Clear_Context_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Clear_Context_Reply & LLM_Clear_Context_Reply.$Shape} LLM_Clear_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Clear_Context_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Clear_Context_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Clear_Context_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Clear_Context_Reply & LLM_Clear_Context_Reply.$Shape} LLM_Clear_Context_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Clear_Context_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Clear_Context_Reply message.
     * @function verify
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Clear_Context_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Clear_Context_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Clear_Context_Reply} LLM_Clear_Context_Reply
     */
    LLM_Clear_Context_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Clear_Context_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Clear_Context_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Clear_Context_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Clear_Context_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {LLM_Clear_Context_Reply} message LLM_Clear_Context_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Clear_Context_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Clear_Context_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Clear_Context_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Clear_Context_Reply.prototype.toJSON = function() {
        return LLM_Clear_Context_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Clear_Context_Reply
     * @function getTypeUrl
     * @memberof LLM_Clear_Context_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Clear_Context_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Clear_Context_Reply";
    };

    return LLM_Clear_Context_Reply;
})();

$root.LLM_Release_Request = (function() {

    /**
     * Properties of a LLM_Release_Request.
     * @typedef {Object} LLM_Release_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Release_Request.
     * @exports ILLM_Release_Request
     * @interface ILLM_Release_Request
     * @augments LLM_Release_Request.$Properties
     * @deprecated Use LLM_Release_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Release_Request.
     * @typedef {LLM_Release_Request.$Properties} LLM_Release_Request.$Shape
     */

    /**
     * Constructs a new LLM_Release_Request.
     * @exports LLM_Release_Request
     * @classdesc Represents a LLM_Release_Request.
     * @constructor
     * @param {LLM_Release_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Release_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Release_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Release_Request
     * @static
     * @param {LLM_Release_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Release_Request} LLM_Release_Request instance
     * @type {{
     *   (properties: LLM_Release_Request.$Shape): LLM_Release_Request & LLM_Release_Request.$Shape;
     *   (properties?: LLM_Release_Request.$Properties): LLM_Release_Request;
     * }}
     */
    LLM_Release_Request.create = function(properties) {
        return new LLM_Release_Request(properties);
    };

    /**
     * Encodes the specified LLM_Release_Request message. Does not implicitly {@link LLM_Release_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Release_Request
     * @static
     * @param {LLM_Release_Request.$Properties} message LLM_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Release_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Release_Request message, length delimited. Does not implicitly {@link LLM_Release_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Release_Request
     * @static
     * @param {LLM_Release_Request.$Properties} message LLM_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Release_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Release_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Release_Request & LLM_Release_Request.$Shape} LLM_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Release_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Release_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Release_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Release_Request & LLM_Release_Request.$Shape} LLM_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Release_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Release_Request message.
     * @function verify
     * @memberof LLM_Release_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Release_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Release_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Release_Request} LLM_Release_Request
     */
    LLM_Release_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Release_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Release_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Release_Request();
    };

    /**
     * Creates a plain object from a LLM_Release_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Release_Request
     * @static
     * @param {LLM_Release_Request} message LLM_Release_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Release_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Release_Request to JSON.
     * @function toJSON
     * @memberof LLM_Release_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Release_Request.prototype.toJSON = function() {
        return LLM_Release_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Release_Request
     * @function getTypeUrl
     * @memberof LLM_Release_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Release_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Release_Request";
    };

    return LLM_Release_Request;
})();

$root.LLM_Release_Reply = (function() {

    /**
     * Properties of a LLM_Release_Reply.
     * @typedef {Object} LLM_Release_Reply.$Properties
     * @property {number|null} [status] LLM_Release_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Release_Reply.
     * @exports ILLM_Release_Reply
     * @interface ILLM_Release_Reply
     * @augments LLM_Release_Reply.$Properties
     * @deprecated Use LLM_Release_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Release_Reply.
     * @typedef {LLM_Release_Reply.$Properties} LLM_Release_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Release_Reply.
     * @exports LLM_Release_Reply
     * @classdesc Represents a LLM_Release_Reply.
     * @constructor
     * @param {LLM_Release_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Release_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Release_Reply status.
     * @member {number} status
     * @memberof LLM_Release_Reply
     * @instance
     */
    LLM_Release_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Release_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Release_Reply
     * @static
     * @param {LLM_Release_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Release_Reply} LLM_Release_Reply instance
     * @type {{
     *   (properties: LLM_Release_Reply.$Shape): LLM_Release_Reply & LLM_Release_Reply.$Shape;
     *   (properties?: LLM_Release_Reply.$Properties): LLM_Release_Reply;
     * }}
     */
    LLM_Release_Reply.create = function(properties) {
        return new LLM_Release_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Release_Reply message. Does not implicitly {@link LLM_Release_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Release_Reply
     * @static
     * @param {LLM_Release_Reply.$Properties} message LLM_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Release_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Release_Reply message, length delimited. Does not implicitly {@link LLM_Release_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Release_Reply
     * @static
     * @param {LLM_Release_Reply.$Properties} message LLM_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Release_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Release_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Release_Reply & LLM_Release_Reply.$Shape} LLM_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Release_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Release_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Release_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Release_Reply & LLM_Release_Reply.$Shape} LLM_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Release_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Release_Reply message.
     * @function verify
     * @memberof LLM_Release_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Release_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Release_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Release_Reply} LLM_Release_Reply
     */
    LLM_Release_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Release_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Release_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Release_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Release_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Release_Reply
     * @static
     * @param {LLM_Release_Reply} message LLM_Release_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Release_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Release_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Release_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Release_Reply.prototype.toJSON = function() {
        return LLM_Release_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Release_Reply
     * @function getTypeUrl
     * @memberof LLM_Release_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Release_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Release_Reply";
    };

    return LLM_Release_Reply;
})();

$root.LLM_Generator_Abort_Request = (function() {

    /**
     * Properties of a LLM_Generator_Abort_Request.
     * @typedef {Object} LLM_Generator_Abort_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Abort_Request.
     * @exports ILLM_Generator_Abort_Request
     * @interface ILLM_Generator_Abort_Request
     * @augments LLM_Generator_Abort_Request.$Properties
     * @deprecated Use LLM_Generator_Abort_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Abort_Request.
     * @typedef {LLM_Generator_Abort_Request.$Properties} LLM_Generator_Abort_Request.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Abort_Request.
     * @exports LLM_Generator_Abort_Request
     * @classdesc Represents a LLM_Generator_Abort_Request.
     * @constructor
     * @param {LLM_Generator_Abort_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Abort_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Generator_Abort_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {LLM_Generator_Abort_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Abort_Request} LLM_Generator_Abort_Request instance
     * @type {{
     *   (properties: LLM_Generator_Abort_Request.$Shape): LLM_Generator_Abort_Request & LLM_Generator_Abort_Request.$Shape;
     *   (properties?: LLM_Generator_Abort_Request.$Properties): LLM_Generator_Abort_Request;
     * }}
     */
    LLM_Generator_Abort_Request.create = function(properties) {
        return new LLM_Generator_Abort_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Abort_Request message. Does not implicitly {@link LLM_Generator_Abort_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {LLM_Generator_Abort_Request.$Properties} message LLM_Generator_Abort_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Abort_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Abort_Request message, length delimited. Does not implicitly {@link LLM_Generator_Abort_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {LLM_Generator_Abort_Request.$Properties} message LLM_Generator_Abort_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Abort_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Abort_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Abort_Request & LLM_Generator_Abort_Request.$Shape} LLM_Generator_Abort_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Abort_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Abort_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Abort_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Abort_Request & LLM_Generator_Abort_Request.$Shape} LLM_Generator_Abort_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Abort_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Abort_Request message.
     * @function verify
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Abort_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Generator_Abort_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Abort_Request} LLM_Generator_Abort_Request
     */
    LLM_Generator_Abort_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Abort_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Abort_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Generator_Abort_Request();
    };

    /**
     * Creates a plain object from a LLM_Generator_Abort_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {LLM_Generator_Abort_Request} message LLM_Generator_Abort_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Abort_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Generator_Abort_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Abort_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Abort_Request.prototype.toJSON = function() {
        return LLM_Generator_Abort_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Abort_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Abort_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Abort_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Abort_Request";
    };

    return LLM_Generator_Abort_Request;
})();

$root.LLM_Generator_Abort_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Abort_Reply.
     * @typedef {Object} LLM_Generator_Abort_Reply.$Properties
     * @property {number|null} [status] LLM_Generator_Abort_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Abort_Reply.
     * @exports ILLM_Generator_Abort_Reply
     * @interface ILLM_Generator_Abort_Reply
     * @augments LLM_Generator_Abort_Reply.$Properties
     * @deprecated Use LLM_Generator_Abort_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Abort_Reply.
     * @typedef {LLM_Generator_Abort_Reply.$Properties} LLM_Generator_Abort_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Abort_Reply.
     * @exports LLM_Generator_Abort_Reply
     * @classdesc Represents a LLM_Generator_Abort_Reply.
     * @constructor
     * @param {LLM_Generator_Abort_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Abort_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Generator_Abort_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Abort_Reply
     * @instance
     */
    LLM_Generator_Abort_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Generator_Abort_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {LLM_Generator_Abort_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Abort_Reply} LLM_Generator_Abort_Reply instance
     * @type {{
     *   (properties: LLM_Generator_Abort_Reply.$Shape): LLM_Generator_Abort_Reply & LLM_Generator_Abort_Reply.$Shape;
     *   (properties?: LLM_Generator_Abort_Reply.$Properties): LLM_Generator_Abort_Reply;
     * }}
     */
    LLM_Generator_Abort_Reply.create = function(properties) {
        return new LLM_Generator_Abort_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Abort_Reply message. Does not implicitly {@link LLM_Generator_Abort_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {LLM_Generator_Abort_Reply.$Properties} message LLM_Generator_Abort_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Abort_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Abort_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Abort_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {LLM_Generator_Abort_Reply.$Properties} message LLM_Generator_Abort_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Abort_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Abort_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Abort_Reply & LLM_Generator_Abort_Reply.$Shape} LLM_Generator_Abort_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Abort_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Abort_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Abort_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Abort_Reply & LLM_Generator_Abort_Reply.$Shape} LLM_Generator_Abort_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Abort_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Abort_Reply message.
     * @function verify
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Abort_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Abort_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Abort_Reply} LLM_Generator_Abort_Reply
     */
    LLM_Generator_Abort_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Abort_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Abort_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Generator_Abort_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Abort_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {LLM_Generator_Abort_Reply} message LLM_Generator_Abort_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Abort_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Generator_Abort_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Abort_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Abort_Reply.prototype.toJSON = function() {
        return LLM_Generator_Abort_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Abort_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Abort_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Abort_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Abort_Reply";
    };

    return LLM_Generator_Abort_Reply;
})();

$root.LLM_Set_End_Of_Generation_Sequence_Request = (function() {

    /**
     * Properties of a LLM_Set_End_Of_Generation_Sequence_Request.
     * @typedef {Object} LLM_Set_End_Of_Generation_Sequence_Request.$Properties
     * @property {Array.<number>|null} [endOfGenerationSequenceTokens] LLM_Set_End_Of_Generation_Sequence_Request endOfGenerationSequenceTokens
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Set_End_Of_Generation_Sequence_Request.
     * @exports ILLM_Set_End_Of_Generation_Sequence_Request
     * @interface ILLM_Set_End_Of_Generation_Sequence_Request
     * @augments LLM_Set_End_Of_Generation_Sequence_Request.$Properties
     * @deprecated Use LLM_Set_End_Of_Generation_Sequence_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Set_End_Of_Generation_Sequence_Request.
     * @typedef {LLM_Set_End_Of_Generation_Sequence_Request.$Properties} LLM_Set_End_Of_Generation_Sequence_Request.$Shape
     */

    /**
     * Constructs a new LLM_Set_End_Of_Generation_Sequence_Request.
     * @exports LLM_Set_End_Of_Generation_Sequence_Request
     * @classdesc Represents a LLM_Set_End_Of_Generation_Sequence_Request.
     * @constructor
     * @param {LLM_Set_End_Of_Generation_Sequence_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Set_End_Of_Generation_Sequence_Request = function (properties) {
        this.endOfGenerationSequenceTokens = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Set_End_Of_Generation_Sequence_Request endOfGenerationSequenceTokens.
     * @member {Array.<number>} endOfGenerationSequenceTokens
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @instance
     */
    LLM_Set_End_Of_Generation_Sequence_Request.prototype.endOfGenerationSequenceTokens = $util.emptyArray;

    /**
     * Creates a new LLM_Set_End_Of_Generation_Sequence_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request} LLM_Set_End_Of_Generation_Sequence_Request instance
     * @type {{
     *   (properties: LLM_Set_End_Of_Generation_Sequence_Request.$Shape): LLM_Set_End_Of_Generation_Sequence_Request & LLM_Set_End_Of_Generation_Sequence_Request.$Shape;
     *   (properties?: LLM_Set_End_Of_Generation_Sequence_Request.$Properties): LLM_Set_End_Of_Generation_Sequence_Request;
     * }}
     */
    LLM_Set_End_Of_Generation_Sequence_Request.create = function(properties) {
        return new LLM_Set_End_Of_Generation_Sequence_Request(properties);
    };

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Request message. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Request.$Properties} message LLM_Set_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_End_Of_Generation_Sequence_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.endOfGenerationSequenceTokens != null && message.endOfGenerationSequenceTokens.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.endOfGenerationSequenceTokens.length; ++i)
                writer.int32(message.endOfGenerationSequenceTokens[i]);
            writer.ldelim();
        }
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Request message, length delimited. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Request.$Properties} message LLM_Set_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_End_Of_Generation_Sequence_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request & LLM_Set_End_Of_Generation_Sequence_Request.$Shape} LLM_Set_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_End_Of_Generation_Sequence_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Set_End_Of_Generation_Sequence_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType === 2) {
                        if (!(message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length))
                            message.endOfGenerationSequenceTokens = [];
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.endOfGenerationSequenceTokens.push(reader.int32());
                        continue;
                    }
                    if (wireType !== 0)
                        break;
                    if (!(message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length))
                        message.endOfGenerationSequenceTokens = [];
                    message.endOfGenerationSequenceTokens.push(reader.int32());
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request & LLM_Set_End_Of_Generation_Sequence_Request.$Shape} LLM_Set_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_End_Of_Generation_Sequence_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_End_Of_Generation_Sequence_Request message.
     * @function verify
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_End_Of_Generation_Sequence_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.endOfGenerationSequenceTokens != null && $Object.hasOwnProperty.call(message, "endOfGenerationSequenceTokens")) {
            if (!$Array.isArray(message.endOfGenerationSequenceTokens))
                return "endOfGenerationSequenceTokens: array expected";
            for (var i = 0; i < message.endOfGenerationSequenceTokens.length; ++i)
                if (!$util.isInteger(message.endOfGenerationSequenceTokens[i]))
                    return "endOfGenerationSequenceTokens: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a LLM_Set_End_Of_Generation_Sequence_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_End_Of_Generation_Sequence_Request} LLM_Set_End_Of_Generation_Sequence_Request
     */
    LLM_Set_End_Of_Generation_Sequence_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Set_End_Of_Generation_Sequence_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Set_End_Of_Generation_Sequence_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Set_End_Of_Generation_Sequence_Request();
        if (object.endOfGenerationSequenceTokens) {
            if (!$Array.isArray(object.endOfGenerationSequenceTokens))
                throw $TypeError(".LLM_Set_End_Of_Generation_Sequence_Request.endOfGenerationSequenceTokens: array expected");
            message.endOfGenerationSequenceTokens = $Array(object.endOfGenerationSequenceTokens.length);
            for (var i = 0; i < object.endOfGenerationSequenceTokens.length; ++i)
                message.endOfGenerationSequenceTokens[i] = object.endOfGenerationSequenceTokens[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_End_Of_Generation_Sequence_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Request} message LLM_Set_End_Of_Generation_Sequence_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_End_Of_Generation_Sequence_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.endOfGenerationSequenceTokens = [];
        if (message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length) {
            object.endOfGenerationSequenceTokens = $Array(message.endOfGenerationSequenceTokens.length);
            for (var j = 0; j < message.endOfGenerationSequenceTokens.length; ++j)
                object.endOfGenerationSequenceTokens[j] = message.endOfGenerationSequenceTokens[j];
        }
        return object;
    };

    /**
     * Converts this LLM_Set_End_Of_Generation_Sequence_Request to JSON.
     * @function toJSON
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_End_Of_Generation_Sequence_Request.prototype.toJSON = function() {
        return LLM_Set_End_Of_Generation_Sequence_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Set_End_Of_Generation_Sequence_Request
     * @function getTypeUrl
     * @memberof LLM_Set_End_Of_Generation_Sequence_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Set_End_Of_Generation_Sequence_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Set_End_Of_Generation_Sequence_Request";
    };

    return LLM_Set_End_Of_Generation_Sequence_Request;
})();

$root.LLM_Generator_Release_Request = (function() {

    /**
     * Properties of a LLM_Generator_Release_Request.
     * @typedef {Object} LLM_Generator_Release_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Release_Request.
     * @exports ILLM_Generator_Release_Request
     * @interface ILLM_Generator_Release_Request
     * @augments LLM_Generator_Release_Request.$Properties
     * @deprecated Use LLM_Generator_Release_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Release_Request.
     * @typedef {LLM_Generator_Release_Request.$Properties} LLM_Generator_Release_Request.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Release_Request.
     * @exports LLM_Generator_Release_Request
     * @classdesc Represents a LLM_Generator_Release_Request.
     * @constructor
     * @param {LLM_Generator_Release_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Release_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Generator_Release_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {LLM_Generator_Release_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Release_Request} LLM_Generator_Release_Request instance
     * @type {{
     *   (properties: LLM_Generator_Release_Request.$Shape): LLM_Generator_Release_Request & LLM_Generator_Release_Request.$Shape;
     *   (properties?: LLM_Generator_Release_Request.$Properties): LLM_Generator_Release_Request;
     * }}
     */
    LLM_Generator_Release_Request.create = function(properties) {
        return new LLM_Generator_Release_Request(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Release_Request message. Does not implicitly {@link LLM_Generator_Release_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {LLM_Generator_Release_Request.$Properties} message LLM_Generator_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Release_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Release_Request message, length delimited. Does not implicitly {@link LLM_Generator_Release_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {LLM_Generator_Release_Request.$Properties} message LLM_Generator_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Release_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Release_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Release_Request & LLM_Generator_Release_Request.$Shape} LLM_Generator_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Release_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Release_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Release_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Release_Request & LLM_Generator_Release_Request.$Shape} LLM_Generator_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Release_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Release_Request message.
     * @function verify
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Release_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Generator_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Release_Request} LLM_Generator_Release_Request
     */
    LLM_Generator_Release_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Release_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Release_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Generator_Release_Request();
    };

    /**
     * Creates a plain object from a LLM_Generator_Release_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {LLM_Generator_Release_Request} message LLM_Generator_Release_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Release_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Generator_Release_Request to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Release_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Release_Request.prototype.toJSON = function() {
        return LLM_Generator_Release_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Release_Request
     * @function getTypeUrl
     * @memberof LLM_Generator_Release_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Release_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Release_Request";
    };

    return LLM_Generator_Release_Request;
})();

$root.LLM_Generator_Release_Reply = (function() {

    /**
     * Properties of a LLM_Generator_Release_Reply.
     * @typedef {Object} LLM_Generator_Release_Reply.$Properties
     * @property {number|null} [status] LLM_Generator_Release_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Generator_Release_Reply.
     * @exports ILLM_Generator_Release_Reply
     * @interface ILLM_Generator_Release_Reply
     * @augments LLM_Generator_Release_Reply.$Properties
     * @deprecated Use LLM_Generator_Release_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Generator_Release_Reply.
     * @typedef {LLM_Generator_Release_Reply.$Properties} LLM_Generator_Release_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Generator_Release_Reply.
     * @exports LLM_Generator_Release_Reply
     * @classdesc Represents a LLM_Generator_Release_Reply.
     * @constructor
     * @param {LLM_Generator_Release_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Generator_Release_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Generator_Release_Reply status.
     * @member {number} status
     * @memberof LLM_Generator_Release_Reply
     * @instance
     */
    LLM_Generator_Release_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Generator_Release_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {LLM_Generator_Release_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Generator_Release_Reply} LLM_Generator_Release_Reply instance
     * @type {{
     *   (properties: LLM_Generator_Release_Reply.$Shape): LLM_Generator_Release_Reply & LLM_Generator_Release_Reply.$Shape;
     *   (properties?: LLM_Generator_Release_Reply.$Properties): LLM_Generator_Release_Reply;
     * }}
     */
    LLM_Generator_Release_Reply.create = function(properties) {
        return new LLM_Generator_Release_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Generator_Release_Reply message. Does not implicitly {@link LLM_Generator_Release_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {LLM_Generator_Release_Reply.$Properties} message LLM_Generator_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Release_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Generator_Release_Reply message, length delimited. Does not implicitly {@link LLM_Generator_Release_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {LLM_Generator_Release_Reply.$Properties} message LLM_Generator_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Generator_Release_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Generator_Release_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Generator_Release_Reply & LLM_Generator_Release_Reply.$Shape} LLM_Generator_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Release_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Generator_Release_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Generator_Release_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Generator_Release_Reply & LLM_Generator_Release_Reply.$Shape} LLM_Generator_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Generator_Release_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Generator_Release_Reply message.
     * @function verify
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Generator_Release_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Generator_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Generator_Release_Reply} LLM_Generator_Release_Reply
     */
    LLM_Generator_Release_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Generator_Release_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Generator_Release_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Generator_Release_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Generator_Release_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {LLM_Generator_Release_Reply} message LLM_Generator_Release_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Generator_Release_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Generator_Release_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Generator_Release_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Generator_Release_Reply.prototype.toJSON = function() {
        return LLM_Generator_Release_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Generator_Release_Reply
     * @function getTypeUrl
     * @memberof LLM_Generator_Release_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Generator_Release_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Generator_Release_Reply";
    };

    return LLM_Generator_Release_Reply;
})();

$root.LLM_Set_End_Of_Generation_Sequence_Reply = (function() {

    /**
     * Properties of a LLM_Set_End_Of_Generation_Sequence_Reply.
     * @typedef {Object} LLM_Set_End_Of_Generation_Sequence_Reply.$Properties
     * @property {number|null} [status] LLM_Set_End_Of_Generation_Sequence_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Set_End_Of_Generation_Sequence_Reply.
     * @exports ILLM_Set_End_Of_Generation_Sequence_Reply
     * @interface ILLM_Set_End_Of_Generation_Sequence_Reply
     * @augments LLM_Set_End_Of_Generation_Sequence_Reply.$Properties
     * @deprecated Use LLM_Set_End_Of_Generation_Sequence_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Set_End_Of_Generation_Sequence_Reply.
     * @typedef {LLM_Set_End_Of_Generation_Sequence_Reply.$Properties} LLM_Set_End_Of_Generation_Sequence_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Set_End_Of_Generation_Sequence_Reply.
     * @exports LLM_Set_End_Of_Generation_Sequence_Reply
     * @classdesc Represents a LLM_Set_End_Of_Generation_Sequence_Reply.
     * @constructor
     * @param {LLM_Set_End_Of_Generation_Sequence_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Set_End_Of_Generation_Sequence_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Set_End_Of_Generation_Sequence_Reply status.
     * @member {number} status
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @instance
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Set_End_Of_Generation_Sequence_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply} LLM_Set_End_Of_Generation_Sequence_Reply instance
     * @type {{
     *   (properties: LLM_Set_End_Of_Generation_Sequence_Reply.$Shape): LLM_Set_End_Of_Generation_Sequence_Reply & LLM_Set_End_Of_Generation_Sequence_Reply.$Shape;
     *   (properties?: LLM_Set_End_Of_Generation_Sequence_Reply.$Properties): LLM_Set_End_Of_Generation_Sequence_Reply;
     * }}
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.create = function(properties) {
        return new LLM_Set_End_Of_Generation_Sequence_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Reply message. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Reply.$Properties} message LLM_Set_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_End_Of_Generation_Sequence_Reply message, length delimited. Does not implicitly {@link LLM_Set_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Reply.$Properties} message LLM_Set_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply & LLM_Set_End_Of_Generation_Sequence_Reply.$Shape} LLM_Set_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Set_End_Of_Generation_Sequence_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Set_End_Of_Generation_Sequence_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply & LLM_Set_End_Of_Generation_Sequence_Reply.$Shape} LLM_Set_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_End_Of_Generation_Sequence_Reply message.
     * @function verify
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Set_End_Of_Generation_Sequence_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_End_Of_Generation_Sequence_Reply} LLM_Set_End_Of_Generation_Sequence_Reply
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Set_End_Of_Generation_Sequence_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Set_End_Of_Generation_Sequence_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Set_End_Of_Generation_Sequence_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_End_Of_Generation_Sequence_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Set_End_Of_Generation_Sequence_Reply} message LLM_Set_End_Of_Generation_Sequence_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Set_End_Of_Generation_Sequence_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.prototype.toJSON = function() {
        return LLM_Set_End_Of_Generation_Sequence_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Set_End_Of_Generation_Sequence_Reply
     * @function getTypeUrl
     * @memberof LLM_Set_End_Of_Generation_Sequence_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Set_End_Of_Generation_Sequence_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Set_End_Of_Generation_Sequence_Reply";
    };

    return LLM_Set_End_Of_Generation_Sequence_Reply;
})();

$root.LLM_Get_End_Of_Generation_Sequence_Request = (function() {

    /**
     * Properties of a LLM_Get_End_Of_Generation_Sequence_Request.
     * @typedef {Object} LLM_Get_End_Of_Generation_Sequence_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_End_Of_Generation_Sequence_Request.
     * @exports ILLM_Get_End_Of_Generation_Sequence_Request
     * @interface ILLM_Get_End_Of_Generation_Sequence_Request
     * @augments LLM_Get_End_Of_Generation_Sequence_Request.$Properties
     * @deprecated Use LLM_Get_End_Of_Generation_Sequence_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_End_Of_Generation_Sequence_Request.
     * @typedef {LLM_Get_End_Of_Generation_Sequence_Request.$Properties} LLM_Get_End_Of_Generation_Sequence_Request.$Shape
     */

    /**
     * Constructs a new LLM_Get_End_Of_Generation_Sequence_Request.
     * @exports LLM_Get_End_Of_Generation_Sequence_Request
     * @classdesc Represents a LLM_Get_End_Of_Generation_Sequence_Request.
     * @constructor
     * @param {LLM_Get_End_Of_Generation_Sequence_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_End_Of_Generation_Sequence_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Get_End_Of_Generation_Sequence_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request} LLM_Get_End_Of_Generation_Sequence_Request instance
     * @type {{
     *   (properties: LLM_Get_End_Of_Generation_Sequence_Request.$Shape): LLM_Get_End_Of_Generation_Sequence_Request & LLM_Get_End_Of_Generation_Sequence_Request.$Shape;
     *   (properties?: LLM_Get_End_Of_Generation_Sequence_Request.$Properties): LLM_Get_End_Of_Generation_Sequence_Request;
     * }}
     */
    LLM_Get_End_Of_Generation_Sequence_Request.create = function(properties) {
        return new LLM_Get_End_Of_Generation_Sequence_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Request message. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Request.$Properties} message LLM_Get_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_End_Of_Generation_Sequence_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Request message, length delimited. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Request.$Properties} message LLM_Get_End_Of_Generation_Sequence_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_End_Of_Generation_Sequence_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request & LLM_Get_End_Of_Generation_Sequence_Request.$Shape} LLM_Get_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_End_Of_Generation_Sequence_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_End_Of_Generation_Sequence_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request & LLM_Get_End_Of_Generation_Sequence_Request.$Shape} LLM_Get_End_Of_Generation_Sequence_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_End_Of_Generation_Sequence_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_End_Of_Generation_Sequence_Request message.
     * @function verify
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_End_Of_Generation_Sequence_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Get_End_Of_Generation_Sequence_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_End_Of_Generation_Sequence_Request} LLM_Get_End_Of_Generation_Sequence_Request
     */
    LLM_Get_End_Of_Generation_Sequence_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_End_Of_Generation_Sequence_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_End_Of_Generation_Sequence_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Get_End_Of_Generation_Sequence_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_End_Of_Generation_Sequence_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Request} message LLM_Get_End_Of_Generation_Sequence_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_End_Of_Generation_Sequence_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Get_End_Of_Generation_Sequence_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_End_Of_Generation_Sequence_Request.prototype.toJSON = function() {
        return LLM_Get_End_Of_Generation_Sequence_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_End_Of_Generation_Sequence_Request
     * @function getTypeUrl
     * @memberof LLM_Get_End_Of_Generation_Sequence_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_End_Of_Generation_Sequence_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_End_Of_Generation_Sequence_Request";
    };

    return LLM_Get_End_Of_Generation_Sequence_Request;
})();

$root.LLM_Get_End_Of_Generation_Sequence_Reply = (function() {

    /**
     * Properties of a LLM_Get_End_Of_Generation_Sequence_Reply.
     * @typedef {Object} LLM_Get_End_Of_Generation_Sequence_Reply.$Properties
     * @property {string|null} [endOfGenerationSequence] LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequence
     * @property {Array.<number>|null} [endOfGenerationSequenceTokens] LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequenceTokens
     * @property {number|null} [status] LLM_Get_End_Of_Generation_Sequence_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_End_Of_Generation_Sequence_Reply.
     * @exports ILLM_Get_End_Of_Generation_Sequence_Reply
     * @interface ILLM_Get_End_Of_Generation_Sequence_Reply
     * @augments LLM_Get_End_Of_Generation_Sequence_Reply.$Properties
     * @deprecated Use LLM_Get_End_Of_Generation_Sequence_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_End_Of_Generation_Sequence_Reply.
     * @typedef {LLM_Get_End_Of_Generation_Sequence_Reply.$Properties} LLM_Get_End_Of_Generation_Sequence_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Get_End_Of_Generation_Sequence_Reply.
     * @exports LLM_Get_End_Of_Generation_Sequence_Reply
     * @classdesc Represents a LLM_Get_End_Of_Generation_Sequence_Reply.
     * @constructor
     * @param {LLM_Get_End_Of_Generation_Sequence_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_End_Of_Generation_Sequence_Reply = function (properties) {
        this.endOfGenerationSequenceTokens = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequence.
     * @member {string} endOfGenerationSequence
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @instance
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.prototype.endOfGenerationSequence = "";

    /**
     * LLM_Get_End_Of_Generation_Sequence_Reply endOfGenerationSequenceTokens.
     * @member {Array.<number>} endOfGenerationSequenceTokens
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @instance
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.prototype.endOfGenerationSequenceTokens = $util.emptyArray;

    /**
     * LLM_Get_End_Of_Generation_Sequence_Reply status.
     * @member {number} status
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @instance
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Get_End_Of_Generation_Sequence_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply} LLM_Get_End_Of_Generation_Sequence_Reply instance
     * @type {{
     *   (properties: LLM_Get_End_Of_Generation_Sequence_Reply.$Shape): LLM_Get_End_Of_Generation_Sequence_Reply & LLM_Get_End_Of_Generation_Sequence_Reply.$Shape;
     *   (properties?: LLM_Get_End_Of_Generation_Sequence_Reply.$Properties): LLM_Get_End_Of_Generation_Sequence_Reply;
     * }}
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.create = function(properties) {
        return new LLM_Get_End_Of_Generation_Sequence_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Reply message. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Reply.$Properties} message LLM_Get_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.endOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "endOfGenerationSequence"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.endOfGenerationSequence);
        if (message.endOfGenerationSequenceTokens != null && message.endOfGenerationSequenceTokens.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.endOfGenerationSequenceTokens.length; ++i)
                writer.int32(message.endOfGenerationSequenceTokens[i]);
            writer.ldelim();
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_End_Of_Generation_Sequence_Reply message, length delimited. Does not implicitly {@link LLM_Get_End_Of_Generation_Sequence_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Reply.$Properties} message LLM_Get_End_Of_Generation_Sequence_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply & LLM_Get_End_Of_Generation_Sequence_Reply.$Shape} LLM_Get_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_End_Of_Generation_Sequence_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.endOfGenerationSequence = value;
                    else
                        delete message.endOfGenerationSequence;
                    continue;
                }
            case 2: {
                    if (wireType === 2) {
                        if (!(message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length))
                            message.endOfGenerationSequenceTokens = [];
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.endOfGenerationSequenceTokens.push(reader.int32());
                        continue;
                    }
                    if (wireType !== 0)
                        break;
                    if (!(message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length))
                        message.endOfGenerationSequenceTokens = [];
                    message.endOfGenerationSequenceTokens.push(reader.int32());
                    continue;
                }
            case 3: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_End_Of_Generation_Sequence_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply & LLM_Get_End_Of_Generation_Sequence_Reply.$Shape} LLM_Get_End_Of_Generation_Sequence_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_End_Of_Generation_Sequence_Reply message.
     * @function verify
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.endOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "endOfGenerationSequence"))
            if (!$util.isString(message.endOfGenerationSequence))
                return "endOfGenerationSequence: string expected";
        if (message.endOfGenerationSequenceTokens != null && $Object.hasOwnProperty.call(message, "endOfGenerationSequenceTokens")) {
            if (!$Array.isArray(message.endOfGenerationSequenceTokens))
                return "endOfGenerationSequenceTokens: array expected";
            for (var i = 0; i < message.endOfGenerationSequenceTokens.length; ++i)
                if (!$util.isInteger(message.endOfGenerationSequenceTokens[i]))
                    return "endOfGenerationSequenceTokens: integer[] expected";
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_End_Of_Generation_Sequence_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_End_Of_Generation_Sequence_Reply} LLM_Get_End_Of_Generation_Sequence_Reply
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_End_Of_Generation_Sequence_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_End_Of_Generation_Sequence_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Get_End_Of_Generation_Sequence_Reply();
        if (object.endOfGenerationSequence != null)
            if (typeof object.endOfGenerationSequence !== "string" || object.endOfGenerationSequence.length)
                message.endOfGenerationSequence = $String(object.endOfGenerationSequence);
        if (object.endOfGenerationSequenceTokens) {
            if (!$Array.isArray(object.endOfGenerationSequenceTokens))
                throw $TypeError(".LLM_Get_End_Of_Generation_Sequence_Reply.endOfGenerationSequenceTokens: array expected");
            message.endOfGenerationSequenceTokens = $Array(object.endOfGenerationSequenceTokens.length);
            for (var i = 0; i < object.endOfGenerationSequenceTokens.length; ++i)
                message.endOfGenerationSequenceTokens[i] = object.endOfGenerationSequenceTokens[i] | 0;
        }
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_End_Of_Generation_Sequence_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {LLM_Get_End_Of_Generation_Sequence_Reply} message LLM_Get_End_Of_Generation_Sequence_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.endOfGenerationSequenceTokens = [];
        if (options.defaults) {
            object.endOfGenerationSequence = "";
            object.status = 0;
        }
        if (message.endOfGenerationSequence != null && $Object.hasOwnProperty.call(message, "endOfGenerationSequence"))
            object.endOfGenerationSequence = message.endOfGenerationSequence;
        if (message.endOfGenerationSequenceTokens && message.endOfGenerationSequenceTokens.length) {
            object.endOfGenerationSequenceTokens = $Array(message.endOfGenerationSequenceTokens.length);
            for (var j = 0; j < message.endOfGenerationSequenceTokens.length; ++j)
                object.endOfGenerationSequenceTokens[j] = message.endOfGenerationSequenceTokens[j];
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Get_End_Of_Generation_Sequence_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.prototype.toJSON = function() {
        return LLM_Get_End_Of_Generation_Sequence_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_End_Of_Generation_Sequence_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_End_Of_Generation_Sequence_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_End_Of_Generation_Sequence_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_End_Of_Generation_Sequence_Reply";
    };

    return LLM_Get_End_Of_Generation_Sequence_Reply;
})();

$root.LLM_Set_Stop_Tokens_Request = (function() {

    /**
     * Properties of a LLM_Set_Stop_Tokens_Request.
     * @typedef {Object} LLM_Set_Stop_Tokens_Request.$Properties
     * @property {Array.<TokenizedSequence.$Properties>|null} [tokenizedStopTokens] LLM_Set_Stop_Tokens_Request tokenizedStopTokens
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Set_Stop_Tokens_Request.
     * @exports ILLM_Set_Stop_Tokens_Request
     * @interface ILLM_Set_Stop_Tokens_Request
     * @augments LLM_Set_Stop_Tokens_Request.$Properties
     * @deprecated Use LLM_Set_Stop_Tokens_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Set_Stop_Tokens_Request.
     * @typedef {LLM_Set_Stop_Tokens_Request.$Properties} LLM_Set_Stop_Tokens_Request.$Shape
     */

    /**
     * Constructs a new LLM_Set_Stop_Tokens_Request.
     * @exports LLM_Set_Stop_Tokens_Request
     * @classdesc Represents a LLM_Set_Stop_Tokens_Request.
     * @constructor
     * @param {LLM_Set_Stop_Tokens_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Set_Stop_Tokens_Request = function (properties) {
        this.tokenizedStopTokens = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Set_Stop_Tokens_Request tokenizedStopTokens.
     * @member {Array.<TokenizedSequence.$Properties>} tokenizedStopTokens
     * @memberof LLM_Set_Stop_Tokens_Request
     * @instance
     */
    LLM_Set_Stop_Tokens_Request.prototype.tokenizedStopTokens = $util.emptyArray;

    /**
     * Creates a new LLM_Set_Stop_Tokens_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {LLM_Set_Stop_Tokens_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Set_Stop_Tokens_Request} LLM_Set_Stop_Tokens_Request instance
     * @type {{
     *   (properties: LLM_Set_Stop_Tokens_Request.$Shape): LLM_Set_Stop_Tokens_Request & LLM_Set_Stop_Tokens_Request.$Shape;
     *   (properties?: LLM_Set_Stop_Tokens_Request.$Properties): LLM_Set_Stop_Tokens_Request;
     * }}
     */
    LLM_Set_Stop_Tokens_Request.create = function(properties) {
        return new LLM_Set_Stop_Tokens_Request(properties);
    };

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Request message. Does not implicitly {@link LLM_Set_Stop_Tokens_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {LLM_Set_Stop_Tokens_Request.$Properties} message LLM_Set_Stop_Tokens_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Stop_Tokens_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.tokenizedStopTokens != null && message.tokenizedStopTokens.length)
            for (var i = 0; i < message.tokenizedStopTokens.length; ++i)
                $root.TokenizedSequence.encode(message.tokenizedStopTokens[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Request message, length delimited. Does not implicitly {@link LLM_Set_Stop_Tokens_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {LLM_Set_Stop_Tokens_Request.$Properties} message LLM_Set_Stop_Tokens_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Stop_Tokens_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_Stop_Tokens_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_Stop_Tokens_Request & LLM_Set_Stop_Tokens_Request.$Shape} LLM_Set_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Stop_Tokens_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Set_Stop_Tokens_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if (!(message.tokenizedStopTokens && message.tokenizedStopTokens.length))
                        message.tokenizedStopTokens = [];
                    message.tokenizedStopTokens.push($root.TokenizedSequence.decode(reader, reader.uint32(), $undefined, _depth + 1));
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Set_Stop_Tokens_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_Stop_Tokens_Request & LLM_Set_Stop_Tokens_Request.$Shape} LLM_Set_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Stop_Tokens_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_Stop_Tokens_Request message.
     * @function verify
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_Stop_Tokens_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.tokenizedStopTokens != null && $Object.hasOwnProperty.call(message, "tokenizedStopTokens")) {
            if (!$Array.isArray(message.tokenizedStopTokens))
                return "tokenizedStopTokens: array expected";
            for (var i = 0; i < message.tokenizedStopTokens.length; ++i) {
                var error = $root.TokenizedSequence.verify(message.tokenizedStopTokens[i], _depth + 1);
                if (error)
                    return "tokenizedStopTokens." + error;
            }
        }
        return null;
    };

    /**
     * Creates a LLM_Set_Stop_Tokens_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_Stop_Tokens_Request} LLM_Set_Stop_Tokens_Request
     */
    LLM_Set_Stop_Tokens_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Set_Stop_Tokens_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Set_Stop_Tokens_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Set_Stop_Tokens_Request();
        if (object.tokenizedStopTokens) {
            if (!$Array.isArray(object.tokenizedStopTokens))
                throw $TypeError(".LLM_Set_Stop_Tokens_Request.tokenizedStopTokens: array expected");
            message.tokenizedStopTokens = $Array(object.tokenizedStopTokens.length);
            for (var i = 0; i < object.tokenizedStopTokens.length; ++i) {
                if (!$util.isObject(object.tokenizedStopTokens[i]))
                    throw $TypeError(".LLM_Set_Stop_Tokens_Request.tokenizedStopTokens: object expected");
                message.tokenizedStopTokens[i] = $root.TokenizedSequence.fromObject(object.tokenizedStopTokens[i], _depth + 1);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_Stop_Tokens_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {LLM_Set_Stop_Tokens_Request} message LLM_Set_Stop_Tokens_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_Stop_Tokens_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.tokenizedStopTokens = [];
        if (message.tokenizedStopTokens && message.tokenizedStopTokens.length) {
            object.tokenizedStopTokens = $Array(message.tokenizedStopTokens.length);
            for (var j = 0; j < message.tokenizedStopTokens.length; ++j)
                object.tokenizedStopTokens[j] = $root.TokenizedSequence.toObject(message.tokenizedStopTokens[j], options, _depth + 1);
        }
        return object;
    };

    /**
     * Converts this LLM_Set_Stop_Tokens_Request to JSON.
     * @function toJSON
     * @memberof LLM_Set_Stop_Tokens_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_Stop_Tokens_Request.prototype.toJSON = function() {
        return LLM_Set_Stop_Tokens_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Set_Stop_Tokens_Request
     * @function getTypeUrl
     * @memberof LLM_Set_Stop_Tokens_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Set_Stop_Tokens_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Set_Stop_Tokens_Request";
    };

    return LLM_Set_Stop_Tokens_Request;
})();

$root.TokenizedSequence = (function() {

    /**
     * Properties of a TokenizedSequence.
     * @typedef {Object} TokenizedSequence.$Properties
     * @property {Array.<number>|null} [tokens] TokenizedSequence tokens
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a TokenizedSequence.
     * @exports ITokenizedSequence
     * @interface ITokenizedSequence
     * @augments TokenizedSequence.$Properties
     * @deprecated Use TokenizedSequence.$Properties instead.
     */

    /**
     * Shape of a TokenizedSequence.
     * @typedef {TokenizedSequence.$Properties} TokenizedSequence.$Shape
     */

    /**
     * Constructs a new TokenizedSequence.
     * @exports TokenizedSequence
     * @classdesc Represents a TokenizedSequence.
     * @constructor
     * @param {TokenizedSequence.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var TokenizedSequence = function (properties) {
        this.tokens = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * TokenizedSequence tokens.
     * @member {Array.<number>} tokens
     * @memberof TokenizedSequence
     * @instance
     */
    TokenizedSequence.prototype.tokens = $util.emptyArray;

    /**
     * Creates a new TokenizedSequence instance using the specified properties.
     * @function create
     * @memberof TokenizedSequence
     * @static
     * @param {TokenizedSequence.$Properties=} [properties] Properties to set
     * @returns {TokenizedSequence} TokenizedSequence instance
     * @type {{
     *   (properties: TokenizedSequence.$Shape): TokenizedSequence & TokenizedSequence.$Shape;
     *   (properties?: TokenizedSequence.$Properties): TokenizedSequence;
     * }}
     */
    TokenizedSequence.create = function(properties) {
        return new TokenizedSequence(properties);
    };

    /**
     * Encodes the specified TokenizedSequence message. Does not implicitly {@link TokenizedSequence.verify|verify} messages.
     * @function encode
     * @memberof TokenizedSequence
     * @static
     * @param {TokenizedSequence.$Properties} message TokenizedSequence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenizedSequence.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.tokens != null && message.tokens.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.tokens.length; ++i)
                writer.int32(message.tokens[i]);
            writer.ldelim();
        }
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified TokenizedSequence message, length delimited. Does not implicitly {@link TokenizedSequence.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TokenizedSequence
     * @static
     * @param {TokenizedSequence.$Properties} message TokenizedSequence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenizedSequence.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a TokenizedSequence message from the specified reader or buffer.
     * @function decode
     * @memberof TokenizedSequence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TokenizedSequence & TokenizedSequence.$Shape} TokenizedSequence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenizedSequence.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.TokenizedSequence();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType === 2) {
                        if (!(message.tokens && message.tokens.length))
                            message.tokens = [];
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tokens.push(reader.int32());
                        continue;
                    }
                    if (wireType !== 0)
                        break;
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    message.tokens.push(reader.int32());
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a TokenizedSequence message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TokenizedSequence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TokenizedSequence & TokenizedSequence.$Shape} TokenizedSequence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenizedSequence.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TokenizedSequence message.
     * @function verify
     * @memberof TokenizedSequence
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TokenizedSequence.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.tokens != null && $Object.hasOwnProperty.call(message, "tokens")) {
            if (!$Array.isArray(message.tokens))
                return "tokens: array expected";
            for (var i = 0; i < message.tokens.length; ++i)
                if (!$util.isInteger(message.tokens[i]))
                    return "tokens: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a TokenizedSequence message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TokenizedSequence
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TokenizedSequence} TokenizedSequence
     */
    TokenizedSequence.fromObject = function (object, _depth) {
        if (object instanceof $root.TokenizedSequence)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".TokenizedSequence: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.TokenizedSequence();
        if (object.tokens) {
            if (!$Array.isArray(object.tokens))
                throw $TypeError(".TokenizedSequence.tokens: array expected");
            message.tokens = $Array(object.tokens.length);
            for (var i = 0; i < object.tokens.length; ++i)
                message.tokens[i] = object.tokens[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a TokenizedSequence message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TokenizedSequence
     * @static
     * @param {TokenizedSequence} message TokenizedSequence
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TokenizedSequence.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.tokens = [];
        if (message.tokens && message.tokens.length) {
            object.tokens = $Array(message.tokens.length);
            for (var j = 0; j < message.tokens.length; ++j)
                object.tokens[j] = message.tokens[j];
        }
        return object;
    };

    /**
     * Converts this TokenizedSequence to JSON.
     * @function toJSON
     * @memberof TokenizedSequence
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TokenizedSequence.prototype.toJSON = function() {
        return TokenizedSequence.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for TokenizedSequence
     * @function getTypeUrl
     * @memberof TokenizedSequence
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    TokenizedSequence.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/TokenizedSequence";
    };

    return TokenizedSequence;
})();

$root.LLM_Set_Stop_Tokens_Reply = (function() {

    /**
     * Properties of a LLM_Set_Stop_Tokens_Reply.
     * @typedef {Object} LLM_Set_Stop_Tokens_Reply.$Properties
     * @property {number|null} [status] LLM_Set_Stop_Tokens_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Set_Stop_Tokens_Reply.
     * @exports ILLM_Set_Stop_Tokens_Reply
     * @interface ILLM_Set_Stop_Tokens_Reply
     * @augments LLM_Set_Stop_Tokens_Reply.$Properties
     * @deprecated Use LLM_Set_Stop_Tokens_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Set_Stop_Tokens_Reply.
     * @typedef {LLM_Set_Stop_Tokens_Reply.$Properties} LLM_Set_Stop_Tokens_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Set_Stop_Tokens_Reply.
     * @exports LLM_Set_Stop_Tokens_Reply
     * @classdesc Represents a LLM_Set_Stop_Tokens_Reply.
     * @constructor
     * @param {LLM_Set_Stop_Tokens_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Set_Stop_Tokens_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Set_Stop_Tokens_Reply status.
     * @member {number} status
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @instance
     */
    LLM_Set_Stop_Tokens_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Set_Stop_Tokens_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {LLM_Set_Stop_Tokens_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Set_Stop_Tokens_Reply} LLM_Set_Stop_Tokens_Reply instance
     * @type {{
     *   (properties: LLM_Set_Stop_Tokens_Reply.$Shape): LLM_Set_Stop_Tokens_Reply & LLM_Set_Stop_Tokens_Reply.$Shape;
     *   (properties?: LLM_Set_Stop_Tokens_Reply.$Properties): LLM_Set_Stop_Tokens_Reply;
     * }}
     */
    LLM_Set_Stop_Tokens_Reply.create = function(properties) {
        return new LLM_Set_Stop_Tokens_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Reply message. Does not implicitly {@link LLM_Set_Stop_Tokens_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {LLM_Set_Stop_Tokens_Reply.$Properties} message LLM_Set_Stop_Tokens_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Stop_Tokens_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Set_Stop_Tokens_Reply message, length delimited. Does not implicitly {@link LLM_Set_Stop_Tokens_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {LLM_Set_Stop_Tokens_Reply.$Properties} message LLM_Set_Stop_Tokens_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Set_Stop_Tokens_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Set_Stop_Tokens_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Set_Stop_Tokens_Reply & LLM_Set_Stop_Tokens_Reply.$Shape} LLM_Set_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Stop_Tokens_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Set_Stop_Tokens_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Set_Stop_Tokens_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Set_Stop_Tokens_Reply & LLM_Set_Stop_Tokens_Reply.$Shape} LLM_Set_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Set_Stop_Tokens_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Set_Stop_Tokens_Reply message.
     * @function verify
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Set_Stop_Tokens_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Set_Stop_Tokens_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Set_Stop_Tokens_Reply} LLM_Set_Stop_Tokens_Reply
     */
    LLM_Set_Stop_Tokens_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Set_Stop_Tokens_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Set_Stop_Tokens_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Set_Stop_Tokens_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Set_Stop_Tokens_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {LLM_Set_Stop_Tokens_Reply} message LLM_Set_Stop_Tokens_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Set_Stop_Tokens_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Set_Stop_Tokens_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Set_Stop_Tokens_Reply.prototype.toJSON = function() {
        return LLM_Set_Stop_Tokens_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Set_Stop_Tokens_Reply
     * @function getTypeUrl
     * @memberof LLM_Set_Stop_Tokens_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Set_Stop_Tokens_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Set_Stop_Tokens_Reply";
    };

    return LLM_Set_Stop_Tokens_Reply;
})();

$root.LLM_Get_Stop_Tokens_Request = (function() {

    /**
     * Properties of a LLM_Get_Stop_Tokens_Request.
     * @typedef {Object} LLM_Get_Stop_Tokens_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Stop_Tokens_Request.
     * @exports ILLM_Get_Stop_Tokens_Request
     * @interface ILLM_Get_Stop_Tokens_Request
     * @augments LLM_Get_Stop_Tokens_Request.$Properties
     * @deprecated Use LLM_Get_Stop_Tokens_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Stop_Tokens_Request.
     * @typedef {LLM_Get_Stop_Tokens_Request.$Properties} LLM_Get_Stop_Tokens_Request.$Shape
     */

    /**
     * Constructs a new LLM_Get_Stop_Tokens_Request.
     * @exports LLM_Get_Stop_Tokens_Request
     * @classdesc Represents a LLM_Get_Stop_Tokens_Request.
     * @constructor
     * @param {LLM_Get_Stop_Tokens_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Stop_Tokens_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Get_Stop_Tokens_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {LLM_Get_Stop_Tokens_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Stop_Tokens_Request} LLM_Get_Stop_Tokens_Request instance
     * @type {{
     *   (properties: LLM_Get_Stop_Tokens_Request.$Shape): LLM_Get_Stop_Tokens_Request & LLM_Get_Stop_Tokens_Request.$Shape;
     *   (properties?: LLM_Get_Stop_Tokens_Request.$Properties): LLM_Get_Stop_Tokens_Request;
     * }}
     */
    LLM_Get_Stop_Tokens_Request.create = function(properties) {
        return new LLM_Get_Stop_Tokens_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Request message. Does not implicitly {@link LLM_Get_Stop_Tokens_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {LLM_Get_Stop_Tokens_Request.$Properties} message LLM_Get_Stop_Tokens_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Stop_Tokens_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Request message, length delimited. Does not implicitly {@link LLM_Get_Stop_Tokens_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {LLM_Get_Stop_Tokens_Request.$Properties} message LLM_Get_Stop_Tokens_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Stop_Tokens_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Stop_Tokens_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Stop_Tokens_Request & LLM_Get_Stop_Tokens_Request.$Shape} LLM_Get_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Stop_Tokens_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Stop_Tokens_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Stop_Tokens_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Stop_Tokens_Request & LLM_Get_Stop_Tokens_Request.$Shape} LLM_Get_Stop_Tokens_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Stop_Tokens_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Stop_Tokens_Request message.
     * @function verify
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Stop_Tokens_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Get_Stop_Tokens_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Stop_Tokens_Request} LLM_Get_Stop_Tokens_Request
     */
    LLM_Get_Stop_Tokens_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Stop_Tokens_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Stop_Tokens_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Get_Stop_Tokens_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Stop_Tokens_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {LLM_Get_Stop_Tokens_Request} message LLM_Get_Stop_Tokens_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Stop_Tokens_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Get_Stop_Tokens_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Stop_Tokens_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Stop_Tokens_Request.prototype.toJSON = function() {
        return LLM_Get_Stop_Tokens_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Stop_Tokens_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Stop_Tokens_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Stop_Tokens_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Stop_Tokens_Request";
    };

    return LLM_Get_Stop_Tokens_Request;
})();

$root.LLM_Get_Stop_Tokens_Reply = (function() {

    /**
     * Properties of a LLM_Get_Stop_Tokens_Reply.
     * @typedef {Object} LLM_Get_Stop_Tokens_Reply.$Properties
     * @property {Array.<string>|null} [stopTokens] LLM_Get_Stop_Tokens_Reply stopTokens
     * @property {Array.<TokenizedSequence.$Properties>|null} [tokenizedStopTokens] LLM_Get_Stop_Tokens_Reply tokenizedStopTokens
     * @property {number|null} [status] LLM_Get_Stop_Tokens_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Stop_Tokens_Reply.
     * @exports ILLM_Get_Stop_Tokens_Reply
     * @interface ILLM_Get_Stop_Tokens_Reply
     * @augments LLM_Get_Stop_Tokens_Reply.$Properties
     * @deprecated Use LLM_Get_Stop_Tokens_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Stop_Tokens_Reply.
     * @typedef {LLM_Get_Stop_Tokens_Reply.$Properties} LLM_Get_Stop_Tokens_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Get_Stop_Tokens_Reply.
     * @exports LLM_Get_Stop_Tokens_Reply
     * @classdesc Represents a LLM_Get_Stop_Tokens_Reply.
     * @constructor
     * @param {LLM_Get_Stop_Tokens_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Stop_Tokens_Reply = function (properties) {
        this.stopTokens = [];
        this.tokenizedStopTokens = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Get_Stop_Tokens_Reply stopTokens.
     * @member {Array.<string>} stopTokens
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @instance
     */
    LLM_Get_Stop_Tokens_Reply.prototype.stopTokens = $util.emptyArray;

    /**
     * LLM_Get_Stop_Tokens_Reply tokenizedStopTokens.
     * @member {Array.<TokenizedSequence.$Properties>} tokenizedStopTokens
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @instance
     */
    LLM_Get_Stop_Tokens_Reply.prototype.tokenizedStopTokens = $util.emptyArray;

    /**
     * LLM_Get_Stop_Tokens_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @instance
     */
    LLM_Get_Stop_Tokens_Reply.prototype.status = 0;

    /**
     * Creates a new LLM_Get_Stop_Tokens_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {LLM_Get_Stop_Tokens_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Stop_Tokens_Reply} LLM_Get_Stop_Tokens_Reply instance
     * @type {{
     *   (properties: LLM_Get_Stop_Tokens_Reply.$Shape): LLM_Get_Stop_Tokens_Reply & LLM_Get_Stop_Tokens_Reply.$Shape;
     *   (properties?: LLM_Get_Stop_Tokens_Reply.$Properties): LLM_Get_Stop_Tokens_Reply;
     * }}
     */
    LLM_Get_Stop_Tokens_Reply.create = function(properties) {
        return new LLM_Get_Stop_Tokens_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Reply message. Does not implicitly {@link LLM_Get_Stop_Tokens_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {LLM_Get_Stop_Tokens_Reply.$Properties} message LLM_Get_Stop_Tokens_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Stop_Tokens_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.stopTokens != null && message.stopTokens.length)
            for (var i = 0; i < message.stopTokens.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stopTokens[i]);
        if (message.tokenizedStopTokens != null && message.tokenizedStopTokens.length)
            for (var i = 0; i < message.tokenizedStopTokens.length; ++i)
                $root.TokenizedSequence.encode(message.tokenizedStopTokens[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Stop_Tokens_Reply message, length delimited. Does not implicitly {@link LLM_Get_Stop_Tokens_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {LLM_Get_Stop_Tokens_Reply.$Properties} message LLM_Get_Stop_Tokens_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Stop_Tokens_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Stop_Tokens_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Stop_Tokens_Reply & LLM_Get_Stop_Tokens_Reply.$Shape} LLM_Get_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Stop_Tokens_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Stop_Tokens_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if (!(message.stopTokens && message.stopTokens.length))
                        message.stopTokens = [];
                    message.stopTokens.push(reader.stringVerify());
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    if (!(message.tokenizedStopTokens && message.tokenizedStopTokens.length))
                        message.tokenizedStopTokens = [];
                    message.tokenizedStopTokens.push($root.TokenizedSequence.decode(reader, reader.uint32(), $undefined, _depth + 1));
                    continue;
                }
            case 3: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Stop_Tokens_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Stop_Tokens_Reply & LLM_Get_Stop_Tokens_Reply.$Shape} LLM_Get_Stop_Tokens_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Stop_Tokens_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Stop_Tokens_Reply message.
     * @function verify
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Stop_Tokens_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.stopTokens != null && $Object.hasOwnProperty.call(message, "stopTokens")) {
            if (!$Array.isArray(message.stopTokens))
                return "stopTokens: array expected";
            for (var i = 0; i < message.stopTokens.length; ++i)
                if (!$util.isString(message.stopTokens[i]))
                    return "stopTokens: string[] expected";
        }
        if (message.tokenizedStopTokens != null && $Object.hasOwnProperty.call(message, "tokenizedStopTokens")) {
            if (!$Array.isArray(message.tokenizedStopTokens))
                return "tokenizedStopTokens: array expected";
            for (var i = 0; i < message.tokenizedStopTokens.length; ++i) {
                var error = $root.TokenizedSequence.verify(message.tokenizedStopTokens[i], _depth + 1);
                if (error)
                    return "tokenizedStopTokens." + error;
            }
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Stop_Tokens_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Stop_Tokens_Reply} LLM_Get_Stop_Tokens_Reply
     */
    LLM_Get_Stop_Tokens_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Stop_Tokens_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Stop_Tokens_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Get_Stop_Tokens_Reply();
        if (object.stopTokens) {
            if (!$Array.isArray(object.stopTokens))
                throw $TypeError(".LLM_Get_Stop_Tokens_Reply.stopTokens: array expected");
            message.stopTokens = $Array(object.stopTokens.length);
            for (var i = 0; i < object.stopTokens.length; ++i)
                message.stopTokens[i] = $String(object.stopTokens[i]);
        }
        if (object.tokenizedStopTokens) {
            if (!$Array.isArray(object.tokenizedStopTokens))
                throw $TypeError(".LLM_Get_Stop_Tokens_Reply.tokenizedStopTokens: array expected");
            message.tokenizedStopTokens = $Array(object.tokenizedStopTokens.length);
            for (var i = 0; i < object.tokenizedStopTokens.length; ++i) {
                if (!$util.isObject(object.tokenizedStopTokens[i]))
                    throw $TypeError(".LLM_Get_Stop_Tokens_Reply.tokenizedStopTokens: object expected");
                message.tokenizedStopTokens[i] = $root.TokenizedSequence.fromObject(object.tokenizedStopTokens[i], _depth + 1);
            }
        }
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Stop_Tokens_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {LLM_Get_Stop_Tokens_Reply} message LLM_Get_Stop_Tokens_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Stop_Tokens_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults) {
            object.stopTokens = [];
            object.tokenizedStopTokens = [];
        }
        if (options.defaults)
            object.status = 0;
        if (message.stopTokens && message.stopTokens.length) {
            object.stopTokens = $Array(message.stopTokens.length);
            for (var j = 0; j < message.stopTokens.length; ++j)
                object.stopTokens[j] = message.stopTokens[j];
        }
        if (message.tokenizedStopTokens && message.tokenizedStopTokens.length) {
            object.tokenizedStopTokens = $Array(message.tokenizedStopTokens.length);
            for (var j = 0; j < message.tokenizedStopTokens.length; ++j)
                object.tokenizedStopTokens[j] = $root.TokenizedSequence.toObject(message.tokenizedStopTokens[j], options, _depth + 1);
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this LLM_Get_Stop_Tokens_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Stop_Tokens_Reply.prototype.toJSON = function() {
        return LLM_Get_Stop_Tokens_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Stop_Tokens_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Stop_Tokens_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Stop_Tokens_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Stop_Tokens_Reply";
    };

    return LLM_Get_Stop_Tokens_Reply;
})();

$root.LLM_Get_Context_Usage_Size_Request = (function() {

    /**
     * Properties of a LLM_Get_Context_Usage_Size_Request.
     * @typedef {Object} LLM_Get_Context_Usage_Size_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Context_Usage_Size_Request.
     * @exports ILLM_Get_Context_Usage_Size_Request
     * @interface ILLM_Get_Context_Usage_Size_Request
     * @augments LLM_Get_Context_Usage_Size_Request.$Properties
     * @deprecated Use LLM_Get_Context_Usage_Size_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Context_Usage_Size_Request.
     * @typedef {LLM_Get_Context_Usage_Size_Request.$Properties} LLM_Get_Context_Usage_Size_Request.$Shape
     */

    /**
     * Constructs a new LLM_Get_Context_Usage_Size_Request.
     * @exports LLM_Get_Context_Usage_Size_Request
     * @classdesc Represents a LLM_Get_Context_Usage_Size_Request.
     * @constructor
     * @param {LLM_Get_Context_Usage_Size_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Context_Usage_Size_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Get_Context_Usage_Size_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {LLM_Get_Context_Usage_Size_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Context_Usage_Size_Request} LLM_Get_Context_Usage_Size_Request instance
     * @type {{
     *   (properties: LLM_Get_Context_Usage_Size_Request.$Shape): LLM_Get_Context_Usage_Size_Request & LLM_Get_Context_Usage_Size_Request.$Shape;
     *   (properties?: LLM_Get_Context_Usage_Size_Request.$Properties): LLM_Get_Context_Usage_Size_Request;
     * }}
     */
    LLM_Get_Context_Usage_Size_Request.create = function(properties) {
        return new LLM_Get_Context_Usage_Size_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Request message. Does not implicitly {@link LLM_Get_Context_Usage_Size_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {LLM_Get_Context_Usage_Size_Request.$Properties} message LLM_Get_Context_Usage_Size_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Usage_Size_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Request message, length delimited. Does not implicitly {@link LLM_Get_Context_Usage_Size_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {LLM_Get_Context_Usage_Size_Request.$Properties} message LLM_Get_Context_Usage_Size_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Usage_Size_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Usage_Size_Request & LLM_Get_Context_Usage_Size_Request.$Shape} LLM_Get_Context_Usage_Size_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Usage_Size_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Context_Usage_Size_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Usage_Size_Request & LLM_Get_Context_Usage_Size_Request.$Shape} LLM_Get_Context_Usage_Size_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Usage_Size_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Context_Usage_Size_Request message.
     * @function verify
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Context_Usage_Size_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Get_Context_Usage_Size_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Context_Usage_Size_Request} LLM_Get_Context_Usage_Size_Request
     */
    LLM_Get_Context_Usage_Size_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Context_Usage_Size_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Context_Usage_Size_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Get_Context_Usage_Size_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Context_Usage_Size_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {LLM_Get_Context_Usage_Size_Request} message LLM_Get_Context_Usage_Size_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Context_Usage_Size_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Get_Context_Usage_Size_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Context_Usage_Size_Request.prototype.toJSON = function() {
        return LLM_Get_Context_Usage_Size_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Context_Usage_Size_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Context_Usage_Size_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Context_Usage_Size_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Context_Usage_Size_Request";
    };

    return LLM_Get_Context_Usage_Size_Request;
})();

$root.LLM_Get_Context_Usage_Size_Reply = (function() {

    /**
     * Properties of a LLM_Get_Context_Usage_Size_Reply.
     * @typedef {Object} LLM_Get_Context_Usage_Size_Reply.$Properties
     * @property {number|null} [status] LLM_Get_Context_Usage_Size_Reply status
     * @property {number|null} [contextUsage] LLM_Get_Context_Usage_Size_Reply contextUsage
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Context_Usage_Size_Reply.
     * @exports ILLM_Get_Context_Usage_Size_Reply
     * @interface ILLM_Get_Context_Usage_Size_Reply
     * @augments LLM_Get_Context_Usage_Size_Reply.$Properties
     * @deprecated Use LLM_Get_Context_Usage_Size_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Context_Usage_Size_Reply.
     * @typedef {LLM_Get_Context_Usage_Size_Reply.$Properties} LLM_Get_Context_Usage_Size_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Get_Context_Usage_Size_Reply.
     * @exports LLM_Get_Context_Usage_Size_Reply
     * @classdesc Represents a LLM_Get_Context_Usage_Size_Reply.
     * @constructor
     * @param {LLM_Get_Context_Usage_Size_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Context_Usage_Size_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Get_Context_Usage_Size_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @instance
     */
    LLM_Get_Context_Usage_Size_Reply.prototype.status = 0;

    /**
     * LLM_Get_Context_Usage_Size_Reply contextUsage.
     * @member {number} contextUsage
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @instance
     */
    LLM_Get_Context_Usage_Size_Reply.prototype.contextUsage = 0;

    /**
     * Creates a new LLM_Get_Context_Usage_Size_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {LLM_Get_Context_Usage_Size_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Context_Usage_Size_Reply} LLM_Get_Context_Usage_Size_Reply instance
     * @type {{
     *   (properties: LLM_Get_Context_Usage_Size_Reply.$Shape): LLM_Get_Context_Usage_Size_Reply & LLM_Get_Context_Usage_Size_Reply.$Shape;
     *   (properties?: LLM_Get_Context_Usage_Size_Reply.$Properties): LLM_Get_Context_Usage_Size_Reply;
     * }}
     */
    LLM_Get_Context_Usage_Size_Reply.create = function(properties) {
        return new LLM_Get_Context_Usage_Size_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Reply message. Does not implicitly {@link LLM_Get_Context_Usage_Size_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {LLM_Get_Context_Usage_Size_Reply.$Properties} message LLM_Get_Context_Usage_Size_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Usage_Size_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.contextUsage != null && $Object.hasOwnProperty.call(message, "contextUsage"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.contextUsage);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Context_Usage_Size_Reply message, length delimited. Does not implicitly {@link LLM_Get_Context_Usage_Size_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {LLM_Get_Context_Usage_Size_Reply.$Properties} message LLM_Get_Context_Usage_Size_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Context_Usage_Size_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Context_Usage_Size_Reply & LLM_Get_Context_Usage_Size_Reply.$Shape} LLM_Get_Context_Usage_Size_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Usage_Size_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Context_Usage_Size_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.contextUsage = value;
                    else
                        delete message.contextUsage;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Context_Usage_Size_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Context_Usage_Size_Reply & LLM_Get_Context_Usage_Size_Reply.$Shape} LLM_Get_Context_Usage_Size_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Context_Usage_Size_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Context_Usage_Size_Reply message.
     * @function verify
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Context_Usage_Size_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.contextUsage != null && $Object.hasOwnProperty.call(message, "contextUsage"))
            if (!$util.isInteger(message.contextUsage))
                return "contextUsage: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Context_Usage_Size_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Context_Usage_Size_Reply} LLM_Get_Context_Usage_Size_Reply
     */
    LLM_Get_Context_Usage_Size_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Context_Usage_Size_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Context_Usage_Size_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Get_Context_Usage_Size_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        if (object.contextUsage != null)
            if ($Number(object.contextUsage) !== 0)
                message.contextUsage = object.contextUsage >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Context_Usage_Size_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {LLM_Get_Context_Usage_Size_Reply} message LLM_Get_Context_Usage_Size_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Context_Usage_Size_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.contextUsage = 0;
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        if (message.contextUsage != null && $Object.hasOwnProperty.call(message, "contextUsage"))
            object.contextUsage = message.contextUsage;
        return object;
    };

    /**
     * Converts this LLM_Get_Context_Usage_Size_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Context_Usage_Size_Reply.prototype.toJSON = function() {
        return LLM_Get_Context_Usage_Size_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Context_Usage_Size_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Context_Usage_Size_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Context_Usage_Size_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Context_Usage_Size_Reply";
    };

    return LLM_Get_Context_Usage_Size_Reply;
})();

$root.LLM_Get_Max_Context_Capacity_Request = (function() {

    /**
     * Properties of a LLM_Get_Max_Context_Capacity_Request.
     * @typedef {Object} LLM_Get_Max_Context_Capacity_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Max_Context_Capacity_Request.
     * @exports ILLM_Get_Max_Context_Capacity_Request
     * @interface ILLM_Get_Max_Context_Capacity_Request
     * @augments LLM_Get_Max_Context_Capacity_Request.$Properties
     * @deprecated Use LLM_Get_Max_Context_Capacity_Request.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Max_Context_Capacity_Request.
     * @typedef {LLM_Get_Max_Context_Capacity_Request.$Properties} LLM_Get_Max_Context_Capacity_Request.$Shape
     */

    /**
     * Constructs a new LLM_Get_Max_Context_Capacity_Request.
     * @exports LLM_Get_Max_Context_Capacity_Request
     * @classdesc Represents a LLM_Get_Max_Context_Capacity_Request.
     * @constructor
     * @param {LLM_Get_Max_Context_Capacity_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Max_Context_Capacity_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new LLM_Get_Max_Context_Capacity_Request instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Request.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Max_Context_Capacity_Request} LLM_Get_Max_Context_Capacity_Request instance
     * @type {{
     *   (properties: LLM_Get_Max_Context_Capacity_Request.$Shape): LLM_Get_Max_Context_Capacity_Request & LLM_Get_Max_Context_Capacity_Request.$Shape;
     *   (properties?: LLM_Get_Max_Context_Capacity_Request.$Properties): LLM_Get_Max_Context_Capacity_Request;
     * }}
     */
    LLM_Get_Max_Context_Capacity_Request.create = function(properties) {
        return new LLM_Get_Max_Context_Capacity_Request(properties);
    };

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Request message. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Request.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Request.$Properties} message LLM_Get_Max_Context_Capacity_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Max_Context_Capacity_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Request message, length delimited. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Request.$Properties} message LLM_Get_Max_Context_Capacity_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Max_Context_Capacity_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Request message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Max_Context_Capacity_Request & LLM_Get_Max_Context_Capacity_Request.$Shape} LLM_Get_Max_Context_Capacity_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Max_Context_Capacity_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Max_Context_Capacity_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Max_Context_Capacity_Request & LLM_Get_Max_Context_Capacity_Request.$Shape} LLM_Get_Max_Context_Capacity_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Max_Context_Capacity_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Max_Context_Capacity_Request message.
     * @function verify
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Max_Context_Capacity_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a LLM_Get_Max_Context_Capacity_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Max_Context_Capacity_Request} LLM_Get_Max_Context_Capacity_Request
     */
    LLM_Get_Max_Context_Capacity_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Max_Context_Capacity_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Max_Context_Capacity_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.LLM_Get_Max_Context_Capacity_Request();
    };

    /**
     * Creates a plain object from a LLM_Get_Max_Context_Capacity_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Request} message LLM_Get_Max_Context_Capacity_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Max_Context_Capacity_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this LLM_Get_Max_Context_Capacity_Request to JSON.
     * @function toJSON
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Max_Context_Capacity_Request.prototype.toJSON = function() {
        return LLM_Get_Max_Context_Capacity_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Max_Context_Capacity_Request
     * @function getTypeUrl
     * @memberof LLM_Get_Max_Context_Capacity_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Max_Context_Capacity_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Max_Context_Capacity_Request";
    };

    return LLM_Get_Max_Context_Capacity_Request;
})();

$root.LLM_Get_Max_Context_Capacity_Reply = (function() {

    /**
     * Properties of a LLM_Get_Max_Context_Capacity_Reply.
     * @typedef {Object} LLM_Get_Max_Context_Capacity_Reply.$Properties
     * @property {number|null} [status] LLM_Get_Max_Context_Capacity_Reply status
     * @property {number|null} [maxContextCapacity] LLM_Get_Max_Context_Capacity_Reply maxContextCapacity
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a LLM_Get_Max_Context_Capacity_Reply.
     * @exports ILLM_Get_Max_Context_Capacity_Reply
     * @interface ILLM_Get_Max_Context_Capacity_Reply
     * @augments LLM_Get_Max_Context_Capacity_Reply.$Properties
     * @deprecated Use LLM_Get_Max_Context_Capacity_Reply.$Properties instead.
     */

    /**
     * Shape of a LLM_Get_Max_Context_Capacity_Reply.
     * @typedef {LLM_Get_Max_Context_Capacity_Reply.$Properties} LLM_Get_Max_Context_Capacity_Reply.$Shape
     */

    /**
     * Constructs a new LLM_Get_Max_Context_Capacity_Reply.
     * @exports LLM_Get_Max_Context_Capacity_Reply
     * @classdesc Represents a LLM_Get_Max_Context_Capacity_Reply.
     * @constructor
     * @param {LLM_Get_Max_Context_Capacity_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var LLM_Get_Max_Context_Capacity_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * LLM_Get_Max_Context_Capacity_Reply status.
     * @member {number} status
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @instance
     */
    LLM_Get_Max_Context_Capacity_Reply.prototype.status = 0;

    /**
     * LLM_Get_Max_Context_Capacity_Reply maxContextCapacity.
     * @member {number} maxContextCapacity
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @instance
     */
    LLM_Get_Max_Context_Capacity_Reply.prototype.maxContextCapacity = 0;

    /**
     * Creates a new LLM_Get_Max_Context_Capacity_Reply instance using the specified properties.
     * @function create
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Reply.$Properties=} [properties] Properties to set
     * @returns {LLM_Get_Max_Context_Capacity_Reply} LLM_Get_Max_Context_Capacity_Reply instance
     * @type {{
     *   (properties: LLM_Get_Max_Context_Capacity_Reply.$Shape): LLM_Get_Max_Context_Capacity_Reply & LLM_Get_Max_Context_Capacity_Reply.$Shape;
     *   (properties?: LLM_Get_Max_Context_Capacity_Reply.$Properties): LLM_Get_Max_Context_Capacity_Reply;
     * }}
     */
    LLM_Get_Max_Context_Capacity_Reply.create = function(properties) {
        return new LLM_Get_Max_Context_Capacity_Reply(properties);
    };

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Reply message. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Reply.verify|verify} messages.
     * @function encode
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Reply.$Properties} message LLM_Get_Max_Context_Capacity_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Max_Context_Capacity_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.maxContextCapacity != null && $Object.hasOwnProperty.call(message, "maxContextCapacity"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maxContextCapacity);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified LLM_Get_Max_Context_Capacity_Reply message, length delimited. Does not implicitly {@link LLM_Get_Max_Context_Capacity_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Reply.$Properties} message LLM_Get_Max_Context_Capacity_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LLM_Get_Max_Context_Capacity_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LLM_Get_Max_Context_Capacity_Reply & LLM_Get_Max_Context_Capacity_Reply.$Shape} LLM_Get_Max_Context_Capacity_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Max_Context_Capacity_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.LLM_Get_Max_Context_Capacity_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.maxContextCapacity = value;
                    else
                        delete message.maxContextCapacity;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a LLM_Get_Max_Context_Capacity_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LLM_Get_Max_Context_Capacity_Reply & LLM_Get_Max_Context_Capacity_Reply.$Shape} LLM_Get_Max_Context_Capacity_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LLM_Get_Max_Context_Capacity_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LLM_Get_Max_Context_Capacity_Reply message.
     * @function verify
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LLM_Get_Max_Context_Capacity_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.maxContextCapacity != null && $Object.hasOwnProperty.call(message, "maxContextCapacity"))
            if (!$util.isInteger(message.maxContextCapacity))
                return "maxContextCapacity: integer expected";
        return null;
    };

    /**
     * Creates a LLM_Get_Max_Context_Capacity_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LLM_Get_Max_Context_Capacity_Reply} LLM_Get_Max_Context_Capacity_Reply
     */
    LLM_Get_Max_Context_Capacity_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.LLM_Get_Max_Context_Capacity_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".LLM_Get_Max_Context_Capacity_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.LLM_Get_Max_Context_Capacity_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        if (object.maxContextCapacity != null)
            if ($Number(object.maxContextCapacity) !== 0)
                message.maxContextCapacity = object.maxContextCapacity >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LLM_Get_Max_Context_Capacity_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {LLM_Get_Max_Context_Capacity_Reply} message LLM_Get_Max_Context_Capacity_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LLM_Get_Max_Context_Capacity_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.maxContextCapacity = 0;
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        if (message.maxContextCapacity != null && $Object.hasOwnProperty.call(message, "maxContextCapacity"))
            object.maxContextCapacity = message.maxContextCapacity;
        return object;
    };

    /**
     * Converts this LLM_Get_Max_Context_Capacity_Reply to JSON.
     * @function toJSON
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LLM_Get_Max_Context_Capacity_Reply.prototype.toJSON = function() {
        return LLM_Get_Max_Context_Capacity_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for LLM_Get_Max_Context_Capacity_Reply
     * @function getTypeUrl
     * @memberof LLM_Get_Max_Context_Capacity_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    LLM_Get_Max_Context_Capacity_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/LLM_Get_Max_Context_Capacity_Reply";
    };

    return LLM_Get_Max_Context_Capacity_Reply;
})();

$root.VLM_Create_Request = (function() {

    /**
     * Properties of a VLM_Create_Request.
     * @typedef {Object} VLM_Create_Request.$Properties
     * @property {string|null} [groupId] VLM_Create_Request groupId
     * @property {string|null} [hefPath] VLM_Create_Request hefPath
     * @property {Array.<HefChunkInfo.$Properties>|null} [chunksToTransfer] VLM_Create_Request chunksToTransfer
     * @property {boolean|null} [tokenizerOnHost] VLM_Create_Request tokenizerOnHost
     * @property {number|Long|null} [totalHefSize] VLM_Create_Request totalHefSize
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a VLM_Create_Request.
     * @exports IVLM_Create_Request
     * @interface IVLM_Create_Request
     * @augments VLM_Create_Request.$Properties
     * @deprecated Use VLM_Create_Request.$Properties instead.
     */

    /**
     * Shape of a VLM_Create_Request.
     * @typedef {VLM_Create_Request.$Properties} VLM_Create_Request.$Shape
     */

    /**
     * Constructs a new VLM_Create_Request.
     * @exports VLM_Create_Request
     * @classdesc Represents a VLM_Create_Request.
     * @constructor
     * @param {VLM_Create_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var VLM_Create_Request = function (properties) {
        this.chunksToTransfer = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * VLM_Create_Request groupId.
     * @member {string} groupId
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.groupId = "";

    /**
     * VLM_Create_Request hefPath.
     * @member {string} hefPath
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.hefPath = "";

    /**
     * VLM_Create_Request chunksToTransfer.
     * @member {Array.<HefChunkInfo.$Properties>} chunksToTransfer
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.chunksToTransfer = $util.emptyArray;

    /**
     * VLM_Create_Request tokenizerOnHost.
     * @member {boolean} tokenizerOnHost
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.tokenizerOnHost = false;

    /**
     * VLM_Create_Request totalHefSize.
     * @member {number|Long} totalHefSize
     * @memberof VLM_Create_Request
     * @instance
     */
    VLM_Create_Request.prototype.totalHefSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new VLM_Create_Request instance using the specified properties.
     * @function create
     * @memberof VLM_Create_Request
     * @static
     * @param {VLM_Create_Request.$Properties=} [properties] Properties to set
     * @returns {VLM_Create_Request} VLM_Create_Request instance
     * @type {{
     *   (properties: VLM_Create_Request.$Shape): VLM_Create_Request & VLM_Create_Request.$Shape;
     *   (properties?: VLM_Create_Request.$Properties): VLM_Create_Request;
     * }}
     */
    VLM_Create_Request.create = function(properties) {
        return new VLM_Create_Request(properties);
    };

    /**
     * Encodes the specified VLM_Create_Request message. Does not implicitly {@link VLM_Create_Request.verify|verify} messages.
     * @function encode
     * @memberof VLM_Create_Request
     * @static
     * @param {VLM_Create_Request.$Properties} message VLM_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Create_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        if (message.hefPath != null && $Object.hasOwnProperty.call(message, "hefPath"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.hefPath);
        if (message.chunksToTransfer != null && message.chunksToTransfer.length)
            for (var i = 0; i < message.chunksToTransfer.length; ++i)
                $root.HefChunkInfo.encode(message.chunksToTransfer[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
        if (message.tokenizerOnHost != null && $Object.hasOwnProperty.call(message, "tokenizerOnHost"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.tokenizerOnHost);
        if (message.totalHefSize != null && $Object.hasOwnProperty.call(message, "totalHefSize"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.totalHefSize);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified VLM_Create_Request message, length delimited. Does not implicitly {@link VLM_Create_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VLM_Create_Request
     * @static
     * @param {VLM_Create_Request.$Properties} message VLM_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Create_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a VLM_Create_Request message from the specified reader or buffer.
     * @function decode
     * @memberof VLM_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VLM_Create_Request & VLM_Create_Request.$Shape} VLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Create_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VLM_Create_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.groupId = value;
                    else
                        delete message.groupId;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.hefPath = value;
                    else
                        delete message.hefPath;
                    continue;
                }
            case 3: {
                    if (wireType !== 2)
                        break;
                    if (!(message.chunksToTransfer && message.chunksToTransfer.length))
                        message.chunksToTransfer = [];
                    message.chunksToTransfer.push($root.HefChunkInfo.decode(reader, reader.uint32(), $undefined, _depth + 1));
                    continue;
                }
            case 4: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.bool())
                        message.tokenizerOnHost = value;
                    else
                        delete message.tokenizerOnHost;
                    continue;
                }
            case 5: {
                    if (wireType !== 0)
                        break;
                    if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                        message.totalHefSize = value;
                    else
                        delete message.totalHefSize;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a VLM_Create_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VLM_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VLM_Create_Request & VLM_Create_Request.$Shape} VLM_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Create_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VLM_Create_Request message.
     * @function verify
     * @memberof VLM_Create_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VLM_Create_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            if (!$util.isString(message.groupId))
                return "groupId: string expected";
        if (message.hefPath != null && $Object.hasOwnProperty.call(message, "hefPath"))
            if (!$util.isString(message.hefPath))
                return "hefPath: string expected";
        if (message.chunksToTransfer != null && $Object.hasOwnProperty.call(message, "chunksToTransfer")) {
            if (!$Array.isArray(message.chunksToTransfer))
                return "chunksToTransfer: array expected";
            for (var i = 0; i < message.chunksToTransfer.length; ++i) {
                var error = $root.HefChunkInfo.verify(message.chunksToTransfer[i], _depth + 1);
                if (error)
                    return "chunksToTransfer." + error;
            }
        }
        if (message.tokenizerOnHost != null && $Object.hasOwnProperty.call(message, "tokenizerOnHost"))
            if (typeof message.tokenizerOnHost !== "boolean")
                return "tokenizerOnHost: boolean expected";
        if (message.totalHefSize != null && $Object.hasOwnProperty.call(message, "totalHefSize"))
            if (!$util.isInteger(message.totalHefSize) && !(message.totalHefSize && $util.isInteger(message.totalHefSize.low) && $util.isInteger(message.totalHefSize.high)))
                return "totalHefSize: integer|Long expected";
        return null;
    };

    /**
     * Creates a VLM_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VLM_Create_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VLM_Create_Request} VLM_Create_Request
     */
    VLM_Create_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.VLM_Create_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".VLM_Create_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.VLM_Create_Request();
        if (object.groupId != null)
            if (typeof object.groupId !== "string" || object.groupId.length)
                message.groupId = $String(object.groupId);
        if (object.hefPath != null)
            if (typeof object.hefPath !== "string" || object.hefPath.length)
                message.hefPath = $String(object.hefPath);
        if (object.chunksToTransfer) {
            if (!$Array.isArray(object.chunksToTransfer))
                throw $TypeError(".VLM_Create_Request.chunksToTransfer: array expected");
            message.chunksToTransfer = $Array(object.chunksToTransfer.length);
            for (var i = 0; i < object.chunksToTransfer.length; ++i) {
                if (!$util.isObject(object.chunksToTransfer[i]))
                    throw $TypeError(".VLM_Create_Request.chunksToTransfer: object expected");
                message.chunksToTransfer[i] = $root.HefChunkInfo.fromObject(object.chunksToTransfer[i], _depth + 1);
            }
        }
        if (object.tokenizerOnHost != null)
            if (object.tokenizerOnHost)
                message.tokenizerOnHost = $Boolean(object.tokenizerOnHost);
        if (object.totalHefSize != null)
            if (typeof object.totalHefSize === "object" ? object.totalHefSize.low || object.totalHefSize.high : $Number(object.totalHefSize) !== 0)
                if ($util.Long)
                    message.totalHefSize = $util.Long.fromValue(object.totalHefSize, true);
                else if (typeof object.totalHefSize === "string")
                    message.totalHefSize = $parseInt(object.totalHefSize, 10);
                else if (typeof object.totalHefSize === "number")
                    message.totalHefSize = object.totalHefSize;
                else if (typeof object.totalHefSize === "object")
                    message.totalHefSize = new $util.LongBits(object.totalHefSize.low >>> 0, object.totalHefSize.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a VLM_Create_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VLM_Create_Request
     * @static
     * @param {VLM_Create_Request} message VLM_Create_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VLM_Create_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.chunksToTransfer = [];
        if (options.defaults) {
            object.groupId = "";
            object.hefPath = "";
            object.tokenizerOnHost = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.totalHefSize = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
            } else
                object.totalHefSize = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
        }
        if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            object.groupId = message.groupId;
        if (message.hefPath != null && $Object.hasOwnProperty.call(message, "hefPath"))
            object.hefPath = message.hefPath;
        if (message.chunksToTransfer && message.chunksToTransfer.length) {
            object.chunksToTransfer = $Array(message.chunksToTransfer.length);
            for (var j = 0; j < message.chunksToTransfer.length; ++j)
                object.chunksToTransfer[j] = $root.HefChunkInfo.toObject(message.chunksToTransfer[j], options, _depth + 1);
        }
        if (message.tokenizerOnHost != null && $Object.hasOwnProperty.call(message, "tokenizerOnHost"))
            object.tokenizerOnHost = message.tokenizerOnHost;
        if (message.totalHefSize != null && $Object.hasOwnProperty.call(message, "totalHefSize"))
            if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                object.totalHefSize = typeof message.totalHefSize === "number" ? $BigInt(message.totalHefSize) : $util.Long.fromBits(message.totalHefSize.low >>> 0, message.totalHefSize.high >>> 0, true).toBigInt();
            else if (typeof message.totalHefSize === "number")
                object.totalHefSize = options.longs === $String ? $String(message.totalHefSize) : message.totalHefSize;
            else
                object.totalHefSize = options.longs === $String ? $util.Long.prototype.toString.call(message.totalHefSize) : options.longs === $Number ? new $util.LongBits(message.totalHefSize.low >>> 0, message.totalHefSize.high >>> 0).toNumber(true) : message.totalHefSize;
        return object;
    };

    /**
     * Converts this VLM_Create_Request to JSON.
     * @function toJSON
     * @memberof VLM_Create_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VLM_Create_Request.prototype.toJSON = function() {
        return VLM_Create_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for VLM_Create_Request
     * @function getTypeUrl
     * @memberof VLM_Create_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    VLM_Create_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/VLM_Create_Request";
    };

    return VLM_Create_Request;
})();

$root.FrameFormat = (function() {

    /**
     * Properties of a FrameFormat.
     * @typedef {Object} FrameFormat.$Properties
     * @property {number|null} [formatOrder] FrameFormat formatOrder
     * @property {number|null} [formatType] FrameFormat formatType
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a FrameFormat.
     * @exports IFrameFormat
     * @interface IFrameFormat
     * @augments FrameFormat.$Properties
     * @deprecated Use FrameFormat.$Properties instead.
     */

    /**
     * Shape of a FrameFormat.
     * @typedef {FrameFormat.$Properties} FrameFormat.$Shape
     */

    /**
     * Constructs a new FrameFormat.
     * @exports FrameFormat
     * @classdesc Represents a FrameFormat.
     * @constructor
     * @param {FrameFormat.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var FrameFormat = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * FrameFormat formatOrder.
     * @member {number} formatOrder
     * @memberof FrameFormat
     * @instance
     */
    FrameFormat.prototype.formatOrder = 0;

    /**
     * FrameFormat formatType.
     * @member {number} formatType
     * @memberof FrameFormat
     * @instance
     */
    FrameFormat.prototype.formatType = 0;

    /**
     * Creates a new FrameFormat instance using the specified properties.
     * @function create
     * @memberof FrameFormat
     * @static
     * @param {FrameFormat.$Properties=} [properties] Properties to set
     * @returns {FrameFormat} FrameFormat instance
     * @type {{
     *   (properties: FrameFormat.$Shape): FrameFormat & FrameFormat.$Shape;
     *   (properties?: FrameFormat.$Properties): FrameFormat;
     * }}
     */
    FrameFormat.create = function(properties) {
        return new FrameFormat(properties);
    };

    /**
     * Encodes the specified FrameFormat message. Does not implicitly {@link FrameFormat.verify|verify} messages.
     * @function encode
     * @memberof FrameFormat
     * @static
     * @param {FrameFormat.$Properties} message FrameFormat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameFormat.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.formatOrder != null && $Object.hasOwnProperty.call(message, "formatOrder"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.formatOrder);
        if (message.formatType != null && $Object.hasOwnProperty.call(message, "formatType"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.formatType);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified FrameFormat message, length delimited. Does not implicitly {@link FrameFormat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FrameFormat
     * @static
     * @param {FrameFormat.$Properties} message FrameFormat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameFormat.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a FrameFormat message from the specified reader or buffer.
     * @function decode
     * @memberof FrameFormat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FrameFormat & FrameFormat.$Shape} FrameFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameFormat.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.FrameFormat(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.formatOrder = value;
                    else
                        delete message.formatOrder;
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.formatType = value;
                    else
                        delete message.formatType;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a FrameFormat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FrameFormat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FrameFormat & FrameFormat.$Shape} FrameFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameFormat.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FrameFormat message.
     * @function verify
     * @memberof FrameFormat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FrameFormat.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.formatOrder != null && $Object.hasOwnProperty.call(message, "formatOrder"))
            if (!$util.isInteger(message.formatOrder))
                return "formatOrder: integer expected";
        if (message.formatType != null && $Object.hasOwnProperty.call(message, "formatType"))
            if (!$util.isInteger(message.formatType))
                return "formatType: integer expected";
        return null;
    };

    /**
     * Creates a FrameFormat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FrameFormat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FrameFormat} FrameFormat
     */
    FrameFormat.fromObject = function (object, _depth) {
        if (object instanceof $root.FrameFormat)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".FrameFormat: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.FrameFormat();
        if (object.formatOrder != null)
            if ($Number(object.formatOrder) !== 0)
                message.formatOrder = object.formatOrder >>> 0;
        if (object.formatType != null)
            if ($Number(object.formatType) !== 0)
                message.formatType = object.formatType >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a FrameFormat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FrameFormat
     * @static
     * @param {FrameFormat} message FrameFormat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FrameFormat.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.formatOrder = 0;
            object.formatType = 0;
        }
        if (message.formatOrder != null && $Object.hasOwnProperty.call(message, "formatOrder"))
            object.formatOrder = message.formatOrder;
        if (message.formatType != null && $Object.hasOwnProperty.call(message, "formatType"))
            object.formatType = message.formatType;
        return object;
    };

    /**
     * Converts this FrameFormat to JSON.
     * @function toJSON
     * @memberof FrameFormat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FrameFormat.prototype.toJSON = function() {
        return FrameFormat.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for FrameFormat
     * @function getTypeUrl
     * @memberof FrameFormat
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    FrameFormat.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/FrameFormat";
    };

    return FrameFormat;
})();

$root.FrameShape = (function() {

    /**
     * Properties of a FrameShape.
     * @typedef {Object} FrameShape.$Properties
     * @property {number|null} [height] FrameShape height
     * @property {number|null} [width] FrameShape width
     * @property {number|null} [features] FrameShape features
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a FrameShape.
     * @exports IFrameShape
     * @interface IFrameShape
     * @augments FrameShape.$Properties
     * @deprecated Use FrameShape.$Properties instead.
     */

    /**
     * Shape of a FrameShape.
     * @typedef {FrameShape.$Properties} FrameShape.$Shape
     */

    /**
     * Constructs a new FrameShape.
     * @exports FrameShape
     * @classdesc Represents a FrameShape.
     * @constructor
     * @param {FrameShape.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var FrameShape = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * FrameShape height.
     * @member {number} height
     * @memberof FrameShape
     * @instance
     */
    FrameShape.prototype.height = 0;

    /**
     * FrameShape width.
     * @member {number} width
     * @memberof FrameShape
     * @instance
     */
    FrameShape.prototype.width = 0;

    /**
     * FrameShape features.
     * @member {number} features
     * @memberof FrameShape
     * @instance
     */
    FrameShape.prototype.features = 0;

    /**
     * Creates a new FrameShape instance using the specified properties.
     * @function create
     * @memberof FrameShape
     * @static
     * @param {FrameShape.$Properties=} [properties] Properties to set
     * @returns {FrameShape} FrameShape instance
     * @type {{
     *   (properties: FrameShape.$Shape): FrameShape & FrameShape.$Shape;
     *   (properties?: FrameShape.$Properties): FrameShape;
     * }}
     */
    FrameShape.create = function(properties) {
        return new FrameShape(properties);
    };

    /**
     * Encodes the specified FrameShape message. Does not implicitly {@link FrameShape.verify|verify} messages.
     * @function encode
     * @memberof FrameShape
     * @static
     * @param {FrameShape.$Properties} message FrameShape message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameShape.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.height != null && $Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.height);
        if (message.width != null && $Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.width);
        if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.features);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified FrameShape message, length delimited. Does not implicitly {@link FrameShape.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FrameShape
     * @static
     * @param {FrameShape.$Properties} message FrameShape message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameShape.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a FrameShape message from the specified reader or buffer.
     * @function decode
     * @memberof FrameShape
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FrameShape & FrameShape.$Shape} FrameShape
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameShape.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.FrameShape(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.height = value;
                    else
                        delete message.height;
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.width = value;
                    else
                        delete message.width;
                    continue;
                }
            case 3: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.features = value;
                    else
                        delete message.features;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a FrameShape message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FrameShape
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FrameShape & FrameShape.$Shape} FrameShape
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameShape.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FrameShape message.
     * @function verify
     * @memberof FrameShape
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FrameShape.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.height != null && $Object.hasOwnProperty.call(message, "height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        if (message.width != null && $Object.hasOwnProperty.call(message, "width"))
            if (!$util.isInteger(message.width))
                return "width: integer expected";
        if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
            if (!$util.isInteger(message.features))
                return "features: integer expected";
        return null;
    };

    /**
     * Creates a FrameShape message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FrameShape
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FrameShape} FrameShape
     */
    FrameShape.fromObject = function (object, _depth) {
        if (object instanceof $root.FrameShape)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".FrameShape: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.FrameShape();
        if (object.height != null)
            if ($Number(object.height) !== 0)
                message.height = object.height >>> 0;
        if (object.width != null)
            if ($Number(object.width) !== 0)
                message.width = object.width >>> 0;
        if (object.features != null)
            if ($Number(object.features) !== 0)
                message.features = object.features >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a FrameShape message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FrameShape
     * @static
     * @param {FrameShape} message FrameShape
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FrameShape.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.height = 0;
            object.width = 0;
            object.features = 0;
        }
        if (message.height != null && $Object.hasOwnProperty.call(message, "height"))
            object.height = message.height;
        if (message.width != null && $Object.hasOwnProperty.call(message, "width"))
            object.width = message.width;
        if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
            object.features = message.features;
        return object;
    };

    /**
     * Converts this FrameShape to JSON.
     * @function toJSON
     * @memberof FrameShape
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FrameShape.prototype.toJSON = function() {
        return FrameShape.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for FrameShape
     * @function getTypeUrl
     * @memberof FrameShape
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    FrameShape.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/FrameShape";
    };

    return FrameShape;
})();

$root.VLM_Create_Reply = (function() {

    /**
     * Properties of a VLM_Create_Reply.
     * @typedef {Object} VLM_Create_Reply.$Properties
     * @property {number|null} [status] VLM_Create_Reply status
     * @property {FrameFormat.$Properties|null} [frameFormat] VLM_Create_Reply frameFormat
     * @property {FrameShape.$Properties|null} [frameShape] VLM_Create_Reply frameShape
     * @property {string|null} [promptTemplate] VLM_Create_Reply promptTemplate
     * @property {number|null} [embeddingFeatures] VLM_Create_Reply embeddingFeatures
     * @property {number|null} [imagePadTokenId] VLM_Create_Reply imagePadTokenId
     * @property {number|null} [videoPadTokenId] VLM_Create_Reply videoPadTokenId
     * @property {number|null} [embeddingsPerFrame] VLM_Create_Reply embeddingsPerFrame
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a VLM_Create_Reply.
     * @exports IVLM_Create_Reply
     * @interface IVLM_Create_Reply
     * @augments VLM_Create_Reply.$Properties
     * @deprecated Use VLM_Create_Reply.$Properties instead.
     */

    /**
     * Shape of a VLM_Create_Reply.
     * @typedef {VLM_Create_Reply.$Properties} VLM_Create_Reply.$Shape
     */

    /**
     * Constructs a new VLM_Create_Reply.
     * @exports VLM_Create_Reply
     * @classdesc Represents a VLM_Create_Reply.
     * @constructor
     * @param {VLM_Create_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var VLM_Create_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * VLM_Create_Reply status.
     * @member {number} status
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.status = 0;

    /**
     * VLM_Create_Reply frameFormat.
     * @member {FrameFormat.$Properties|null|undefined} frameFormat
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.frameFormat = null;

    /**
     * VLM_Create_Reply frameShape.
     * @member {FrameShape.$Properties|null|undefined} frameShape
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.frameShape = null;

    /**
     * VLM_Create_Reply promptTemplate.
     * @member {string} promptTemplate
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.promptTemplate = "";

    /**
     * VLM_Create_Reply embeddingFeatures.
     * @member {number} embeddingFeatures
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.embeddingFeatures = 0;

    /**
     * VLM_Create_Reply imagePadTokenId.
     * @member {number} imagePadTokenId
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.imagePadTokenId = 0;

    /**
     * VLM_Create_Reply videoPadTokenId.
     * @member {number} videoPadTokenId
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.videoPadTokenId = 0;

    /**
     * VLM_Create_Reply embeddingsPerFrame.
     * @member {number} embeddingsPerFrame
     * @memberof VLM_Create_Reply
     * @instance
     */
    VLM_Create_Reply.prototype.embeddingsPerFrame = 0;

    /**
     * Creates a new VLM_Create_Reply instance using the specified properties.
     * @function create
     * @memberof VLM_Create_Reply
     * @static
     * @param {VLM_Create_Reply.$Properties=} [properties] Properties to set
     * @returns {VLM_Create_Reply} VLM_Create_Reply instance
     * @type {{
     *   (properties: VLM_Create_Reply.$Shape): VLM_Create_Reply & VLM_Create_Reply.$Shape;
     *   (properties?: VLM_Create_Reply.$Properties): VLM_Create_Reply;
     * }}
     */
    VLM_Create_Reply.create = function(properties) {
        return new VLM_Create_Reply(properties);
    };

    /**
     * Encodes the specified VLM_Create_Reply message. Does not implicitly {@link VLM_Create_Reply.verify|verify} messages.
     * @function encode
     * @memberof VLM_Create_Reply
     * @static
     * @param {VLM_Create_Reply.$Properties} message VLM_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Create_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.frameFormat != null && $Object.hasOwnProperty.call(message, "frameFormat"))
            $root.FrameFormat.encode(message.frameFormat, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
        if (message.frameShape != null && $Object.hasOwnProperty.call(message, "frameShape"))
            $root.FrameShape.encode(message.frameShape, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
        if (message.promptTemplate != null && $Object.hasOwnProperty.call(message, "promptTemplate"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.promptTemplate);
        if (message.embeddingFeatures != null && $Object.hasOwnProperty.call(message, "embeddingFeatures"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.embeddingFeatures);
        if (message.imagePadTokenId != null && $Object.hasOwnProperty.call(message, "imagePadTokenId"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.imagePadTokenId);
        if (message.videoPadTokenId != null && $Object.hasOwnProperty.call(message, "videoPadTokenId"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.videoPadTokenId);
        if (message.embeddingsPerFrame != null && $Object.hasOwnProperty.call(message, "embeddingsPerFrame"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.embeddingsPerFrame);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified VLM_Create_Reply message, length delimited. Does not implicitly {@link VLM_Create_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VLM_Create_Reply
     * @static
     * @param {VLM_Create_Reply.$Properties} message VLM_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Create_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a VLM_Create_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof VLM_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VLM_Create_Reply & VLM_Create_Reply.$Shape} VLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Create_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VLM_Create_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    message.frameFormat = $root.FrameFormat.decode(reader, reader.uint32(), $undefined, _depth + 1, message.frameFormat);
                    continue;
                }
            case 3: {
                    if (wireType !== 2)
                        break;
                    message.frameShape = $root.FrameShape.decode(reader, reader.uint32(), $undefined, _depth + 1, message.frameShape);
                    continue;
                }
            case 4: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.promptTemplate = value;
                    else
                        delete message.promptTemplate;
                    continue;
                }
            case 5: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.embeddingFeatures = value;
                    else
                        delete message.embeddingFeatures;
                    continue;
                }
            case 6: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.imagePadTokenId = value;
                    else
                        delete message.imagePadTokenId;
                    continue;
                }
            case 7: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.videoPadTokenId = value;
                    else
                        delete message.videoPadTokenId;
                    continue;
                }
            case 8: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.embeddingsPerFrame = value;
                    else
                        delete message.embeddingsPerFrame;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a VLM_Create_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VLM_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VLM_Create_Reply & VLM_Create_Reply.$Shape} VLM_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Create_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VLM_Create_Reply message.
     * @function verify
     * @memberof VLM_Create_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VLM_Create_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.frameFormat != null && $Object.hasOwnProperty.call(message, "frameFormat")) {
            var error = $root.FrameFormat.verify(message.frameFormat, _depth + 1);
            if (error)
                return "frameFormat." + error;
        }
        if (message.frameShape != null && $Object.hasOwnProperty.call(message, "frameShape")) {
            var error = $root.FrameShape.verify(message.frameShape, _depth + 1);
            if (error)
                return "frameShape." + error;
        }
        if (message.promptTemplate != null && $Object.hasOwnProperty.call(message, "promptTemplate"))
            if (!$util.isString(message.promptTemplate))
                return "promptTemplate: string expected";
        if (message.embeddingFeatures != null && $Object.hasOwnProperty.call(message, "embeddingFeatures"))
            if (!$util.isInteger(message.embeddingFeatures))
                return "embeddingFeatures: integer expected";
        if (message.imagePadTokenId != null && $Object.hasOwnProperty.call(message, "imagePadTokenId"))
            if (!$util.isInteger(message.imagePadTokenId))
                return "imagePadTokenId: integer expected";
        if (message.videoPadTokenId != null && $Object.hasOwnProperty.call(message, "videoPadTokenId"))
            if (!$util.isInteger(message.videoPadTokenId))
                return "videoPadTokenId: integer expected";
        if (message.embeddingsPerFrame != null && $Object.hasOwnProperty.call(message, "embeddingsPerFrame"))
            if (!$util.isInteger(message.embeddingsPerFrame))
                return "embeddingsPerFrame: integer expected";
        return null;
    };

    /**
     * Creates a VLM_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VLM_Create_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VLM_Create_Reply} VLM_Create_Reply
     */
    VLM_Create_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.VLM_Create_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".VLM_Create_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.VLM_Create_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        if (object.frameFormat != null) {
            if (!$util.isObject(object.frameFormat))
                throw $TypeError(".VLM_Create_Reply.frameFormat: object expected");
            message.frameFormat = $root.FrameFormat.fromObject(object.frameFormat, _depth + 1);
        }
        if (object.frameShape != null) {
            if (!$util.isObject(object.frameShape))
                throw $TypeError(".VLM_Create_Reply.frameShape: object expected");
            message.frameShape = $root.FrameShape.fromObject(object.frameShape, _depth + 1);
        }
        if (object.promptTemplate != null)
            if (typeof object.promptTemplate !== "string" || object.promptTemplate.length)
                message.promptTemplate = $String(object.promptTemplate);
        if (object.embeddingFeatures != null)
            if ($Number(object.embeddingFeatures) !== 0)
                message.embeddingFeatures = object.embeddingFeatures >>> 0;
        if (object.imagePadTokenId != null)
            if ($Number(object.imagePadTokenId) !== 0)
                message.imagePadTokenId = object.imagePadTokenId >>> 0;
        if (object.videoPadTokenId != null)
            if ($Number(object.videoPadTokenId) !== 0)
                message.videoPadTokenId = object.videoPadTokenId >>> 0;
        if (object.embeddingsPerFrame != null)
            if ($Number(object.embeddingsPerFrame) !== 0)
                message.embeddingsPerFrame = object.embeddingsPerFrame >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a VLM_Create_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VLM_Create_Reply
     * @static
     * @param {VLM_Create_Reply} message VLM_Create_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VLM_Create_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.frameFormat = null;
            object.frameShape = null;
            object.promptTemplate = "";
            object.embeddingFeatures = 0;
            object.imagePadTokenId = 0;
            object.videoPadTokenId = 0;
            object.embeddingsPerFrame = 0;
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        if (message.frameFormat != null && $Object.hasOwnProperty.call(message, "frameFormat"))
            object.frameFormat = $root.FrameFormat.toObject(message.frameFormat, options, _depth + 1);
        if (message.frameShape != null && $Object.hasOwnProperty.call(message, "frameShape"))
            object.frameShape = $root.FrameShape.toObject(message.frameShape, options, _depth + 1);
        if (message.promptTemplate != null && $Object.hasOwnProperty.call(message, "promptTemplate"))
            object.promptTemplate = message.promptTemplate;
        if (message.embeddingFeatures != null && $Object.hasOwnProperty.call(message, "embeddingFeatures"))
            object.embeddingFeatures = message.embeddingFeatures;
        if (message.imagePadTokenId != null && $Object.hasOwnProperty.call(message, "imagePadTokenId"))
            object.imagePadTokenId = message.imagePadTokenId;
        if (message.videoPadTokenId != null && $Object.hasOwnProperty.call(message, "videoPadTokenId"))
            object.videoPadTokenId = message.videoPadTokenId;
        if (message.embeddingsPerFrame != null && $Object.hasOwnProperty.call(message, "embeddingsPerFrame"))
            object.embeddingsPerFrame = message.embeddingsPerFrame;
        return object;
    };

    /**
     * Converts this VLM_Create_Reply to JSON.
     * @function toJSON
     * @memberof VLM_Create_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VLM_Create_Reply.prototype.toJSON = function() {
        return VLM_Create_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for VLM_Create_Reply
     * @function getTypeUrl
     * @memberof VLM_Create_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    VLM_Create_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/VLM_Create_Reply";
    };

    return VLM_Create_Reply;
})();

$root.VLM_Generator_Generate_Request = (function() {

    /**
     * Properties of a VLM_Generator_Generate_Request.
     * @typedef {Object} VLM_Generator_Generate_Request.$Properties
     * @property {number|null} [numberOfFrames] VLM_Generator_Generate_Request numberOfFrames
     * @property {Array.<number>|null} [videoFramesCountPerVideo] VLM_Generator_Generate_Request videoFramesCountPerVideo
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a VLM_Generator_Generate_Request.
     * @exports IVLM_Generator_Generate_Request
     * @interface IVLM_Generator_Generate_Request
     * @augments VLM_Generator_Generate_Request.$Properties
     * @deprecated Use VLM_Generator_Generate_Request.$Properties instead.
     */

    /**
     * Shape of a VLM_Generator_Generate_Request.
     * @typedef {VLM_Generator_Generate_Request.$Properties} VLM_Generator_Generate_Request.$Shape
     */

    /**
     * Constructs a new VLM_Generator_Generate_Request.
     * @exports VLM_Generator_Generate_Request
     * @classdesc Represents a VLM_Generator_Generate_Request.
     * @constructor
     * @param {VLM_Generator_Generate_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var VLM_Generator_Generate_Request = function (properties) {
        this.videoFramesCountPerVideo = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * VLM_Generator_Generate_Request numberOfFrames.
     * @member {number} numberOfFrames
     * @memberof VLM_Generator_Generate_Request
     * @instance
     */
    VLM_Generator_Generate_Request.prototype.numberOfFrames = 0;

    /**
     * VLM_Generator_Generate_Request videoFramesCountPerVideo.
     * @member {Array.<number>} videoFramesCountPerVideo
     * @memberof VLM_Generator_Generate_Request
     * @instance
     */
    VLM_Generator_Generate_Request.prototype.videoFramesCountPerVideo = $util.emptyArray;

    /**
     * Creates a new VLM_Generator_Generate_Request instance using the specified properties.
     * @function create
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {VLM_Generator_Generate_Request.$Properties=} [properties] Properties to set
     * @returns {VLM_Generator_Generate_Request} VLM_Generator_Generate_Request instance
     * @type {{
     *   (properties: VLM_Generator_Generate_Request.$Shape): VLM_Generator_Generate_Request & VLM_Generator_Generate_Request.$Shape;
     *   (properties?: VLM_Generator_Generate_Request.$Properties): VLM_Generator_Generate_Request;
     * }}
     */
    VLM_Generator_Generate_Request.create = function(properties) {
        return new VLM_Generator_Generate_Request(properties);
    };

    /**
     * Encodes the specified VLM_Generator_Generate_Request message. Does not implicitly {@link VLM_Generator_Generate_Request.verify|verify} messages.
     * @function encode
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {VLM_Generator_Generate_Request.$Properties} message VLM_Generator_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Generator_Generate_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.numberOfFrames != null && $Object.hasOwnProperty.call(message, "numberOfFrames"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.numberOfFrames);
        if (message.videoFramesCountPerVideo != null && message.videoFramesCountPerVideo.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.videoFramesCountPerVideo.length; ++i)
                writer.uint32(message.videoFramesCountPerVideo[i]);
            writer.ldelim();
        }
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified VLM_Generator_Generate_Request message, length delimited. Does not implicitly {@link VLM_Generator_Generate_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {VLM_Generator_Generate_Request.$Properties} message VLM_Generator_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Generator_Generate_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a VLM_Generator_Generate_Request message from the specified reader or buffer.
     * @function decode
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VLM_Generator_Generate_Request & VLM_Generator_Generate_Request.$Shape} VLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Generator_Generate_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VLM_Generator_Generate_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.numberOfFrames = value;
                    else
                        delete message.numberOfFrames;
                    continue;
                }
            case 3: {
                    if (wireType === 2) {
                        if (!(message.videoFramesCountPerVideo && message.videoFramesCountPerVideo.length))
                            message.videoFramesCountPerVideo = [];
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.videoFramesCountPerVideo.push(reader.uint32());
                        continue;
                    }
                    if (wireType !== 0)
                        break;
                    if (!(message.videoFramesCountPerVideo && message.videoFramesCountPerVideo.length))
                        message.videoFramesCountPerVideo = [];
                    message.videoFramesCountPerVideo.push(reader.uint32());
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a VLM_Generator_Generate_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VLM_Generator_Generate_Request & VLM_Generator_Generate_Request.$Shape} VLM_Generator_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Generator_Generate_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VLM_Generator_Generate_Request message.
     * @function verify
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VLM_Generator_Generate_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.numberOfFrames != null && $Object.hasOwnProperty.call(message, "numberOfFrames"))
            if (!$util.isInteger(message.numberOfFrames))
                return "numberOfFrames: integer expected";
        if (message.videoFramesCountPerVideo != null && $Object.hasOwnProperty.call(message, "videoFramesCountPerVideo")) {
            if (!$Array.isArray(message.videoFramesCountPerVideo))
                return "videoFramesCountPerVideo: array expected";
            for (var i = 0; i < message.videoFramesCountPerVideo.length; ++i)
                if (!$util.isInteger(message.videoFramesCountPerVideo[i]))
                    return "videoFramesCountPerVideo: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a VLM_Generator_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VLM_Generator_Generate_Request} VLM_Generator_Generate_Request
     */
    VLM_Generator_Generate_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.VLM_Generator_Generate_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".VLM_Generator_Generate_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.VLM_Generator_Generate_Request();
        if (object.numberOfFrames != null)
            if ($Number(object.numberOfFrames) !== 0)
                message.numberOfFrames = object.numberOfFrames >>> 0;
        if (object.videoFramesCountPerVideo) {
            if (!$Array.isArray(object.videoFramesCountPerVideo))
                throw $TypeError(".VLM_Generator_Generate_Request.videoFramesCountPerVideo: array expected");
            message.videoFramesCountPerVideo = $Array(object.videoFramesCountPerVideo.length);
            for (var i = 0; i < object.videoFramesCountPerVideo.length; ++i)
                message.videoFramesCountPerVideo[i] = object.videoFramesCountPerVideo[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a VLM_Generator_Generate_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {VLM_Generator_Generate_Request} message VLM_Generator_Generate_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VLM_Generator_Generate_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.videoFramesCountPerVideo = [];
        if (options.defaults)
            object.numberOfFrames = 0;
        if (message.numberOfFrames != null && $Object.hasOwnProperty.call(message, "numberOfFrames"))
            object.numberOfFrames = message.numberOfFrames;
        if (message.videoFramesCountPerVideo && message.videoFramesCountPerVideo.length) {
            object.videoFramesCountPerVideo = $Array(message.videoFramesCountPerVideo.length);
            for (var j = 0; j < message.videoFramesCountPerVideo.length; ++j)
                object.videoFramesCountPerVideo[j] = message.videoFramesCountPerVideo[j];
        }
        return object;
    };

    /**
     * Converts this VLM_Generator_Generate_Request to JSON.
     * @function toJSON
     * @memberof VLM_Generator_Generate_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VLM_Generator_Generate_Request.prototype.toJSON = function() {
        return VLM_Generator_Generate_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for VLM_Generator_Generate_Request
     * @function getTypeUrl
     * @memberof VLM_Generator_Generate_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    VLM_Generator_Generate_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/VLM_Generator_Generate_Request";
    };

    return VLM_Generator_Generate_Request;
})();

$root.VLM_Generator_Generate_Reply = (function() {

    /**
     * Properties of a VLM_Generator_Generate_Reply.
     * @typedef {Object} VLM_Generator_Generate_Reply.$Properties
     * @property {number|null} [status] VLM_Generator_Generate_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a VLM_Generator_Generate_Reply.
     * @exports IVLM_Generator_Generate_Reply
     * @interface IVLM_Generator_Generate_Reply
     * @augments VLM_Generator_Generate_Reply.$Properties
     * @deprecated Use VLM_Generator_Generate_Reply.$Properties instead.
     */

    /**
     * Shape of a VLM_Generator_Generate_Reply.
     * @typedef {VLM_Generator_Generate_Reply.$Properties} VLM_Generator_Generate_Reply.$Shape
     */

    /**
     * Constructs a new VLM_Generator_Generate_Reply.
     * @exports VLM_Generator_Generate_Reply
     * @classdesc Represents a VLM_Generator_Generate_Reply.
     * @constructor
     * @param {VLM_Generator_Generate_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var VLM_Generator_Generate_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * VLM_Generator_Generate_Reply status.
     * @member {number} status
     * @memberof VLM_Generator_Generate_Reply
     * @instance
     */
    VLM_Generator_Generate_Reply.prototype.status = 0;

    /**
     * Creates a new VLM_Generator_Generate_Reply instance using the specified properties.
     * @function create
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {VLM_Generator_Generate_Reply.$Properties=} [properties] Properties to set
     * @returns {VLM_Generator_Generate_Reply} VLM_Generator_Generate_Reply instance
     * @type {{
     *   (properties: VLM_Generator_Generate_Reply.$Shape): VLM_Generator_Generate_Reply & VLM_Generator_Generate_Reply.$Shape;
     *   (properties?: VLM_Generator_Generate_Reply.$Properties): VLM_Generator_Generate_Reply;
     * }}
     */
    VLM_Generator_Generate_Reply.create = function(properties) {
        return new VLM_Generator_Generate_Reply(properties);
    };

    /**
     * Encodes the specified VLM_Generator_Generate_Reply message. Does not implicitly {@link VLM_Generator_Generate_Reply.verify|verify} messages.
     * @function encode
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {VLM_Generator_Generate_Reply.$Properties} message VLM_Generator_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Generator_Generate_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified VLM_Generator_Generate_Reply message, length delimited. Does not implicitly {@link VLM_Generator_Generate_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {VLM_Generator_Generate_Reply.$Properties} message VLM_Generator_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VLM_Generator_Generate_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a VLM_Generator_Generate_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VLM_Generator_Generate_Reply & VLM_Generator_Generate_Reply.$Shape} VLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Generator_Generate_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VLM_Generator_Generate_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a VLM_Generator_Generate_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VLM_Generator_Generate_Reply & VLM_Generator_Generate_Reply.$Shape} VLM_Generator_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VLM_Generator_Generate_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VLM_Generator_Generate_Reply message.
     * @function verify
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VLM_Generator_Generate_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a VLM_Generator_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VLM_Generator_Generate_Reply} VLM_Generator_Generate_Reply
     */
    VLM_Generator_Generate_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.VLM_Generator_Generate_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".VLM_Generator_Generate_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.VLM_Generator_Generate_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a VLM_Generator_Generate_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {VLM_Generator_Generate_Reply} message VLM_Generator_Generate_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VLM_Generator_Generate_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this VLM_Generator_Generate_Reply to JSON.
     * @function toJSON
     * @memberof VLM_Generator_Generate_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VLM_Generator_Generate_Reply.prototype.toJSON = function() {
        return VLM_Generator_Generate_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for VLM_Generator_Generate_Reply
     * @function getTypeUrl
     * @memberof VLM_Generator_Generate_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    VLM_Generator_Generate_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/VLM_Generator_Generate_Reply";
    };

    return VLM_Generator_Generate_Reply;
})();

$root.GenAI_Check_Hef_Exists_Request = (function() {

    /**
     * Properties of a GenAI_Check_Hef_Exists_Request.
     * @typedef {Object} GenAI_Check_Hef_Exists_Request.$Properties
     * @property {string|null} [hefPath] GenAI_Check_Hef_Exists_Request hefPath
     * @property {string|null} [hash] GenAI_Check_Hef_Exists_Request hash
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a GenAI_Check_Hef_Exists_Request.
     * @exports IGenAI_Check_Hef_Exists_Request
     * @interface IGenAI_Check_Hef_Exists_Request
     * @augments GenAI_Check_Hef_Exists_Request.$Properties
     * @deprecated Use GenAI_Check_Hef_Exists_Request.$Properties instead.
     */

    /**
     * Shape of a GenAI_Check_Hef_Exists_Request.
     * @typedef {GenAI_Check_Hef_Exists_Request.$Properties} GenAI_Check_Hef_Exists_Request.$Shape
     */

    /**
     * Constructs a new GenAI_Check_Hef_Exists_Request.
     * @exports GenAI_Check_Hef_Exists_Request
     * @classdesc Represents a GenAI_Check_Hef_Exists_Request.
     * @constructor
     * @param {GenAI_Check_Hef_Exists_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var GenAI_Check_Hef_Exists_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * GenAI_Check_Hef_Exists_Request hefPath.
     * @member {string} hefPath
     * @memberof GenAI_Check_Hef_Exists_Request
     * @instance
     */
    GenAI_Check_Hef_Exists_Request.prototype.hefPath = "";

    /**
     * GenAI_Check_Hef_Exists_Request hash.
     * @member {string} hash
     * @memberof GenAI_Check_Hef_Exists_Request
     * @instance
     */
    GenAI_Check_Hef_Exists_Request.prototype.hash = "";

    /**
     * Creates a new GenAI_Check_Hef_Exists_Request instance using the specified properties.
     * @function create
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {GenAI_Check_Hef_Exists_Request.$Properties=} [properties] Properties to set
     * @returns {GenAI_Check_Hef_Exists_Request} GenAI_Check_Hef_Exists_Request instance
     * @type {{
     *   (properties: GenAI_Check_Hef_Exists_Request.$Shape): GenAI_Check_Hef_Exists_Request & GenAI_Check_Hef_Exists_Request.$Shape;
     *   (properties?: GenAI_Check_Hef_Exists_Request.$Properties): GenAI_Check_Hef_Exists_Request;
     * }}
     */
    GenAI_Check_Hef_Exists_Request.create = function(properties) {
        return new GenAI_Check_Hef_Exists_Request(properties);
    };

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Request message. Does not implicitly {@link GenAI_Check_Hef_Exists_Request.verify|verify} messages.
     * @function encode
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {GenAI_Check_Hef_Exists_Request.$Properties} message GenAI_Check_Hef_Exists_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAI_Check_Hef_Exists_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.hefPath != null && $Object.hasOwnProperty.call(message, "hefPath"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hefPath);
        if (message.hash != null && $Object.hasOwnProperty.call(message, "hash"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.hash);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Request message, length delimited. Does not implicitly {@link GenAI_Check_Hef_Exists_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {GenAI_Check_Hef_Exists_Request.$Properties} message GenAI_Check_Hef_Exists_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAI_Check_Hef_Exists_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a GenAI_Check_Hef_Exists_Request message from the specified reader or buffer.
     * @function decode
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenAI_Check_Hef_Exists_Request & GenAI_Check_Hef_Exists_Request.$Shape} GenAI_Check_Hef_Exists_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAI_Check_Hef_Exists_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GenAI_Check_Hef_Exists_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.hefPath = value;
                    else
                        delete message.hefPath;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.hash = value;
                    else
                        delete message.hash;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a GenAI_Check_Hef_Exists_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenAI_Check_Hef_Exists_Request & GenAI_Check_Hef_Exists_Request.$Shape} GenAI_Check_Hef_Exists_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAI_Check_Hef_Exists_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenAI_Check_Hef_Exists_Request message.
     * @function verify
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenAI_Check_Hef_Exists_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.hefPath != null && $Object.hasOwnProperty.call(message, "hefPath"))
            if (!$util.isString(message.hefPath))
                return "hefPath: string expected";
        if (message.hash != null && $Object.hasOwnProperty.call(message, "hash"))
            if (!$util.isString(message.hash))
                return "hash: string expected";
        return null;
    };

    /**
     * Creates a GenAI_Check_Hef_Exists_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenAI_Check_Hef_Exists_Request} GenAI_Check_Hef_Exists_Request
     */
    GenAI_Check_Hef_Exists_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.GenAI_Check_Hef_Exists_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".GenAI_Check_Hef_Exists_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.GenAI_Check_Hef_Exists_Request();
        if (object.hefPath != null)
            if (typeof object.hefPath !== "string" || object.hefPath.length)
                message.hefPath = $String(object.hefPath);
        if (object.hash != null)
            if (typeof object.hash !== "string" || object.hash.length)
                message.hash = $String(object.hash);
        return message;
    };

    /**
     * Creates a plain object from a GenAI_Check_Hef_Exists_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {GenAI_Check_Hef_Exists_Request} message GenAI_Check_Hef_Exists_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenAI_Check_Hef_Exists_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.hefPath = "";
            object.hash = "";
        }
        if (message.hefPath != null && $Object.hasOwnProperty.call(message, "hefPath"))
            object.hefPath = message.hefPath;
        if (message.hash != null && $Object.hasOwnProperty.call(message, "hash"))
            object.hash = message.hash;
        return object;
    };

    /**
     * Converts this GenAI_Check_Hef_Exists_Request to JSON.
     * @function toJSON
     * @memberof GenAI_Check_Hef_Exists_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenAI_Check_Hef_Exists_Request.prototype.toJSON = function() {
        return GenAI_Check_Hef_Exists_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for GenAI_Check_Hef_Exists_Request
     * @function getTypeUrl
     * @memberof GenAI_Check_Hef_Exists_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    GenAI_Check_Hef_Exists_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/GenAI_Check_Hef_Exists_Request";
    };

    return GenAI_Check_Hef_Exists_Request;
})();

$root.GenAI_Check_Hef_Exists_Reply = (function() {

    /**
     * Properties of a GenAI_Check_Hef_Exists_Reply.
     * @typedef {Object} GenAI_Check_Hef_Exists_Reply.$Properties
     * @property {number|null} [status] GenAI_Check_Hef_Exists_Reply status
     * @property {boolean|null} [hefExists] GenAI_Check_Hef_Exists_Reply hefExists
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a GenAI_Check_Hef_Exists_Reply.
     * @exports IGenAI_Check_Hef_Exists_Reply
     * @interface IGenAI_Check_Hef_Exists_Reply
     * @augments GenAI_Check_Hef_Exists_Reply.$Properties
     * @deprecated Use GenAI_Check_Hef_Exists_Reply.$Properties instead.
     */

    /**
     * Shape of a GenAI_Check_Hef_Exists_Reply.
     * @typedef {GenAI_Check_Hef_Exists_Reply.$Properties} GenAI_Check_Hef_Exists_Reply.$Shape
     */

    /**
     * Constructs a new GenAI_Check_Hef_Exists_Reply.
     * @exports GenAI_Check_Hef_Exists_Reply
     * @classdesc Represents a GenAI_Check_Hef_Exists_Reply.
     * @constructor
     * @param {GenAI_Check_Hef_Exists_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var GenAI_Check_Hef_Exists_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * GenAI_Check_Hef_Exists_Reply status.
     * @member {number} status
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @instance
     */
    GenAI_Check_Hef_Exists_Reply.prototype.status = 0;

    /**
     * GenAI_Check_Hef_Exists_Reply hefExists.
     * @member {boolean} hefExists
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @instance
     */
    GenAI_Check_Hef_Exists_Reply.prototype.hefExists = false;

    /**
     * Creates a new GenAI_Check_Hef_Exists_Reply instance using the specified properties.
     * @function create
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {GenAI_Check_Hef_Exists_Reply.$Properties=} [properties] Properties to set
     * @returns {GenAI_Check_Hef_Exists_Reply} GenAI_Check_Hef_Exists_Reply instance
     * @type {{
     *   (properties: GenAI_Check_Hef_Exists_Reply.$Shape): GenAI_Check_Hef_Exists_Reply & GenAI_Check_Hef_Exists_Reply.$Shape;
     *   (properties?: GenAI_Check_Hef_Exists_Reply.$Properties): GenAI_Check_Hef_Exists_Reply;
     * }}
     */
    GenAI_Check_Hef_Exists_Reply.create = function(properties) {
        return new GenAI_Check_Hef_Exists_Reply(properties);
    };

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Reply message. Does not implicitly {@link GenAI_Check_Hef_Exists_Reply.verify|verify} messages.
     * @function encode
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {GenAI_Check_Hef_Exists_Reply.$Properties} message GenAI_Check_Hef_Exists_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAI_Check_Hef_Exists_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.hefExists != null && $Object.hasOwnProperty.call(message, "hefExists"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hefExists);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified GenAI_Check_Hef_Exists_Reply message, length delimited. Does not implicitly {@link GenAI_Check_Hef_Exists_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {GenAI_Check_Hef_Exists_Reply.$Properties} message GenAI_Check_Hef_Exists_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenAI_Check_Hef_Exists_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a GenAI_Check_Hef_Exists_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenAI_Check_Hef_Exists_Reply & GenAI_Check_Hef_Exists_Reply.$Shape} GenAI_Check_Hef_Exists_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAI_Check_Hef_Exists_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.GenAI_Check_Hef_Exists_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.bool())
                        message.hefExists = value;
                    else
                        delete message.hefExists;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a GenAI_Check_Hef_Exists_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenAI_Check_Hef_Exists_Reply & GenAI_Check_Hef_Exists_Reply.$Shape} GenAI_Check_Hef_Exists_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenAI_Check_Hef_Exists_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenAI_Check_Hef_Exists_Reply message.
     * @function verify
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenAI_Check_Hef_Exists_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.hefExists != null && $Object.hasOwnProperty.call(message, "hefExists"))
            if (typeof message.hefExists !== "boolean")
                return "hefExists: boolean expected";
        return null;
    };

    /**
     * Creates a GenAI_Check_Hef_Exists_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenAI_Check_Hef_Exists_Reply} GenAI_Check_Hef_Exists_Reply
     */
    GenAI_Check_Hef_Exists_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.GenAI_Check_Hef_Exists_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".GenAI_Check_Hef_Exists_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.GenAI_Check_Hef_Exists_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        if (object.hefExists != null)
            if (object.hefExists)
                message.hefExists = $Boolean(object.hefExists);
        return message;
    };

    /**
     * Creates a plain object from a GenAI_Check_Hef_Exists_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {GenAI_Check_Hef_Exists_Reply} message GenAI_Check_Hef_Exists_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenAI_Check_Hef_Exists_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.hefExists = false;
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        if (message.hefExists != null && $Object.hasOwnProperty.call(message, "hefExists"))
            object.hefExists = message.hefExists;
        return object;
    };

    /**
     * Converts this GenAI_Check_Hef_Exists_Reply to JSON.
     * @function toJSON
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenAI_Check_Hef_Exists_Reply.prototype.toJSON = function() {
        return GenAI_Check_Hef_Exists_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for GenAI_Check_Hef_Exists_Reply
     * @function getTypeUrl
     * @memberof GenAI_Check_Hef_Exists_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    GenAI_Check_Hef_Exists_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/GenAI_Check_Hef_Exists_Reply";
    };

    return GenAI_Check_Hef_Exists_Reply;
})();

$root.Speech2Text_Create_Request = (function() {

    /**
     * Properties of a Speech2Text_Create_Request.
     * @typedef {Object} Speech2Text_Create_Request.$Properties
     * @property {string|null} [groupId] Speech2Text_Create_Request groupId
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a Speech2Text_Create_Request.
     * @exports ISpeech2Text_Create_Request
     * @interface ISpeech2Text_Create_Request
     * @augments Speech2Text_Create_Request.$Properties
     * @deprecated Use Speech2Text_Create_Request.$Properties instead.
     */

    /**
     * Shape of a Speech2Text_Create_Request.
     * @typedef {Speech2Text_Create_Request.$Properties} Speech2Text_Create_Request.$Shape
     */

    /**
     * Constructs a new Speech2Text_Create_Request.
     * @exports Speech2Text_Create_Request
     * @classdesc Represents a Speech2Text_Create_Request.
     * @constructor
     * @param {Speech2Text_Create_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Speech2Text_Create_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Speech2Text_Create_Request groupId.
     * @member {string} groupId
     * @memberof Speech2Text_Create_Request
     * @instance
     */
    Speech2Text_Create_Request.prototype.groupId = "";

    /**
     * Creates a new Speech2Text_Create_Request instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {Speech2Text_Create_Request.$Properties=} [properties] Properties to set
     * @returns {Speech2Text_Create_Request} Speech2Text_Create_Request instance
     * @type {{
     *   (properties: Speech2Text_Create_Request.$Shape): Speech2Text_Create_Request & Speech2Text_Create_Request.$Shape;
     *   (properties?: Speech2Text_Create_Request.$Properties): Speech2Text_Create_Request;
     * }}
     */
    Speech2Text_Create_Request.create = function(properties) {
        return new Speech2Text_Create_Request(properties);
    };

    /**
     * Encodes the specified Speech2Text_Create_Request message. Does not implicitly {@link Speech2Text_Create_Request.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {Speech2Text_Create_Request.$Properties} message Speech2Text_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Create_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupId);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Create_Request message, length delimited. Does not implicitly {@link Speech2Text_Create_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {Speech2Text_Create_Request.$Properties} message Speech2Text_Create_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Create_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Create_Request message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Create_Request & Speech2Text_Create_Request.$Shape} Speech2Text_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Create_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Speech2Text_Create_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.groupId = value;
                    else
                        delete message.groupId;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a Speech2Text_Create_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Create_Request & Speech2Text_Create_Request.$Shape} Speech2Text_Create_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Create_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Create_Request message.
     * @function verify
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Create_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            if (!$util.isString(message.groupId))
                return "groupId: string expected";
        return null;
    };

    /**
     * Creates a Speech2Text_Create_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Create_Request} Speech2Text_Create_Request
     */
    Speech2Text_Create_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.Speech2Text_Create_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Speech2Text_Create_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.Speech2Text_Create_Request();
        if (object.groupId != null)
            if (typeof object.groupId !== "string" || object.groupId.length)
                message.groupId = $String(object.groupId);
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Create_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {Speech2Text_Create_Request} message Speech2Text_Create_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Create_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.groupId = "";
        if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            object.groupId = message.groupId;
        return object;
    };

    /**
     * Converts this Speech2Text_Create_Request to JSON.
     * @function toJSON
     * @memberof Speech2Text_Create_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Create_Request.prototype.toJSON = function() {
        return Speech2Text_Create_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Speech2Text_Create_Request
     * @function getTypeUrl
     * @memberof Speech2Text_Create_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Speech2Text_Create_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Speech2Text_Create_Request";
    };

    return Speech2Text_Create_Request;
})();

$root.Speech2Text_Create_Reply = (function() {

    /**
     * Properties of a Speech2Text_Create_Reply.
     * @typedef {Object} Speech2Text_Create_Reply.$Properties
     * @property {number|null} [status] Speech2Text_Create_Reply status
     * @property {Speech2TextGeneratorParams.$Properties|null} [generatorParams] Speech2Text_Create_Reply generatorParams
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a Speech2Text_Create_Reply.
     * @exports ISpeech2Text_Create_Reply
     * @interface ISpeech2Text_Create_Reply
     * @augments Speech2Text_Create_Reply.$Properties
     * @deprecated Use Speech2Text_Create_Reply.$Properties instead.
     */

    /**
     * Shape of a Speech2Text_Create_Reply.
     * @typedef {Speech2Text_Create_Reply.$Properties} Speech2Text_Create_Reply.$Shape
     */

    /**
     * Constructs a new Speech2Text_Create_Reply.
     * @exports Speech2Text_Create_Reply
     * @classdesc Represents a Speech2Text_Create_Reply.
     * @constructor
     * @param {Speech2Text_Create_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Speech2Text_Create_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Speech2Text_Create_Reply status.
     * @member {number} status
     * @memberof Speech2Text_Create_Reply
     * @instance
     */
    Speech2Text_Create_Reply.prototype.status = 0;

    /**
     * Speech2Text_Create_Reply generatorParams.
     * @member {Speech2TextGeneratorParams.$Properties|null|undefined} generatorParams
     * @memberof Speech2Text_Create_Reply
     * @instance
     */
    Speech2Text_Create_Reply.prototype.generatorParams = null;

    /**
     * Creates a new Speech2Text_Create_Reply instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {Speech2Text_Create_Reply.$Properties=} [properties] Properties to set
     * @returns {Speech2Text_Create_Reply} Speech2Text_Create_Reply instance
     * @type {{
     *   (properties: Speech2Text_Create_Reply.$Shape): Speech2Text_Create_Reply & Speech2Text_Create_Reply.$Shape;
     *   (properties?: Speech2Text_Create_Reply.$Properties): Speech2Text_Create_Reply;
     * }}
     */
    Speech2Text_Create_Reply.create = function(properties) {
        return new Speech2Text_Create_Reply(properties);
    };

    /**
     * Encodes the specified Speech2Text_Create_Reply message. Does not implicitly {@link Speech2Text_Create_Reply.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {Speech2Text_Create_Reply.$Properties} message Speech2Text_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Create_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams"))
            $root.Speech2TextGeneratorParams.encode(message.generatorParams, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Create_Reply message, length delimited. Does not implicitly {@link Speech2Text_Create_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {Speech2Text_Create_Reply.$Properties} message Speech2Text_Create_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Create_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Create_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Create_Reply & Speech2Text_Create_Reply.$Shape} Speech2Text_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Create_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Speech2Text_Create_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    message.generatorParams = $root.Speech2TextGeneratorParams.decode(reader, reader.uint32(), $undefined, _depth + 1, message.generatorParams);
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a Speech2Text_Create_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Create_Reply & Speech2Text_Create_Reply.$Shape} Speech2Text_Create_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Create_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Create_Reply message.
     * @function verify
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Create_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams")) {
            var error = $root.Speech2TextGeneratorParams.verify(message.generatorParams, _depth + 1);
            if (error)
                return "generatorParams." + error;
        }
        return null;
    };

    /**
     * Creates a Speech2Text_Create_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Create_Reply} Speech2Text_Create_Reply
     */
    Speech2Text_Create_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.Speech2Text_Create_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Speech2Text_Create_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.Speech2Text_Create_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        if (object.generatorParams != null) {
            if (!$util.isObject(object.generatorParams))
                throw $TypeError(".Speech2Text_Create_Reply.generatorParams: object expected");
            message.generatorParams = $root.Speech2TextGeneratorParams.fromObject(object.generatorParams, _depth + 1);
        }
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Create_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {Speech2Text_Create_Reply} message Speech2Text_Create_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Create_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.status = 0;
            object.generatorParams = null;
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams"))
            object.generatorParams = $root.Speech2TextGeneratorParams.toObject(message.generatorParams, options, _depth + 1);
        return object;
    };

    /**
     * Converts this Speech2Text_Create_Reply to JSON.
     * @function toJSON
     * @memberof Speech2Text_Create_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Create_Reply.prototype.toJSON = function() {
        return Speech2Text_Create_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Speech2Text_Create_Reply
     * @function getTypeUrl
     * @memberof Speech2Text_Create_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Speech2Text_Create_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Speech2Text_Create_Reply";
    };

    return Speech2Text_Create_Reply;
})();

$root.Speech2TextGeneratorParams = (function() {

    /**
     * Properties of a Speech2TextGeneratorParams.
     * @typedef {Object} Speech2TextGeneratorParams.$Properties
     * @property {number|null} [taskType] Speech2TextGeneratorParams taskType
     * @property {string|null} [language] Speech2TextGeneratorParams language
     * @property {number|null} [repetitionPenalty] Speech2TextGeneratorParams repetitionPenalty
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a Speech2TextGeneratorParams.
     * @exports ISpeech2TextGeneratorParams
     * @interface ISpeech2TextGeneratorParams
     * @augments Speech2TextGeneratorParams.$Properties
     * @deprecated Use Speech2TextGeneratorParams.$Properties instead.
     */

    /**
     * Shape of a Speech2TextGeneratorParams.
     * @typedef {Speech2TextGeneratorParams.$Properties} Speech2TextGeneratorParams.$Shape
     */

    /**
     * Constructs a new Speech2TextGeneratorParams.
     * @exports Speech2TextGeneratorParams
     * @classdesc Represents a Speech2TextGeneratorParams.
     * @constructor
     * @param {Speech2TextGeneratorParams.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Speech2TextGeneratorParams = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Speech2TextGeneratorParams taskType.
     * @member {number} taskType
     * @memberof Speech2TextGeneratorParams
     * @instance
     */
    Speech2TextGeneratorParams.prototype.taskType = 0;

    /**
     * Speech2TextGeneratorParams language.
     * @member {string} language
     * @memberof Speech2TextGeneratorParams
     * @instance
     */
    Speech2TextGeneratorParams.prototype.language = "";

    /**
     * Speech2TextGeneratorParams repetitionPenalty.
     * @member {number} repetitionPenalty
     * @memberof Speech2TextGeneratorParams
     * @instance
     */
    Speech2TextGeneratorParams.prototype.repetitionPenalty = 0;

    /**
     * Creates a new Speech2TextGeneratorParams instance using the specified properties.
     * @function create
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {Speech2TextGeneratorParams.$Properties=} [properties] Properties to set
     * @returns {Speech2TextGeneratorParams} Speech2TextGeneratorParams instance
     * @type {{
     *   (properties: Speech2TextGeneratorParams.$Shape): Speech2TextGeneratorParams & Speech2TextGeneratorParams.$Shape;
     *   (properties?: Speech2TextGeneratorParams.$Properties): Speech2TextGeneratorParams;
     * }}
     */
    Speech2TextGeneratorParams.create = function(properties) {
        return new Speech2TextGeneratorParams(properties);
    };

    /**
     * Encodes the specified Speech2TextGeneratorParams message. Does not implicitly {@link Speech2TextGeneratorParams.verify|verify} messages.
     * @function encode
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {Speech2TextGeneratorParams.$Properties} message Speech2TextGeneratorParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2TextGeneratorParams.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.taskType != null && $Object.hasOwnProperty.call(message, "taskType"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.taskType);
        if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.language);
        if (message.repetitionPenalty != null && $Object.hasOwnProperty.call(message, "repetitionPenalty"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.repetitionPenalty);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Speech2TextGeneratorParams message, length delimited. Does not implicitly {@link Speech2TextGeneratorParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {Speech2TextGeneratorParams.$Properties} message Speech2TextGeneratorParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2TextGeneratorParams.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Speech2TextGeneratorParams message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2TextGeneratorParams & Speech2TextGeneratorParams.$Shape} Speech2TextGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2TextGeneratorParams.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Speech2TextGeneratorParams(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.taskType = value;
                    else
                        delete message.taskType;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.language = value;
                    else
                        delete message.language;
                    continue;
                }
            case 3: {
                    if (wireType !== 5)
                        break;
                    if ((value = reader.float()) !== 0)
                        message.repetitionPenalty = value;
                    else
                        delete message.repetitionPenalty;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a Speech2TextGeneratorParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2TextGeneratorParams & Speech2TextGeneratorParams.$Shape} Speech2TextGeneratorParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2TextGeneratorParams.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2TextGeneratorParams message.
     * @function verify
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2TextGeneratorParams.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.taskType != null && $Object.hasOwnProperty.call(message, "taskType"))
            if (!$util.isInteger(message.taskType))
                return "taskType: integer expected";
        if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
            if (!$util.isString(message.language))
                return "language: string expected";
        if (message.repetitionPenalty != null && $Object.hasOwnProperty.call(message, "repetitionPenalty"))
            if (typeof message.repetitionPenalty !== "number")
                return "repetitionPenalty: number expected";
        return null;
    };

    /**
     * Creates a Speech2TextGeneratorParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2TextGeneratorParams} Speech2TextGeneratorParams
     */
    Speech2TextGeneratorParams.fromObject = function (object, _depth) {
        if (object instanceof $root.Speech2TextGeneratorParams)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Speech2TextGeneratorParams: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.Speech2TextGeneratorParams();
        if (object.taskType != null)
            if ($Number(object.taskType) !== 0)
                message.taskType = object.taskType >>> 0;
        if (object.language != null)
            if (typeof object.language !== "string" || object.language.length)
                message.language = $String(object.language);
        if (object.repetitionPenalty != null)
            if ($Number(object.repetitionPenalty) !== 0)
                message.repetitionPenalty = $Number(object.repetitionPenalty);
        return message;
    };

    /**
     * Creates a plain object from a Speech2TextGeneratorParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {Speech2TextGeneratorParams} message Speech2TextGeneratorParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2TextGeneratorParams.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.taskType = 0;
            object.language = "";
            object.repetitionPenalty = 0;
        }
        if (message.taskType != null && $Object.hasOwnProperty.call(message, "taskType"))
            object.taskType = message.taskType;
        if (message.language != null && $Object.hasOwnProperty.call(message, "language"))
            object.language = message.language;
        if (message.repetitionPenalty != null && $Object.hasOwnProperty.call(message, "repetitionPenalty"))
            object.repetitionPenalty = options.json && !$isFinite(message.repetitionPenalty) ? $String(message.repetitionPenalty) : message.repetitionPenalty;
        return object;
    };

    /**
     * Converts this Speech2TextGeneratorParams to JSON.
     * @function toJSON
     * @memberof Speech2TextGeneratorParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2TextGeneratorParams.prototype.toJSON = function() {
        return Speech2TextGeneratorParams.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Speech2TextGeneratorParams
     * @function getTypeUrl
     * @memberof Speech2TextGeneratorParams
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Speech2TextGeneratorParams.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Speech2TextGeneratorParams";
    };

    return Speech2TextGeneratorParams;
})();

$root.Speech2Text_Generate_Request = (function() {

    /**
     * Properties of a Speech2Text_Generate_Request.
     * @typedef {Object} Speech2Text_Generate_Request.$Properties
     * @property {Speech2TextGeneratorParams.$Properties|null} [generatorParams] Speech2Text_Generate_Request generatorParams
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a Speech2Text_Generate_Request.
     * @exports ISpeech2Text_Generate_Request
     * @interface ISpeech2Text_Generate_Request
     * @augments Speech2Text_Generate_Request.$Properties
     * @deprecated Use Speech2Text_Generate_Request.$Properties instead.
     */

    /**
     * Shape of a Speech2Text_Generate_Request.
     * @typedef {Speech2Text_Generate_Request.$Properties} Speech2Text_Generate_Request.$Shape
     */

    /**
     * Constructs a new Speech2Text_Generate_Request.
     * @exports Speech2Text_Generate_Request
     * @classdesc Represents a Speech2Text_Generate_Request.
     * @constructor
     * @param {Speech2Text_Generate_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Speech2Text_Generate_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Speech2Text_Generate_Request generatorParams.
     * @member {Speech2TextGeneratorParams.$Properties|null|undefined} generatorParams
     * @memberof Speech2Text_Generate_Request
     * @instance
     */
    Speech2Text_Generate_Request.prototype.generatorParams = null;

    /**
     * Creates a new Speech2Text_Generate_Request instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {Speech2Text_Generate_Request.$Properties=} [properties] Properties to set
     * @returns {Speech2Text_Generate_Request} Speech2Text_Generate_Request instance
     * @type {{
     *   (properties: Speech2Text_Generate_Request.$Shape): Speech2Text_Generate_Request & Speech2Text_Generate_Request.$Shape;
     *   (properties?: Speech2Text_Generate_Request.$Properties): Speech2Text_Generate_Request;
     * }}
     */
    Speech2Text_Generate_Request.create = function(properties) {
        return new Speech2Text_Generate_Request(properties);
    };

    /**
     * Encodes the specified Speech2Text_Generate_Request message. Does not implicitly {@link Speech2Text_Generate_Request.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {Speech2Text_Generate_Request.$Properties} message Speech2Text_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Generate_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams"))
            $root.Speech2TextGeneratorParams.encode(message.generatorParams, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Generate_Request message, length delimited. Does not implicitly {@link Speech2Text_Generate_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {Speech2Text_Generate_Request.$Properties} message Speech2Text_Generate_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Generate_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Generate_Request message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Generate_Request & Speech2Text_Generate_Request.$Shape} Speech2Text_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Generate_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Speech2Text_Generate_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    message.generatorParams = $root.Speech2TextGeneratorParams.decode(reader, reader.uint32(), $undefined, _depth + 1, message.generatorParams);
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a Speech2Text_Generate_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Generate_Request & Speech2Text_Generate_Request.$Shape} Speech2Text_Generate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Generate_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Generate_Request message.
     * @function verify
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Generate_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams")) {
            var error = $root.Speech2TextGeneratorParams.verify(message.generatorParams, _depth + 1);
            if (error)
                return "generatorParams." + error;
        }
        return null;
    };

    /**
     * Creates a Speech2Text_Generate_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Generate_Request} Speech2Text_Generate_Request
     */
    Speech2Text_Generate_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.Speech2Text_Generate_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Speech2Text_Generate_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.Speech2Text_Generate_Request();
        if (object.generatorParams != null) {
            if (!$util.isObject(object.generatorParams))
                throw $TypeError(".Speech2Text_Generate_Request.generatorParams: object expected");
            message.generatorParams = $root.Speech2TextGeneratorParams.fromObject(object.generatorParams, _depth + 1);
        }
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Generate_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {Speech2Text_Generate_Request} message Speech2Text_Generate_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Generate_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.generatorParams = null;
        if (message.generatorParams != null && $Object.hasOwnProperty.call(message, "generatorParams"))
            object.generatorParams = $root.Speech2TextGeneratorParams.toObject(message.generatorParams, options, _depth + 1);
        return object;
    };

    /**
     * Converts this Speech2Text_Generate_Request to JSON.
     * @function toJSON
     * @memberof Speech2Text_Generate_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Generate_Request.prototype.toJSON = function() {
        return Speech2Text_Generate_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Speech2Text_Generate_Request
     * @function getTypeUrl
     * @memberof Speech2Text_Generate_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Speech2Text_Generate_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Speech2Text_Generate_Request";
    };

    return Speech2Text_Generate_Request;
})();

$root.ProtoSpeech2TextSegmentInfo = (function() {

    /**
     * Properties of a ProtoSpeech2TextSegmentInfo.
     * @typedef {Object} ProtoSpeech2TextSegmentInfo.$Properties
     * @property {number|null} [startSec] ProtoSpeech2TextSegmentInfo startSec
     * @property {number|null} [endSec] ProtoSpeech2TextSegmentInfo endSec
     * @property {string|null} [text] ProtoSpeech2TextSegmentInfo text
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a ProtoSpeech2TextSegmentInfo.
     * @exports IProtoSpeech2TextSegmentInfo
     * @interface IProtoSpeech2TextSegmentInfo
     * @augments ProtoSpeech2TextSegmentInfo.$Properties
     * @deprecated Use ProtoSpeech2TextSegmentInfo.$Properties instead.
     */

    /**
     * Shape of a ProtoSpeech2TextSegmentInfo.
     * @typedef {ProtoSpeech2TextSegmentInfo.$Properties} ProtoSpeech2TextSegmentInfo.$Shape
     */

    /**
     * Constructs a new ProtoSpeech2TextSegmentInfo.
     * @exports ProtoSpeech2TextSegmentInfo
     * @classdesc Represents a ProtoSpeech2TextSegmentInfo.
     * @constructor
     * @param {ProtoSpeech2TextSegmentInfo.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var ProtoSpeech2TextSegmentInfo = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * ProtoSpeech2TextSegmentInfo startSec.
     * @member {number} startSec
     * @memberof ProtoSpeech2TextSegmentInfo
     * @instance
     */
    ProtoSpeech2TextSegmentInfo.prototype.startSec = 0;

    /**
     * ProtoSpeech2TextSegmentInfo endSec.
     * @member {number} endSec
     * @memberof ProtoSpeech2TextSegmentInfo
     * @instance
     */
    ProtoSpeech2TextSegmentInfo.prototype.endSec = 0;

    /**
     * ProtoSpeech2TextSegmentInfo text.
     * @member {string} text
     * @memberof ProtoSpeech2TextSegmentInfo
     * @instance
     */
    ProtoSpeech2TextSegmentInfo.prototype.text = "";

    /**
     * Creates a new ProtoSpeech2TextSegmentInfo instance using the specified properties.
     * @function create
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {ProtoSpeech2TextSegmentInfo.$Properties=} [properties] Properties to set
     * @returns {ProtoSpeech2TextSegmentInfo} ProtoSpeech2TextSegmentInfo instance
     * @type {{
     *   (properties: ProtoSpeech2TextSegmentInfo.$Shape): ProtoSpeech2TextSegmentInfo & ProtoSpeech2TextSegmentInfo.$Shape;
     *   (properties?: ProtoSpeech2TextSegmentInfo.$Properties): ProtoSpeech2TextSegmentInfo;
     * }}
     */
    ProtoSpeech2TextSegmentInfo.create = function(properties) {
        return new ProtoSpeech2TextSegmentInfo(properties);
    };

    /**
     * Encodes the specified ProtoSpeech2TextSegmentInfo message. Does not implicitly {@link ProtoSpeech2TextSegmentInfo.verify|verify} messages.
     * @function encode
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {ProtoSpeech2TextSegmentInfo.$Properties} message ProtoSpeech2TextSegmentInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoSpeech2TextSegmentInfo.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.startSec != null && $Object.hasOwnProperty.call(message, "startSec"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.startSec);
        if (message.endSec != null && $Object.hasOwnProperty.call(message, "endSec"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.endSec);
        if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified ProtoSpeech2TextSegmentInfo message, length delimited. Does not implicitly {@link ProtoSpeech2TextSegmentInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {ProtoSpeech2TextSegmentInfo.$Properties} message ProtoSpeech2TextSegmentInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoSpeech2TextSegmentInfo.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a ProtoSpeech2TextSegmentInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoSpeech2TextSegmentInfo & ProtoSpeech2TextSegmentInfo.$Shape} ProtoSpeech2TextSegmentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoSpeech2TextSegmentInfo.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.ProtoSpeech2TextSegmentInfo(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 5)
                        break;
                    if ((value = reader.float()) !== 0)
                        message.startSec = value;
                    else
                        delete message.startSec;
                    continue;
                }
            case 2: {
                    if (wireType !== 5)
                        break;
                    if ((value = reader.float()) !== 0)
                        message.endSec = value;
                    else
                        delete message.endSec;
                    continue;
                }
            case 3: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.text = value;
                    else
                        delete message.text;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a ProtoSpeech2TextSegmentInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProtoSpeech2TextSegmentInfo & ProtoSpeech2TextSegmentInfo.$Shape} ProtoSpeech2TextSegmentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoSpeech2TextSegmentInfo.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProtoSpeech2TextSegmentInfo message.
     * @function verify
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProtoSpeech2TextSegmentInfo.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.startSec != null && $Object.hasOwnProperty.call(message, "startSec"))
            if (typeof message.startSec !== "number")
                return "startSec: number expected";
        if (message.endSec != null && $Object.hasOwnProperty.call(message, "endSec"))
            if (typeof message.endSec !== "number")
                return "endSec: number expected";
        if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a ProtoSpeech2TextSegmentInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProtoSpeech2TextSegmentInfo} ProtoSpeech2TextSegmentInfo
     */
    ProtoSpeech2TextSegmentInfo.fromObject = function (object, _depth) {
        if (object instanceof $root.ProtoSpeech2TextSegmentInfo)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".ProtoSpeech2TextSegmentInfo: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.ProtoSpeech2TextSegmentInfo();
        if (object.startSec != null)
            if ($Number(object.startSec) !== 0)
                message.startSec = $Number(object.startSec);
        if (object.endSec != null)
            if ($Number(object.endSec) !== 0)
                message.endSec = $Number(object.endSec);
        if (object.text != null)
            if (typeof object.text !== "string" || object.text.length)
                message.text = $String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a ProtoSpeech2TextSegmentInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {ProtoSpeech2TextSegmentInfo} message ProtoSpeech2TextSegmentInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProtoSpeech2TextSegmentInfo.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.startSec = 0;
            object.endSec = 0;
            object.text = "";
        }
        if (message.startSec != null && $Object.hasOwnProperty.call(message, "startSec"))
            object.startSec = options.json && !$isFinite(message.startSec) ? $String(message.startSec) : message.startSec;
        if (message.endSec != null && $Object.hasOwnProperty.call(message, "endSec"))
            object.endSec = options.json && !$isFinite(message.endSec) ? $String(message.endSec) : message.endSec;
        if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this ProtoSpeech2TextSegmentInfo to JSON.
     * @function toJSON
     * @memberof ProtoSpeech2TextSegmentInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProtoSpeech2TextSegmentInfo.prototype.toJSON = function() {
        return ProtoSpeech2TextSegmentInfo.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for ProtoSpeech2TextSegmentInfo
     * @function getTypeUrl
     * @memberof ProtoSpeech2TextSegmentInfo
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    ProtoSpeech2TextSegmentInfo.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/ProtoSpeech2TextSegmentInfo";
    };

    return ProtoSpeech2TextSegmentInfo;
})();

$root.Speech2Text_Generate_Reply = (function() {

    /**
     * Properties of a Speech2Text_Generate_Reply.
     * @typedef {Object} Speech2Text_Generate_Reply.$Properties
     * @property {number|null} [status] Speech2Text_Generate_Reply status
     * @property {Array.<ProtoSpeech2TextSegmentInfo.$Properties>|null} [segmentsInfos] Speech2Text_Generate_Reply segmentsInfos
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a Speech2Text_Generate_Reply.
     * @exports ISpeech2Text_Generate_Reply
     * @interface ISpeech2Text_Generate_Reply
     * @augments Speech2Text_Generate_Reply.$Properties
     * @deprecated Use Speech2Text_Generate_Reply.$Properties instead.
     */

    /**
     * Shape of a Speech2Text_Generate_Reply.
     * @typedef {Speech2Text_Generate_Reply.$Properties} Speech2Text_Generate_Reply.$Shape
     */

    /**
     * Constructs a new Speech2Text_Generate_Reply.
     * @exports Speech2Text_Generate_Reply
     * @classdesc Represents a Speech2Text_Generate_Reply.
     * @constructor
     * @param {Speech2Text_Generate_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Speech2Text_Generate_Reply = function (properties) {
        this.segmentsInfos = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Speech2Text_Generate_Reply status.
     * @member {number} status
     * @memberof Speech2Text_Generate_Reply
     * @instance
     */
    Speech2Text_Generate_Reply.prototype.status = 0;

    /**
     * Speech2Text_Generate_Reply segmentsInfos.
     * @member {Array.<ProtoSpeech2TextSegmentInfo.$Properties>} segmentsInfos
     * @memberof Speech2Text_Generate_Reply
     * @instance
     */
    Speech2Text_Generate_Reply.prototype.segmentsInfos = $util.emptyArray;

    /**
     * Creates a new Speech2Text_Generate_Reply instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {Speech2Text_Generate_Reply.$Properties=} [properties] Properties to set
     * @returns {Speech2Text_Generate_Reply} Speech2Text_Generate_Reply instance
     * @type {{
     *   (properties: Speech2Text_Generate_Reply.$Shape): Speech2Text_Generate_Reply & Speech2Text_Generate_Reply.$Shape;
     *   (properties?: Speech2Text_Generate_Reply.$Properties): Speech2Text_Generate_Reply;
     * }}
     */
    Speech2Text_Generate_Reply.create = function(properties) {
        return new Speech2Text_Generate_Reply(properties);
    };

    /**
     * Encodes the specified Speech2Text_Generate_Reply message. Does not implicitly {@link Speech2Text_Generate_Reply.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {Speech2Text_Generate_Reply.$Properties} message Speech2Text_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Generate_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.segmentsInfos != null && message.segmentsInfos.length)
            for (var i = 0; i < message.segmentsInfos.length; ++i)
                $root.ProtoSpeech2TextSegmentInfo.encode(message.segmentsInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Generate_Reply message, length delimited. Does not implicitly {@link Speech2Text_Generate_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {Speech2Text_Generate_Reply.$Properties} message Speech2Text_Generate_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Generate_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Generate_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Generate_Reply & Speech2Text_Generate_Reply.$Shape} Speech2Text_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Generate_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Speech2Text_Generate_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    if (!(message.segmentsInfos && message.segmentsInfos.length))
                        message.segmentsInfos = [];
                    message.segmentsInfos.push($root.ProtoSpeech2TextSegmentInfo.decode(reader, reader.uint32(), $undefined, _depth + 1));
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a Speech2Text_Generate_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Generate_Reply & Speech2Text_Generate_Reply.$Shape} Speech2Text_Generate_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Generate_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Generate_Reply message.
     * @function verify
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Generate_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.segmentsInfos != null && $Object.hasOwnProperty.call(message, "segmentsInfos")) {
            if (!$Array.isArray(message.segmentsInfos))
                return "segmentsInfos: array expected";
            for (var i = 0; i < message.segmentsInfos.length; ++i) {
                var error = $root.ProtoSpeech2TextSegmentInfo.verify(message.segmentsInfos[i], _depth + 1);
                if (error)
                    return "segmentsInfos." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Speech2Text_Generate_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Generate_Reply} Speech2Text_Generate_Reply
     */
    Speech2Text_Generate_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.Speech2Text_Generate_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Speech2Text_Generate_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.Speech2Text_Generate_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        if (object.segmentsInfos) {
            if (!$Array.isArray(object.segmentsInfos))
                throw $TypeError(".Speech2Text_Generate_Reply.segmentsInfos: array expected");
            message.segmentsInfos = $Array(object.segmentsInfos.length);
            for (var i = 0; i < object.segmentsInfos.length; ++i) {
                if (!$util.isObject(object.segmentsInfos[i]))
                    throw $TypeError(".Speech2Text_Generate_Reply.segmentsInfos: object expected");
                message.segmentsInfos[i] = $root.ProtoSpeech2TextSegmentInfo.fromObject(object.segmentsInfos[i], _depth + 1);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Generate_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {Speech2Text_Generate_Reply} message Speech2Text_Generate_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Generate_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.segmentsInfos = [];
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        if (message.segmentsInfos && message.segmentsInfos.length) {
            object.segmentsInfos = $Array(message.segmentsInfos.length);
            for (var j = 0; j < message.segmentsInfos.length; ++j)
                object.segmentsInfos[j] = $root.ProtoSpeech2TextSegmentInfo.toObject(message.segmentsInfos[j], options, _depth + 1);
        }
        return object;
    };

    /**
     * Converts this Speech2Text_Generate_Reply to JSON.
     * @function toJSON
     * @memberof Speech2Text_Generate_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Generate_Reply.prototype.toJSON = function() {
        return Speech2Text_Generate_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Speech2Text_Generate_Reply
     * @function getTypeUrl
     * @memberof Speech2Text_Generate_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Speech2Text_Generate_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Speech2Text_Generate_Reply";
    };

    return Speech2Text_Generate_Reply;
})();

$root.Speech2Text_Release_Request = (function() {

    /**
     * Properties of a Speech2Text_Release_Request.
     * @typedef {Object} Speech2Text_Release_Request.$Properties
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a Speech2Text_Release_Request.
     * @exports ISpeech2Text_Release_Request
     * @interface ISpeech2Text_Release_Request
     * @augments Speech2Text_Release_Request.$Properties
     * @deprecated Use Speech2Text_Release_Request.$Properties instead.
     */

    /**
     * Shape of a Speech2Text_Release_Request.
     * @typedef {Speech2Text_Release_Request.$Properties} Speech2Text_Release_Request.$Shape
     */

    /**
     * Constructs a new Speech2Text_Release_Request.
     * @exports Speech2Text_Release_Request
     * @classdesc Represents a Speech2Text_Release_Request.
     * @constructor
     * @param {Speech2Text_Release_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Speech2Text_Release_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Creates a new Speech2Text_Release_Request instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {Speech2Text_Release_Request.$Properties=} [properties] Properties to set
     * @returns {Speech2Text_Release_Request} Speech2Text_Release_Request instance
     * @type {{
     *   (properties: Speech2Text_Release_Request.$Shape): Speech2Text_Release_Request & Speech2Text_Release_Request.$Shape;
     *   (properties?: Speech2Text_Release_Request.$Properties): Speech2Text_Release_Request;
     * }}
     */
    Speech2Text_Release_Request.create = function(properties) {
        return new Speech2Text_Release_Request(properties);
    };

    /**
     * Encodes the specified Speech2Text_Release_Request message. Does not implicitly {@link Speech2Text_Release_Request.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {Speech2Text_Release_Request.$Properties} message Speech2Text_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Release_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Release_Request message, length delimited. Does not implicitly {@link Speech2Text_Release_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {Speech2Text_Release_Request.$Properties} message Speech2Text_Release_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Release_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Release_Request message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Release_Request & Speech2Text_Release_Request.$Shape} Speech2Text_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Release_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Speech2Text_Release_Request();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            reader.skipType(tag & 7, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a Speech2Text_Release_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Release_Request & Speech2Text_Release_Request.$Shape} Speech2Text_Release_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Release_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Release_Request message.
     * @function verify
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Release_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        return null;
    };

    /**
     * Creates a Speech2Text_Release_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Release_Request} Speech2Text_Release_Request
     */
    Speech2Text_Release_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.Speech2Text_Release_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Speech2Text_Release_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        return new $root.Speech2Text_Release_Request();
    };

    /**
     * Creates a plain object from a Speech2Text_Release_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {Speech2Text_Release_Request} message Speech2Text_Release_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Release_Request.toObject = function () {
        return {};
    };

    /**
     * Converts this Speech2Text_Release_Request to JSON.
     * @function toJSON
     * @memberof Speech2Text_Release_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Release_Request.prototype.toJSON = function() {
        return Speech2Text_Release_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Speech2Text_Release_Request
     * @function getTypeUrl
     * @memberof Speech2Text_Release_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Speech2Text_Release_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Speech2Text_Release_Request";
    };

    return Speech2Text_Release_Request;
})();

$root.Speech2Text_Release_Reply = (function() {

    /**
     * Properties of a Speech2Text_Release_Reply.
     * @typedef {Object} Speech2Text_Release_Reply.$Properties
     * @property {number|null} [status] Speech2Text_Release_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a Speech2Text_Release_Reply.
     * @exports ISpeech2Text_Release_Reply
     * @interface ISpeech2Text_Release_Reply
     * @augments Speech2Text_Release_Reply.$Properties
     * @deprecated Use Speech2Text_Release_Reply.$Properties instead.
     */

    /**
     * Shape of a Speech2Text_Release_Reply.
     * @typedef {Speech2Text_Release_Reply.$Properties} Speech2Text_Release_Reply.$Shape
     */

    /**
     * Constructs a new Speech2Text_Release_Reply.
     * @exports Speech2Text_Release_Reply
     * @classdesc Represents a Speech2Text_Release_Reply.
     * @constructor
     * @param {Speech2Text_Release_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Speech2Text_Release_Reply = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Speech2Text_Release_Reply status.
     * @member {number} status
     * @memberof Speech2Text_Release_Reply
     * @instance
     */
    Speech2Text_Release_Reply.prototype.status = 0;

    /**
     * Creates a new Speech2Text_Release_Reply instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {Speech2Text_Release_Reply.$Properties=} [properties] Properties to set
     * @returns {Speech2Text_Release_Reply} Speech2Text_Release_Reply instance
     * @type {{
     *   (properties: Speech2Text_Release_Reply.$Shape): Speech2Text_Release_Reply & Speech2Text_Release_Reply.$Shape;
     *   (properties?: Speech2Text_Release_Reply.$Properties): Speech2Text_Release_Reply;
     * }}
     */
    Speech2Text_Release_Reply.create = function(properties) {
        return new Speech2Text_Release_Reply(properties);
    };

    /**
     * Encodes the specified Speech2Text_Release_Reply message. Does not implicitly {@link Speech2Text_Release_Reply.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {Speech2Text_Release_Reply.$Properties} message Speech2Text_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Release_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Release_Reply message, length delimited. Does not implicitly {@link Speech2Text_Release_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {Speech2Text_Release_Reply.$Properties} message Speech2Text_Release_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Release_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Release_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Release_Reply & Speech2Text_Release_Reply.$Shape} Speech2Text_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Release_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Speech2Text_Release_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a Speech2Text_Release_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Release_Reply & Speech2Text_Release_Reply.$Shape} Speech2Text_Release_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Release_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Release_Reply message.
     * @function verify
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Release_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a Speech2Text_Release_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Release_Reply} Speech2Text_Release_Reply
     */
    Speech2Text_Release_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.Speech2Text_Release_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Speech2Text_Release_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.Speech2Text_Release_Reply();
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Release_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {Speech2Text_Release_Reply} message Speech2Text_Release_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Release_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this Speech2Text_Release_Reply to JSON.
     * @function toJSON
     * @memberof Speech2Text_Release_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Release_Reply.prototype.toJSON = function() {
        return Speech2Text_Release_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Speech2Text_Release_Reply
     * @function getTypeUrl
     * @memberof Speech2Text_Release_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Speech2Text_Release_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Speech2Text_Release_Reply";
    };

    return Speech2Text_Release_Reply;
})();

$root.Speech2Text_Tokenize_Request = (function() {

    /**
     * Properties of a Speech2Text_Tokenize_Request.
     * @typedef {Object} Speech2Text_Tokenize_Request.$Properties
     * @property {string|null} [text] Speech2Text_Tokenize_Request text
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a Speech2Text_Tokenize_Request.
     * @exports ISpeech2Text_Tokenize_Request
     * @interface ISpeech2Text_Tokenize_Request
     * @augments Speech2Text_Tokenize_Request.$Properties
     * @deprecated Use Speech2Text_Tokenize_Request.$Properties instead.
     */

    /**
     * Shape of a Speech2Text_Tokenize_Request.
     * @typedef {Speech2Text_Tokenize_Request.$Properties} Speech2Text_Tokenize_Request.$Shape
     */

    /**
     * Constructs a new Speech2Text_Tokenize_Request.
     * @exports Speech2Text_Tokenize_Request
     * @classdesc Represents a Speech2Text_Tokenize_Request.
     * @constructor
     * @param {Speech2Text_Tokenize_Request.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Speech2Text_Tokenize_Request = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Speech2Text_Tokenize_Request text.
     * @member {string} text
     * @memberof Speech2Text_Tokenize_Request
     * @instance
     */
    Speech2Text_Tokenize_Request.prototype.text = "";

    /**
     * Creates a new Speech2Text_Tokenize_Request instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {Speech2Text_Tokenize_Request.$Properties=} [properties] Properties to set
     * @returns {Speech2Text_Tokenize_Request} Speech2Text_Tokenize_Request instance
     * @type {{
     *   (properties: Speech2Text_Tokenize_Request.$Shape): Speech2Text_Tokenize_Request & Speech2Text_Tokenize_Request.$Shape;
     *   (properties?: Speech2Text_Tokenize_Request.$Properties): Speech2Text_Tokenize_Request;
     * }}
     */
    Speech2Text_Tokenize_Request.create = function(properties) {
        return new Speech2Text_Tokenize_Request(properties);
    };

    /**
     * Encodes the specified Speech2Text_Tokenize_Request message. Does not implicitly {@link Speech2Text_Tokenize_Request.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {Speech2Text_Tokenize_Request.$Properties} message Speech2Text_Tokenize_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Tokenize_Request.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Tokenize_Request message, length delimited. Does not implicitly {@link Speech2Text_Tokenize_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {Speech2Text_Tokenize_Request.$Properties} message Speech2Text_Tokenize_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Tokenize_Request.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Tokenize_Request message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Tokenize_Request & Speech2Text_Tokenize_Request.$Shape} Speech2Text_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Tokenize_Request.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Speech2Text_Tokenize_Request(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    if ((value = reader.stringVerify()).length)
                        message.text = value;
                    else
                        delete message.text;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a Speech2Text_Tokenize_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Tokenize_Request & Speech2Text_Tokenize_Request.$Shape} Speech2Text_Tokenize_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Tokenize_Request.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Tokenize_Request message.
     * @function verify
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Tokenize_Request.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a Speech2Text_Tokenize_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Tokenize_Request} Speech2Text_Tokenize_Request
     */
    Speech2Text_Tokenize_Request.fromObject = function (object, _depth) {
        if (object instanceof $root.Speech2Text_Tokenize_Request)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Speech2Text_Tokenize_Request: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.Speech2Text_Tokenize_Request();
        if (object.text != null)
            if (typeof object.text !== "string" || object.text.length)
                message.text = $String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Tokenize_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {Speech2Text_Tokenize_Request} message Speech2Text_Tokenize_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Tokenize_Request.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.text = "";
        if (message.text != null && $Object.hasOwnProperty.call(message, "text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this Speech2Text_Tokenize_Request to JSON.
     * @function toJSON
     * @memberof Speech2Text_Tokenize_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Tokenize_Request.prototype.toJSON = function() {
        return Speech2Text_Tokenize_Request.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Speech2Text_Tokenize_Request
     * @function getTypeUrl
     * @memberof Speech2Text_Tokenize_Request
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Speech2Text_Tokenize_Request.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Speech2Text_Tokenize_Request";
    };

    return Speech2Text_Tokenize_Request;
})();

$root.Speech2Text_Tokenize_Reply = (function() {

    /**
     * Properties of a Speech2Text_Tokenize_Reply.
     * @typedef {Object} Speech2Text_Tokenize_Reply.$Properties
     * @property {Array.<number>|null} [tokens] Speech2Text_Tokenize_Reply tokens
     * @property {number|null} [status] Speech2Text_Tokenize_Reply status
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a Speech2Text_Tokenize_Reply.
     * @exports ISpeech2Text_Tokenize_Reply
     * @interface ISpeech2Text_Tokenize_Reply
     * @augments Speech2Text_Tokenize_Reply.$Properties
     * @deprecated Use Speech2Text_Tokenize_Reply.$Properties instead.
     */

    /**
     * Shape of a Speech2Text_Tokenize_Reply.
     * @typedef {Speech2Text_Tokenize_Reply.$Properties} Speech2Text_Tokenize_Reply.$Shape
     */

    /**
     * Constructs a new Speech2Text_Tokenize_Reply.
     * @exports Speech2Text_Tokenize_Reply
     * @classdesc Represents a Speech2Text_Tokenize_Reply.
     * @constructor
     * @param {Speech2Text_Tokenize_Reply.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var Speech2Text_Tokenize_Reply = function (properties) {
        this.tokens = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * Speech2Text_Tokenize_Reply tokens.
     * @member {Array.<number>} tokens
     * @memberof Speech2Text_Tokenize_Reply
     * @instance
     */
    Speech2Text_Tokenize_Reply.prototype.tokens = $util.emptyArray;

    /**
     * Speech2Text_Tokenize_Reply status.
     * @member {number} status
     * @memberof Speech2Text_Tokenize_Reply
     * @instance
     */
    Speech2Text_Tokenize_Reply.prototype.status = 0;

    /**
     * Creates a new Speech2Text_Tokenize_Reply instance using the specified properties.
     * @function create
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {Speech2Text_Tokenize_Reply.$Properties=} [properties] Properties to set
     * @returns {Speech2Text_Tokenize_Reply} Speech2Text_Tokenize_Reply instance
     * @type {{
     *   (properties: Speech2Text_Tokenize_Reply.$Shape): Speech2Text_Tokenize_Reply & Speech2Text_Tokenize_Reply.$Shape;
     *   (properties?: Speech2Text_Tokenize_Reply.$Properties): Speech2Text_Tokenize_Reply;
     * }}
     */
    Speech2Text_Tokenize_Reply.create = function(properties) {
        return new Speech2Text_Tokenize_Reply(properties);
    };

    /**
     * Encodes the specified Speech2Text_Tokenize_Reply message. Does not implicitly {@link Speech2Text_Tokenize_Reply.verify|verify} messages.
     * @function encode
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {Speech2Text_Tokenize_Reply.$Properties} message Speech2Text_Tokenize_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Tokenize_Reply.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.tokens != null && message.tokens.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.tokens.length; ++i)
                writer.int32(message.tokens[i]);
            writer.ldelim();
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified Speech2Text_Tokenize_Reply message, length delimited. Does not implicitly {@link Speech2Text_Tokenize_Reply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {Speech2Text_Tokenize_Reply.$Properties} message Speech2Text_Tokenize_Reply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Speech2Text_Tokenize_Reply.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Speech2Text_Tokenize_Reply message from the specified reader or buffer.
     * @function decode
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Speech2Text_Tokenize_Reply & Speech2Text_Tokenize_Reply.$Shape} Speech2Text_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Tokenize_Reply.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Speech2Text_Tokenize_Reply(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType === 2) {
                        if (!(message.tokens && message.tokens.length))
                            message.tokens = [];
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tokens.push(reader.int32());
                        continue;
                    }
                    if (wireType !== 0)
                        break;
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    message.tokens.push(reader.int32());
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    if (value = reader.uint32())
                        message.status = value;
                    else
                        delete message.status;
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a Speech2Text_Tokenize_Reply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Speech2Text_Tokenize_Reply & Speech2Text_Tokenize_Reply.$Shape} Speech2Text_Tokenize_Reply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Speech2Text_Tokenize_Reply.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Speech2Text_Tokenize_Reply message.
     * @function verify
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Speech2Text_Tokenize_Reply.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.tokens != null && $Object.hasOwnProperty.call(message, "tokens")) {
            if (!$Array.isArray(message.tokens))
                return "tokens: array expected";
            for (var i = 0; i < message.tokens.length; ++i)
                if (!$util.isInteger(message.tokens[i]))
                    return "tokens: integer[] expected";
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a Speech2Text_Tokenize_Reply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Speech2Text_Tokenize_Reply} Speech2Text_Tokenize_Reply
     */
    Speech2Text_Tokenize_Reply.fromObject = function (object, _depth) {
        if (object instanceof $root.Speech2Text_Tokenize_Reply)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".Speech2Text_Tokenize_Reply: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.Speech2Text_Tokenize_Reply();
        if (object.tokens) {
            if (!$Array.isArray(object.tokens))
                throw $TypeError(".Speech2Text_Tokenize_Reply.tokens: array expected");
            message.tokens = $Array(object.tokens.length);
            for (var i = 0; i < object.tokens.length; ++i)
                message.tokens[i] = object.tokens[i] | 0;
        }
        if (object.status != null)
            if ($Number(object.status) !== 0)
                message.status = object.status >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Speech2Text_Tokenize_Reply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {Speech2Text_Tokenize_Reply} message Speech2Text_Tokenize_Reply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Speech2Text_Tokenize_Reply.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.tokens = [];
        if (options.defaults)
            object.status = 0;
        if (message.tokens && message.tokens.length) {
            object.tokens = $Array(message.tokens.length);
            for (var j = 0; j < message.tokens.length; ++j)
                object.tokens[j] = message.tokens[j];
        }
        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this Speech2Text_Tokenize_Reply to JSON.
     * @function toJSON
     * @memberof Speech2Text_Tokenize_Reply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Speech2Text_Tokenize_Reply.prototype.toJSON = function() {
        return Speech2Text_Tokenize_Reply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for Speech2Text_Tokenize_Reply
     * @function getTypeUrl
     * @memberof Speech2Text_Tokenize_Reply
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    Speech2Text_Tokenize_Reply.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/Speech2Text_Tokenize_Reply";
    };

    return Speech2Text_Tokenize_Reply;
})();

module.exports = $root;
