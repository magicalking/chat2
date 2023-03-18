export async function selectChatPromptsBySessionUUID(pool, sessionUUID: string) {
        const query = {
                text: 'SELECT id, uuid, role, content, score, user_id, created_at, updated_at, created_by, updated_by FROM chat_prompt WHERE chat_session_uuid = $1 order by id',
                values: [sessionUUID],
        };

        const result = await pool.query(query);

        return result.rows;
}
