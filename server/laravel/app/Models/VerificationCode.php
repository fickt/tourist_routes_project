<?php

namespace App\Models;

use App\Events\VerificationCodeRequestedEvent;
use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

/**
 * App\Models\VerificationCode
 * == Properties ==
 * @property int $id
 * @property string $email
 * @property int $code
 * @property bool $is_valid
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @mixin \Eloquent
 */
class VerificationCode extends Model
{
    use HasFactory;

    protected $table = 'verification_codes';

    protected $fillable = [
        'email',
        'code',
    ];

    protected $guarded = [
        'is_valid'
    ];

    public function sendVerificationCodeToEmail(string $email): string
    {
        $verificationCode = $this->generateVerificationCode();

        if (self::query()->where('email', '=', $email)->exists()) {
            self::query()
                ->where('email', '=', $email)
                ->delete();
        }
        self::query()->create([
            'email' => $email,
            'code' => $verificationCode
        ]);
        VerificationCodeRequestedEvent::dispatch($email, $verificationCode);
        return $email;
    }

    private function generateVerificationCode(): int
    {
        try {
            return random_int(1000, 9999);
        } catch (Exception $e) {
            $exceptionMessage = $e->getMessage();
            throw new HttpException(Response::HTTP_INTERNAL_SERVER_ERROR, "Internal server error: $exceptionMessage");
        }
    }
}
